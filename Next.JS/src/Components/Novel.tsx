import { DELETE_NOVEL } from "@/graphql/mutations";
import { GET_NOVELS } from "@/graphql/queries";
import { useMutation } from "@apollo/client";
import { INovel } from "../../typings";
import Link from "next/link";

export const BASE_URL = process.env.NEXT_PUBLIC_URL || `http://localhost:3000`;

type Props = {
    novel: INovel;
};

const Novel = ({ novel }: Props) => {

    const [deleteNovel] = useMutation(DELETE_NOVEL, {
        refetchQueries: [{ query: GET_NOVELS }]
    });

    return (
        <article className="flex flex-col p-4 bg-slate-200 dark:bg-zinc-800 hover:scale-110 shadow-sm hover:shadow-lg hover:bg-slate-300 transition duration-300 ease-out text-white">
            {novel.image && (
                <div>
                    <img
                        className="h-56 w-full object-contain rounded-t-lg shadow-md"
                        src={novel.image}
                        alt={novel.title}
                    />
                </div>
            )}

            <h1 className="font-bold text-xl my-2">{
                novel.title}
            </h1>

            <p className="text-xs my-2 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                ab recusandae repudiandae ratione quia voluptatibus tempora
                dolores, veritatis cum, soluta numquam voluptatum earum
                obcaecati illum dolor. Fuga incidunt maxime culpa.
            </p>

            <div className="flex justify-between italic	 ß text-xs mt-auto  text-slate-500">
                <p className="text-white text-lg">
                    Authors :{novel?.authors.length}
                </p>
            </div>

            <Link
                className="bg-orange-500 mt-5 p-2 rounded-lg"
                href={`${BASE_URL}/novel/${novel.id}`}
            >
                Read More
            </Link>

            <button
                onClick={() => deleteNovel({ variables: { id: novel.id } })}
                className="bg-red-500 mt-5 p-2 rounded-lg"
            >
                Delete
            </button>
        </article>
    )
};

export default Novel;