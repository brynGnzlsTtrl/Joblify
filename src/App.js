import React from "react";


import BrandLogo from "./components/BrandLogo.jsx"
import "./assets/style/main.scss"
import "./features/authentication/components/SignUp.jsx"
import SignUp from "./features/authentication/components/SignUp.jsx";
import Ellipse from "./components/ellipse.jsx";

export default function App() {
    return (
    <div className="log-in-form">
        <BrandLogo className="log-in-form__brand-logo"></BrandLogo>
        <SignUp className="log-in-form__sign-up sign-up " />
        <Ellipse className="log-in-form__ellipse_bg-2 ellipse" color="#9b4cff" /> {/*var(--bg-2) */}
        <Ellipse className="log-in-form__ellipse_bg-1 ellipse" color="#8affcf" /> {/*var(--bg-1) */}
    </div>
    
    );
}