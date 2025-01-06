const fetchData = async () => {

    const gql = String.raw;

    const res = await fetch(`http://localhost:3000/api/graphql`, {
        cache: "no-cache",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: gql`
                query GetUsers {
                    user {
                        title
                    }
                }
            `,
        }),
    });

    const users = await res.json();

    return users.data.user;

};

const Home = async () => {

    const userData = await fetchData();

    return (
        <div className="flex flex-col justify-center items-center gap-4 h-screen">
            {userData?.map((item: { title: string }, i: number) => {
                return (
                    <h2
                        className="text-lg font-semibold"
                        key={i}
                    >
                        {item.title}
                    </h2>
                )
            })}
        </div>
    )
};

export default Home;