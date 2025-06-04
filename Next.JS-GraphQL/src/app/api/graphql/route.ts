import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { resolvers, typeDefs } from "@/graphql";
import { ApolloServer } from "@apollo/server";

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };