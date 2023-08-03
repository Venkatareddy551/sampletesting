import express, { Application } from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolver'
import { typeDefs } from './schema';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app: Application = express();

const server = new ApolloServer({ schema });
(async () =>{
  await server.start();
  // Integrate Apollo Server middleware with Express
  server.applyMiddleware({ app });
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/graphql`);
  });
})()

