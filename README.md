# german-practice

## Deployment

1. Update version
```
npm run build
git add .
git commit -am "<message>"
docker build -t gcr.io/german-practice/german-practice:<ver> .
gcloud docker -- push gcr.io/german-practice/german-practice:<ver> .
kubectl set image deployment/german-practice german-practice=gcr.io/german-practice/german-practice:<ver>
```

## Localhost setup for deployments

1. Install Docker, gcloud SDK with kubectl components
2. TBD