import Head from "next/head";
import { BiChevronDown } from "react-icons/bi";
import NearbyResaurant from "../components/NearbyResaurant";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="mx-10 flex space-x-5">
                <div className="bg-white w-full rounded-lg shadow-sm">
                    <div className="flex justify-between items-center py-10 px-8">
                        <h2 className="text-xl font-semibold">Popular Food</h2>
                        <div className="flex items-center space-x-1 text-sm bg-gray-100 rounded-lg px-2.5 py-2">
                            <span>This week</span>
                            <span>
                                <BiChevronDown className="text-xl" />
                            </span>
                        </div>
                    </div>
                </div>

                <NearbyResaurant />
            </div>
        </>
    );
}
