# Use

## Starting Localhost

```
make ver=0.0.1 env=local run
```

## Deploy

```
make ver=latest env=dev build push
```

## Test Docker Image

Can be used to test running the image before deployment.

```
make ver=latest env=dev build
make ver=latest env=dev test
```

## Manage

```
kubectl proxy
```

Then open http://127.0.0.1:8001/ui