import React from "react";

//React Components
import BrandLogo from "./components/BrandLogo.jsx"
import SignIn from "./features/authentication/components/SignIn.jsx";
import Ellipse from "./components/ellipse.jsx";
import LogInCircle from "./components/LogInCircle.jsx";
import SignUp from "./layout/signUp.jsx";


//Styles
import "./assets/style/main.scss"



export default function App() {
    return (
    <div className="log-in-form">
        <BrandLogo className="log-in-form__brand-logo brand-logo"></BrandLogo>
        <SignUp className="log-in-form__sign-up sign-up" />
        <SignIn className="log-in-form__sign-in sign-in " />
        <Ellipse className="log-in-form__ellipse_bg-2 ellipse" color="#9b4cff" />
        <Ellipse className="log-in-form__ellipse_bg-1 ellipse" color="#8affcf" /> 
        <LogInCircle className="log-in-form__circle-container circle-container" />
    </div>
    
    );
}