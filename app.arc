@app
begin-app

@http
/graphql
  method post
  src graphql

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
