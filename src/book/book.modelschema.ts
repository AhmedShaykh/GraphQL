import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BookDocument = Book & Document;

@Schema()
export class Book extends Document {
    @Prop({ required: true })
    title: string;

    @Prop({ required: false })
    price: number;
};

export const BookSchema = SchemaFactory.createForClass(Book);