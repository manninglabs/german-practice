# Starting gRPC Web Server

```
$GOPATH/bin/grpcwebproxy \
    --server_tls_cert_file=cert.pem \
    --server_tls_key_file=key.pem \
    --backend_addr=localhost:50051 \
    --backend_tls_noverify
```

# Reference

## Generate gRPC Web Server TLS Cert and Key

```
openssl req -newkey rsa:4096 -nodes -sha512 -x509 -days 3650 -nodes -out cert.pem -keyout key.pem
```

