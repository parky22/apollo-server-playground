const { ApolloEngine } = require('apollo-engine');
const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs } = require('./typeDefs');
const resolvers  = require('./resolvers');
const express = require('express');

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: true,
  cacheControl: true,
  engine: false,
});

const app = express();
server.applyMiddleware({ app });

const engine = new ApolloEngine({
  apiKey: process.env.ENGINE_API_KEY,
});

engine.listen({
  port: 4000,
  expressApp: app,
});
