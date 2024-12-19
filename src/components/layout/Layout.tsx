import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

interface ILayout {
    children: React.ReactNode;
}

function Layout({ children }: ILayout) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;
