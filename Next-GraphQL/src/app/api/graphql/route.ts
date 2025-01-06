import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import gql from "graphql-tag";

let userData = [
    {
        id: 1,
        title: "User 1",
        data: "User 1 Data",
        condition: true
    },
    {
        id: 2,
        title: "User 2",
        data: "User 2 Data",
        condition: false
    }
];

const typeDefs = gql`
    type Query {
        user: [User]
    }

    input userInputType {
        id: Int
        title: String
        data: String
        condition: Boolean
    }

    type Mutation {
        createUser(user: userInputType): User

        deleteUser(id: Int): String
    }

    type User {
        id: Int
        title: String
        data: String
        condition: Boolean
    }
`;

const resolvers = {
    Query: {
        user: () => {
            return userData;
        }
    },
    Mutation: {
        createUser: (
            root: {},
            args: {
                user: {
                    id: number,
                    title: string,
                    data: string,
                    condition: boolean
                }
            },
            context: {},
            info: {}
        ) => {
            userData.push(args.user);
            return args.user
        },
        deleteUser: (
            args: {
                id: number
            }
        ) => {
            let removeUser = userData.filter((user) => user.id !== args.id);
            console.log(removeUser);
            return `User ${args.id} Is Successfully Deleted`;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };