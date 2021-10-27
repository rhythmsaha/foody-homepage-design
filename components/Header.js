import { BiBell, BiShoppingBag } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Header = () => {
    const onSearchHandler = (e) => {
        e.preventDefault();
        console.log("search");
    };

    return (
        <header className="w-11/12 mx-auto flex flex-col-reverse md:justify-between items-center md:flex-row gap-6">
            <div className="md:mt-10 text-center md:text-left">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Explore
                </h1>

                <div className="text-xs md:text-sm whitespace-nowrap text-gray-500 mt-1 tracking-normal">
                    Hello Suji, Welcome back!
                </div>
            </div>

            <div className="mt-10 md:mt-6 space-x-1 w-full max-w-xl">
                <div className="flex items-center space-x-3 w-full">
                    <form
                        className="bg-white items-center px-4 py-2 w-full rounded-3xl space-x-3 shadow-sm flex"
                        onSubmit={onSearchHandler}
                    >
                        <span>
                            <FiSearch className="text-lg" />
                        </span>
                        <input
                            type="text"
                            className="bg-transparent border-none outline-none flex-1 text-gray-700 text-sm min-w-0"
                        />
                        <button type="button">
                            <BsFilter className="text-lg" />
                        </button>
                    </form>

                    <div className="hidden md:flex items-center space-x-3">
                        <button className="bg-purple-600 text-white rounded-full p-2 xl:p-3 shadow-md relative">
                            <BiShoppingBag className="text-2xl" />
                        </button>

                        <button className="bg-white text-black rounded-full p-2 xl:p-3 shadow-md relative">
                            <BiBell className="text-2xl" />
                            <span className="absolute -right-1.5 -top-1.5 bg-[#f25e35] text-white h-5 w-5 flex justify-center items-center p-1 text-xs rounded-full">
                                8
                            </span>
                        </button>

                        <button className="rounded-full overflow-hidden h-10 xl:h-12  w-10 xl:w-12 shadow-md">
                            <img
                                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="object-cover h-full w-full"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
