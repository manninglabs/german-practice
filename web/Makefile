build:
  GOOS=linux go build -o app
  docker build -t gcr.io/german-practice/german-practice:0.0.4 .
  rm -rf app

push:
  gcloud docker -- push gcr.io/german-practice/german-practice:0.0.4
