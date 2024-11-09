import React from "react";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="bg-[#0B0B0B] text-white w-64 fixed h-full text-2xl z-50">
        <h2 className="text-4xl font-bold  h-[80px]  flex items-center justify-center">Doodles</h2>
        <nav className="p-5">
          <ul>
            <li className="mb-4">
              <a href="/#" className="flex items-center space-x-2">
                <span>About Us</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="/#faq" className="flex items-center space-x-2">
                <span>FAQs</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="/#team" className="flex items-center space-x-2">
                <span>Team</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="/#team" className="flex items-center space-x-2">
                <span>Mint</span>
              </a>
            </li>
            <li className="mb-4">
              <a href="/#team" className="flex items-center space-x-2">
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ">
        {/* Top Navbar */}
        <header className="bg-[#0B0B0B] h-[80px]  text-white p-4 sticky top-0 w-full z-40 flex justify-between items-center">
          <h1 className="text-xl font-semibold"></h1>
          <div className="bg-white text-gray-900 px-4 py-2 rounded-lg">
            <a href="/wl-checker">Check WishList</a>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="px-8 pb-8 bg-[#0B0B0B] ml-64">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
