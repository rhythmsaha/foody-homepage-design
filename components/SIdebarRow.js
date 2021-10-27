import Link from "next/link";

const SIdebarRow = ({ Icon, name, badge }) => {
    return (
        <div>
            <li>
                <Link href="/">
                    <a className="flex space-x-2 text-gray-600 text-md items-center py-3 relative">
                        <span className="text-2xl">
                            <Icon />
                        </span>
                        <span>{name}</span>
                        {badge && (
                            <span className="absolute right-0 bg-[#f25e35] text-white h-6 w-6 flex justify-center items-center p-1 text-sm rounded-full">
                                {badge}
                            </span>
                        )}
                    </a>
                </Link>
            </li>
        </div>
    );
};

export default SIdebarRow;
