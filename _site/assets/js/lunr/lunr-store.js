var store = [{
        "title": "Spark groupBy Keys Must Be Deterministic",
        "excerpt":"When using groupBy in Spark, the grouping key must be deterministic. For the same input record, evaluating the key again on another executor should produce the same value. This looks reasonable, but it is not reliable: val result = df .groupBy(monotonically_increasing_id() % 100) .count() Initially, you might want to use...","categories": ["blog"],
        "tags": ["Spark","Distributed Systems"],
        "url": "/blog/spark-groupby-deterministic-key/",
        "teaser": null
      }]
