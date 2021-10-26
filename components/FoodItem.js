import Image from "next/image";

const FoodItem = ({ f }) => {
    return (
        <div className="w-80">
            <div className="relative h-48 w-full overflow-hidden rounded-xl">
                <Image
                    src={f.image}
                    alt={f.title}
                    layout="fill"
                    objectFit="cover"
                    className="bg-gray-100 hover:scale-110 transition duration-200"
                />
            </div>
            <div className="flex justify-between items-center px-2 mt-4 capitalize">
                <h1 className="font-semibold text-md">{f.title}</h1>
                <div className="bg-[#ffede6] text-[#ff4f00] text-xs font-semibold px-4 py-1 rounded-md">
                    ₹ {f.price}
                </div>
            </div>
        </div>
    );
};

export default FoodItem;
