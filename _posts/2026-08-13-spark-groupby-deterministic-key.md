---
title: "Spark groupBy Keys Must Be Deterministic"
date: 2026-08-13
categories:
  - blog
tags:
  - Spark
  - Distributed Systems
---

When using `groupBy` in Spark, the grouping key must be deterministic. For the same input record, evaluating the key
again on another executor should produce the same value.

This looks reasonable, but it is not reliable:

```scala
val result = df
  .groupBy(monotonically_increasing_id() % 100)
  .count()
```

Initially, you might want to use it to distribute the highly skewed data to executors evenly, however, the result may be
surprisingly incorrect once an executor needs to rerun.

### Why executor failures make this worse

`groupBy` usually triggers a shuffle. Spark may calculate a key on one executor and write shuffle data. If that executor
fails, Spark retries the task and recalculates the partition on another executor.

With a deterministic key, the recalculated record is sent to the same group, so Spark can complete the shuffle and
aggregation. With a non-deterministic key, the key may change during recomputation. The same record can then be sent to
a different group.

This can produce unstable aggregates, split records across multiple keys, inconsistent retry results, and data loss or
duplication in workflows that depend on aggregation, deduplication, or joins.

Spark can retry a failed task, but it cannot infer which random key was produced by the previous attempt. Retry is
therefore not enough to make a non-deterministic grouping key safe.

### Recommended approach

Use a stable field from the input data, or derive the key from stable fields:

```scala
val result = df
  .groupBy($"user_id")
  .count()
```

```python
result = df.groupBy("user_id").count()
```

If a random value is truly required, generate it once and persist the result before using it in a later `groupBy`, join,
or deduplication step. Do not put a random function, the current time, or mutable external state directly into the
grouping key.

In short: **Spark can recompute a failed task, but it cannot reproduce a non-deterministic key.**
