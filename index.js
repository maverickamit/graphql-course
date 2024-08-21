import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// setup ApolloServer
const server = new ApolloServer({
  // typeDefs and resolvers
});

const { url } = await startStandaloneServer({ server, port: 4000 });

console.log(`🚀 Server ready at url:${url} and port:${port}`);
