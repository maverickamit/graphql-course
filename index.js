import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema";
import db from "./_db";

const resolvers = {
  Query: {
    games: () => db.games,
    reviews: () => db.reviews,
    authors: () => db.authors,
  },
};
// setup ApolloServer
const server = new ApolloServer({
  // typeDefs and resolvers
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer({ server, port: 4000 });

console.log(`🚀 Server ready at url:${url} and port:${port}`);
