# Reference

## Cluster Setup

(Reference)[https://cloud.google.com/container-engine/docs/quickstart]

Example:

```
gcloud auth application-default login
gcloud config set project PROJECT_ID
gcloud config set compute/zone europe-west3-a
gcloud container clusters create german-practice-cluster
gcloud container clusters list
gcloud compute instances list
gcloud config set container/cluster german-practice-cluster
```