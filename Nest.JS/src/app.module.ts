import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { MongooseModule } from "@nestjs/mongoose";
import { BookModule } from "./book/book.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { join } from "node:path";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRoot(
      process.env.DATABASE_URL
    ),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      definitions: {
        path: join(process.cwd(), "src/gql.ts")
      }
    }),
    BookModule
  ],
  controllers: [],
  providers: []
})
export class AppModule { };