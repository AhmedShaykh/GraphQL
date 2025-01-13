import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { BookService } from "./book.service";
import { Book } from "./book.schema";

@Resolver(() => Book)
export class BookResolver {

    constructor(private readonly bookService: BookService) { };

    @Query(() => [Book], { name: "books" })
    async findAll() {

        return this.bookService.findAll();

    };

    @Query(() => Book, { name: "book" })
    async findOne(@Args("id", { type: () => String }) id: string) {

        return this.bookService.findOne(id);

    };

    @Mutation(() => Book)
    async createBook(
        @Args("title", { type: () => String }) title: string,
        @Args("price", { type: () => Number, nullable: true }) price: number
    ) {

        return this.bookService.create({ title, price });

    };

    @Mutation(() => Book)
    async updateBook(
        @Args("id", { type: () => String }) id: string,
        @Args("title", { type: () => String, nullable: true }) title?: string,
        @Args("price", { type: () => Number, nullable: true }) price?: number
    ) {

        return this.bookService.update(id, { title, price });

    };

    @Mutation(() => Book)
    async deleteBook(@Args("id", { type: () => String }) id: string) {

        return this.bookService.delete(id);

    };

};