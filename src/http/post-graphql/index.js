let arc = require('@architect/functions')
let {ApolloServer, gql} = require('apollo-server-lambda')

let typeDefs = gql`
  type Query {
    hello: String
  }
`

let resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

let server = new ApolloServer({typeDefs, resolvers})
let handler = server.createHandler()

exports.handler = function(event, context, callback) {
  let body = arc.http.helpers.bodyParser(event)
  // Body is now parsed, re-encode to JSON for Apollo
  event.body = JSON.stringify(body)
  handler(event, context, callback)
}
