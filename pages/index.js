import Head from "next/head";
import { BiChevronDown } from "react-icons/bi";
import FoodItem from "../components/FoodItem";
import NearbyResaurant from "../components/NearbyResaurant";

export default function Home({ restaurants, foods }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="mx-10 flex space-x-5">
                <div className="bg-white w-full rounded-xl shadow-sm my-10">
                    <div className="flex justify-between items-center py-10 px-8">
                        <h2 className="text-xl font-semibold">Popular Food</h2>
                        <div className="flex items-center space-x-1 text-sm bg-gray-100 rounded-lg px-2.5 py-2">
                            <span>This week</span>
                            <span>
                                <BiChevronDown className="text-xl" />
                            </span>
                        </div>
                    </div>

                    <div className="mx-10 mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-16">
                            {foods.map((food) => (
                                <FoodItem key={food.id} f={food} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="hidden 2xl:block">
                    <NearbyResaurant restaurants={restaurants} />
                </div>
            </div>
        </>
    );
}

export async function getStaticProps(context) {
    try {
        const responseData = await fetch(`${process.env.API_URL}/restaurants`);
        if (!responseData.ok) throw new Error("Failed");
        const data = await responseData.json();

        const responseFoods = await fetch(`${process.env.API_URL}/foods`);
        if (!responseFoods.ok) throw new Error("Failed");
        const foods = await responseFoods.json();

        return {
            props: {
                restaurants: data,
                foods: foods,
            },
        };
    } catch (error) {
        return {
            props: {
                restaurants: [],
                foods: [],
            },
        };
    }
}
