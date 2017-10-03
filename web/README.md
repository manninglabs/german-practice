# Use

## Starting Localhost

```
make env=local ver=0.0.5 run
```

## Deploy

1.
```
make ver=latest env=dev buildimage pushimage
```

2. Then update image tag in `deployment.yaml`
3. Then run `kubectl apply -f deployment.yaml`

## Test Docker Image

Can be used to test running the image before deployment.

```
make ver=latest env=dev buildimage
make ver=latest env=dev testimage
```
