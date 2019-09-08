import koa from "koa";
import { ApolloServer, IResolvers, gql } from "apollo-server-koa";
import "./utils/env";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers: IResolvers = {
  Query: {
    hello: () => "Hello, world"
  }
};

const bootstrap = async () => {
  const app = new koa();
  const apolloServer = new ApolloServer({
    resolvers,
    typeDefs
  });
  apolloServer.applyMiddleware({ app });

  const APP_PORT = process.env.APP_PORT;
  app.listen({ port: APP_PORT }, () => {
    console.log(`🚀 Server ready at ::${APP_PORT}${apolloServer.graphqlPath}`);
  });
};

bootstrap();
