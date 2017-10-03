# Use

## Starting Localhost

```
make ver=0.0.1 env=local run
```

## Deploy

```
make ver=latest env=dev build push
kubectl <create|replace> -f kubernetes.yaml
```

## Test Docker Image

Can be used to test running the image before deployment.

```
make ver=latest env=dev build
make ver=latest env=dev test
```
