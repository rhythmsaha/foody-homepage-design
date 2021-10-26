import { AiFillStar, AiOutlineAim } from "react-icons/ai";

const NearbyResaurant = ({ restaurants }) => {
    return (
        <div className="sticky top-0 pt-10">
            <div className="min-w-[400px] bg-white shadow-sm px-10 pb-10 rounded-xl">
                <div className="py-10">
                    <h2 className="font-semibold text-lg tracking-wide text-gray-700">
                        Nearby Restaurants
                    </h2>
                </div>

                <div className="flex flex-col gap-8">
                    {restaurants.map((r) => (
                        <div className="flex space-x-3" key={r.id}>
                            <div className="h-20 w-20 p-3 bg-gray-100 rounded-xl overflow-hidden">
                                <span>
                                    <img
                                        src={r.logo}
                                        alt={r.title}
                                        className="object-cover h-full w-full"
                                    />
                                </span>
                            </div>
                            <div>
                                <div className="flex space-x-3">
                                    <h4 className="font-semibold text-md mt-2 tracking-wide">
                                        {r.name}
                                    </h4>

                                    <div className="flex items-center space-x-0.5">
                                        <span>
                                            <AiFillStar className="text-xl text-yellow-300" />
                                        </span>
                                        <span className="font-semibold text-gray-700 text-sm">
                                            {r.rating}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex space-x-3 mt-1.5">
                                    <div className="flex items-center space-x-1 text-gray-500">
                                        <span>
                                            <AiOutlineAim className="text-lg" />
                                        </span>
                                        <span className="text-sm">
                                            {r.distance} Km
                                        </span>
                                    </div>
                                    <span
                                        className={`text-xs px-2 py-1 rounded ${
                                            r.deliveryFree
                                                ? "bg-purple-100 text-purple-700"
                                                : "bg-[#ffe7e0] text-[#f25e35]"
                                        }`}
                                    >
                                        {r.offer}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NearbyResaurant;
