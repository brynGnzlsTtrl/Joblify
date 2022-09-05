import React from "react";

//React Components
import BrandLogo from "./components/BrandLogo.jsx"
import SignUp from "./features/authentication/components/SignUp.jsx";
import Ellipse from "./components/ellipse.jsx";
import LogInCircle from "./components/LogInCircle.jsx";

//Styles
import "./assets/style/main.scss"



export default function App() {
    return (
    <div className="log-in-form">
        <BrandLogo className="log-in-form__brand-logo brand-logo"></BrandLogo>
        <SignUp className="log-in-form__sign-up sign-up " />
        <Ellipse className="log-in-form__ellipse_bg-2 ellipse" color="#9b4cff" /> {/*var(--bg-2) */}
        <Ellipse className="log-in-form__ellipse_bg-1 ellipse" color="#8affcf" /> {/*var(--bg-1) */}
        <LogInCircle className="log-in-form__circle-container circle-container" />
    </div>
    
    );
}