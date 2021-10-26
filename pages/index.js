import Head from "next/head";

export default function Home() {
    const fetchData = () => {
        fetch(
            "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup",
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "tasty.p.rapidapi.com",
                    "x-rapidapi-key":
                        "546e56f53cmsh36e46f941042d99p1774e0jsn948e2824c2ad",
                },
            }
        )
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className="text-6xl font-bold">
                Welcome to{" "}
                <a className="text-blue-600" href="https://nextjs.org">
                    Next.js!
                </a>
            </h1>
            <button onClick={fetchData}>Click Me</button>
        </div>
    );
}
