import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema";

// setup ApolloServer
const server = new ApolloServer({
  // typeDefs and resolvers
  typeDefs,
});

const { url } = await startStandaloneServer({ server, port: 4000 });

console.log(`🚀 Server ready at url:${url} and port:${port}`);
