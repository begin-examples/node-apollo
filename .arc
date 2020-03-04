@app
begin-app

@http
post /graphql

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
