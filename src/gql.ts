
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface Book {
    id: string;
    title: string;
    price?: Nullable<number>;
};

export interface IQuery {
    books(): Book[] | Promise<Book[]>;
    book(id: string): Book | Promise<Book>;
};

export interface IMutation {
    createBook(title: string, price?: Nullable<number>): Book | Promise<Book>;
    updateBook(id: string, title?: Nullable<string>, price?: Nullable<number>): Book | Promise<Book>;
    deleteBook(id: string): Book | Promise<Book>;
};

type Nullable<T> = T | null;