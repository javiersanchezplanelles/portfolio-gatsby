import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/General.scss";

function Layout({children}) {
    return(
        <div class="Layout__Wrapper">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;