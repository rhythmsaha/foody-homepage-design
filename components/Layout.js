import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <>
            <main className="flex min-h-screen">
                <Sidebar />
                <div className="w-full bg-gray-100">
                    <Header />
                    <div className="">{children}</div>
                </div>
            </main>
        </>
    );
};

export default Layout;
