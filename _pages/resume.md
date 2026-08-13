---
permalink: /resume/
layout: single
author_profile: true
classes: wide
---

Senior Software Engineer with experience building large-scale streaming and batch data platforms, AI-powered data
governance systems, and LLM-driven agent orchestration platforms. Specialized in distributed systems, batch/real-time
data processing, ML Ops, and productionizing GenAI workflows using LangChain, LangGraph, and domain-specific LLMs.

## Work Experience

### Apple - Senior Software Engineer

- Architected and productionized an agentic data quality platform using Python and LangGraph, leveraging a multi-agent
  architecture to generate 70-100 statistical and semantic validation rules per dataset from metadata, reducing manual
  rule authoring effort by 60%.
- Developed an LLM-powered agent orchestration platform using Python, LangGraph, and Claude SDK to automate 10+
  migration of data pipelines to a domain-specific anonymized identity framework, reducing migration effort from 3 days
  to 5 hours through autonomous code generation, dependency analysis, and workflow planning.
- Engineered the end-to-end feature enrichment framework delivering training-ready datasets for downstream ML workloads,
  eliminating data prep and cutting time-to-train by 50% with async API enrichment, in-flight PII redaction, failure
  tagging, and retry orchestration.
- Built and owned the music library feed pipeline with Scala and Spark, turning 1B+ protobuf events/day into typed
  transaction data, powering music recommendation and fuzzy search.

### TikTok - Data Engineer, Data Platform

- Built a two-stage detection pipeline for Trust & Safety with Flink for real-time tag filtering and Ray for ML-driven
  tag relevance refinement, enabling the moderation team to catch high-priority incidents within a 30-minute end-to-end
  SLA.
- Re-architected the feature pipeline for video moderation models in Spark, eliminating train-serve skew via a shared
  feature layer, shortening model iteration cycles by 40%, and unblocking the ML team to ship 6+ model versions per
  quarter.
- Rebuilt the model evaluation and labeling pipelines powering Video/Live moderation QC, cutting end-to-end latency by
  60% and compute cost by 30%, unblocking weekly model quality reviews and feeding ground-truth labels back into the
  training loop.

### Amazon - Data Engineer II

- Led development of a scalable data platform framework on AWS using Airflow, Spark, ECS, and Step Functions, enabling
  decentralized pipeline orchestration, standardized governance, and secure PII/PHI processing across multiple
  engineering teams, reducing platform maintenance cost by 80%.
- Designed a self-service data platform for BI and analytics workloads across 6+ teams, improving deployment velocity by
  30% and optimizing Redshift utilization through standardized data deployment and governance practices.
- Automated migration of 400+ legacy ETL workflows to AWS via a pipeline-as-code framework, accelerating migration by
  60% while standardizing CI/CD, infrastructure provisioning, and workflow orchestration.
- Transformed a PB-scale communication data pipeline from batch to real-time architecture using Elasticsearch, Firehose,
  and Lambda, reducing operational cost by 15%.

## Skills

**Programming Languages:** Python, Scala, SQL, TypeScript, JavaScript, Java

**LLM & AI Systems:** Multi-Agent Systems, Agentic Infrastructures, RAG, Prompt Engineering, Evals Framework

**Data & AI Infrastructure:** Spark, Flink, Ray, Hadoop, Kafka, PyTorch, Hive, Airflow, Splunk, Elasticsearch

**Data Storage:** Data Lakehouse, Vector Database, Relational (SQL) Database, Non-relational (NoSQL) Database

**Cloud & Dev Tools:** AWS, GCP, Docker, CI/CD, Git, Bash, Unix, Jenkins

## Education

**Master of Financial Engineering**, University of Southern California

**Bachelor of Computational Mechanics**, Xiangtan University
