import { BiBell } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
import { FiSearch, FiShoppingCart } from "react-icons/fi";

const Header = () => {
    const onSearchHandler = (e) => {
        e.preventDefault();
        console.log("search");
    };

    return (
        <header className="w-full flex flex-col-reverse justify-between items-center gap-8 md:flex-row mb-8">
            <div className="ml-16 mt-10">
                <h1 className="text-5xl font-semibold">Explore</h1>

                <div className="text-md text-gray-500 mt-2 tracking-wide">
                    Hello Suji, Welcome back!
                </div>
            </div>

            <div className="h-full pt-10 space-x-1 mr-10">
                <div className="flex items-center space-x-3">
                    <form
                        className="bg-white items-center px-4 py-2.5 w-96 rounded-3xl space-x-3 shadow-sm flex"
                        onSubmit={onSearchHandler}
                    >
                        <span>
                            <FiSearch className="text-lg" />
                        </span>
                        <input
                            type="text"
                            className="bg-transparent border-none outline-none flex-1 text-gray-700 text-sm"
                        />
                        <button type="button">
                            <BsFilter className="text-lg" />
                        </button>
                    </form>

                    <div className="hidden sm:flex items-center space-x-4">
                        <button className="bg-purple-600 text-white rounded-full p-3">
                            <FiShoppingCart className="text-lg" />
                        </button>

                        <button className="bg-white text-black rounded-full p-3 shadow-md relative">
                            <BiBell className="text-xl" />
                            <span className="absolute -right-1.5 -top-1.5 bg-[#f25e35] text-white h-5 w-5 flex justify-center items-center p-1 text-xs rounded-full">
                                8
                            </span>
                        </button>

                        <button className="rounded-full overflow-hidden h-11 w-11 shadow-md">
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
