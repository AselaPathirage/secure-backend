Getting Started

1. `npm install`
2. `npm start`

To generate a certificate

Get the private key and cert in the same command in PKCS8 format

`openssl req -x509 -sha256 -nodes -days 3650 -newkey rsa:2048 \
    -subj "/C=US/ST=CA/L=Mountain View/O=<add>/OU=<add>/CN=localhost" \
    -extensions SAN \
    -config <(cat /etc/ssl/openssl.cnf \
        <(printf "\n[SAN]\nsubjectAltName=DNS:localhost")) \
    -keyout tls.key \
    -out tls.crt`
