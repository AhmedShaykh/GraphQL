import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Book } from "./book.modelschema";
import { Model } from "mongoose";

@Injectable()
export class BookService {

    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { };

    async findAll(): Promise<Book[]> {

        return this.bookModel.find().exec();

    };

    async findOne(id: string): Promise<Book> {

        return this.bookModel.findById(id).exec();

    };

    async create(book: Partial<Book>): Promise<Book> {

        const newBook = new this.bookModel(book);

        return newBook.save();

    };

    async update(id: string, book: Partial<Book>): Promise<Book> {

        return this.bookModel.findByIdAndUpdate(id, book, { new: true }).exec();

    };

    async delete(id: string): Promise<Book> {

        return this.bookModel.findByIdAndDelete(id).exec();

    };

};