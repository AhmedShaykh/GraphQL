import prisma from "../../config/datebase.js";

const todoResolver = {
    Query: {
        todos: async () => {

            return await prisma.todo.findMany({ orderBy: { id: "desc" } });

        },
        getTodo: async (_: any, { id }: any) => {

            return await prisma.todo.findUnique({ where: { id: id } });

        }
    },
    Mutation: {
        createTodo: async (_: any, { todo }: any) => {

            const newTodo = await prisma.todo.create({
                data: {
                    todo: todo,
                    completed: false
                }
            });

            return newTodo;

        },
        updateTodo: async (_: any, { id, todo }: any) => {

            await prisma.todo.update({
                data: {
                    todo: todo
                },
                where: {
                    id: id
                }
            });

            return { message: "Todo Updated Successfully!" };

        },
        toggleComplete: async (_: any, { id, data }: any) => {

            await prisma.todo.update({
                data: {
                    completed: data
                },
                where: {
                    id: id
                }
            });

            return { message: "Todo Updated Successfully!" };

        }
    }
};

export default todoResolver;