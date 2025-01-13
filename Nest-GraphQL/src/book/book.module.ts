import { Book, BookSchema } from "./book.modelschema";
import { MongooseModule } from "@nestjs/mongoose";
import { BookResolver } from "./book.resolver";
import { BookService } from "./book.service";
import { Module } from "@nestjs/common";

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Book.name,
            schema: BookSchema
        }])
    ],
    controllers: [],
    providers: [
        BookService,
        BookResolver
    ]
})
export class BookModule { };