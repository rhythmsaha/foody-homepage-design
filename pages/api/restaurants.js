const restaurants = [
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
];

export default function restaurantApi(req, res) {
    res.status(200).json(restaurants);
}
