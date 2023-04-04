import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import PageNav from "./PageNav";

function Layout({ children }) {
    return (
        <div data-theme="dark">
            {/* <Navbar /> */}
            <main className="max-w-3xl mx-auto">
                <Hero />
                <PageNav />
                {children}
                <Footer />
            </main>
        </div>
    );
}

export default Layout;
