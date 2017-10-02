# german-practice

## Deployment

```
npm run build
git add .
git commit -am "<message>"
docker build -t gcr.io/german-practice/german-practice:<ver> .
```

Then (optional) test via `docker run --rm -it -p 5000:5000 gcr.io/german-practice/german-practice:<ver>`

Then:

```
gcloud docker -- push gcr.io/german-practice/german-practice:<ver>
kubectl set image deployment/german-practice german-practice=gcr.io/german-practice/german-practice:<ver>
gcloud container clusters get-credentials german-practice-cluster
kubectl get nodes
kubectl create -f service.yaml
kubectl create -f deployment.yaml
kubectl get pods
kubectl get svc
kubectl logs -f POD-NAME
```
