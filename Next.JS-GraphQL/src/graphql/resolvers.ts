import { prisma } from "@/lib/prisma";

export const resolvers = {
    Query: {
        novel: async (_parent: any, args: any, context: any) => {
            return await prisma.novel.findUnique({
                where: {
                    id: args.id
                }
            });
        },
        novels: async (_parent: any, _args: any, context: any) => {
            return await prisma.novel.findMany({
                include: { author: true }
            });
        }
    },
    Novel: {
        authors: async (parent: any, _args: any, context: any) => {
            return await prisma.author.findMany({
                where: {
                    novelId: parent.id
                }
            });
        }
    },
    Mutation: {
        addNovel: async (_parent: any, args: any, context: any) => {
            return await prisma.novel.create({
                data: {
                    title: args.title,
                    image: args.image
                }
            });
        },
        updateNovel: async (_parent: any, args: any, context: any) => {
            return await prisma.novel.update({
                where: {
                    id: args.id
                },
                data: {
                    title: args.title,
                    image: args.image
                }
            });
        },
        deleteNovel: async (_parent: any, args: any, context: any) => {
            return await prisma.novel.delete({
                where: {
                    id: args.id
                }
            });
        },
        addAuthor: async (_parent: any, args: any, context: any) => {
            return await prisma.author.create({
                data: {
                    novelId: args.novelId,
                    name: args.name
                }
            });
        },
        deleteAuthor: async (_parent: any, args: any, context: any) => {
            return await prisma.author.delete({
                where: {
                    id: args.id
                }
            });
        }
    }
};