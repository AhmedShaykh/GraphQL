import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Book {
    @Field(() => String)
    id: string;

    @Field()
    title: string;

    @Field((type) => Int, { nullable: true })
    price: number;
};