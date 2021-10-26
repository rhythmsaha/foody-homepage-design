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
    return {
        props: {
            restaurants: [
                {
                    id: "res_1",
                    name: "Stragan",
                    logo: "/images/restaurant-logo/stragan.png",
                    rating: 4.8,
                    distance: 4.3,
                    offer: "Free Delivery",
                    deliveryFree: true,
                },
                {
                    id: "res_2",
                    name: "McDonald's",
                    logo: "/images/restaurant-logo/mcdonalds.png",
                    rating: 4.8,
                    distance: 4.3,
                    offer: "Free Delivery",
                    deliveryFree: true,
                },
                {
                    id: "res_3",
                    name: "Pizza Hut",
                    logo: "/images/restaurant-logo/pizzahut.png",
                    rating: 4.8,
                    distance: 4.3,
                    offer: "Buy 2 Get 1 Free",
                    deliveryFree: false,
                },
                {
                    id: "res_4",
                    name: "Burger King",
                    logo: "/images/restaurant-logo/burger-king.png",
                    rating: 4.8,
                    distance: 4.3,
                    offer: "Free Delivery",
                    deliveryFree: true,
                },
                {
                    id: "res_5",
                    name: "Domino's Pizza",
                    logo: "/images/restaurant-logo/dominoz.png",
                    rating: 4.8,
                    distance: 4.3,
                    offer: "Buy 1 Get 1 Free",
                    deliveryFree: false,
                },

                {
                    id: "res_6",
                    name: "Tostitos",
                    logo: "/images/restaurant-logo/tostitos.jpg",
                    rating: 4.8,
                    distance: 4.3,
                    offer: "Free Delivery",
                    deliveryFree: true,
                },
            ],

            foods: [
                {
                    id: "food_1",
                    title: "chicken burger",
                    price: 80.0,
                    rating: 4.3,
                    image: "/images/chicken_burger.jpg",
                },
                {
                    id: "food_2",
                    title: "chicken deluxe fry",
                    price: 150.0,
                    rating: 4.3,
                    image: "/images/chicken_deluxe_fry.jpg",
                },
                {
                    id: "food_3",
                    title: "chicken malai gravy",
                    price: 200.0,
                    rating: 4.3,
                    image: "/images/chicken_malai_gravy.jpg",
                },
                {
                    id: "food_4",
                    title: "chicken pizza",
                    price: 400.0,
                    rating: 4.3,
                    image: "/images/chicken_pizza.jpg",
                },
                {
                    id: "food_5",
                    title: "chicken sate",
                    price: 100.0,
                    rating: 4.3,
                    image: "/images/chicken_sate.jpg",
                },
                {
                    id: "food_6",
                    title: "fried rice",
                    price: 150.0,
                    rating: 4.3,
                    image: "/images/fried_rice.jpg",
                },
                {
                    id: "food_7",
                    title: "nachos galore",
                    price: 120.0,
                    rating: 4.3,
                    image: "/images/nachos_galore.jpg",
                },
                {
                    id: "food_8",
                    title: "pasta",
                    price: 120.0,
                    rating: 4.3,
                    image: "/images/pasta.jpg",
                },
                {
                    id: "food_9",
                    title: "ramen",
                    price: 80.0,
                    rating: 4.3,
                    image: "/images/ramen.jpg",
                },
                {
                    id: "food_10",
                    title: "noodles",
                    price: 70.0,
                    rating: 4.3,
                    image: "/images/noodles.jpg",
                },
            ],
        },
    };
}
