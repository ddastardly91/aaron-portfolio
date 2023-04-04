import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div data-theme="dark">
      {/* <Navbar /> */}
      <main className="max-w-3xl mx-auto">
        <Hero />
        {children}
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
