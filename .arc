# Warning: do not edit
# --------------------
# This is a generated file and will be overwritten

@app
begin-app

@http
post /graphql

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
