# Reference

## Generate gRPC Services When services.proto is Updated

```
protoc -I . services.proto --go_out=plugins=grpc:.
protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  -I . \
  --js_out=import_style=commonjs,binary:. \
  --ts_out=service=true:. \
  services.proto
```