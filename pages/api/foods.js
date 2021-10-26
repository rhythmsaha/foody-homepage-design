const foods = [
    {
        id: "food_1",
        title: "chicken burger",
        price: 80.0,
        image: "/images/chicken_burger.jpg",
    },
    {
        id: "food_2",
        title: "chicken deluxe fry",
        price: 150.0,
        image: "/images/chicken_deluxe_fry.jpg",
    },
    {
        id: "food_3",
        title: "chicken malai gravy",
        price: 200.0,
        image: "/images/chicken_malai_gravy.jpg",
    },
    {
        id: "food_4",
        title: "chicken pizza",
        price: 400.0,
        image: "/images/chicken_pizza.jpg",
    },
    {
        id: "food_5",
        title: "chicken sate",
        price: 100.0,
        image: "/images/chicken_sate.jpg",
    },
    {
        id: "food_6",
        title: "fried rice",
        price: 150.0,
        image: "/images/fried_rice.jpg",
    },
    {
        id: "food_7",
        title: "nachos galore",
        price: 120.0,
        image: "/images/nachos_galore.jpg",
    },
    {
        id: "food_8",
        title: "pasta",
        price: 120.0,
        image: "/images/pasta.jpg",
    },
    {
        id: "food_9",
        title: "ramen",
        price: 80.0,
        image: "/images/ramen.jpg",
    },
    {
        id: "food_10",
        title: "noodles",
        price: 70.0,
        image: "/images/noodles.jpg",
    },
];

export default function foodsApi(req, res) {
    res.status(200).json(foods);
}
