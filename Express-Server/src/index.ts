import express, { Application } from "express";
import { expressMiddleware } from "@apollo/server/express4";
import apolloServer from "./config/apolloServer.js";
import cors from "cors";
import "dotenv/config";

const app: Application = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cors());

const startApolloServer = async () => {

    await apolloServer.start();

    app.use("/graphql", await expressMiddleware(apolloServer));

    app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

};

startApolloServer();