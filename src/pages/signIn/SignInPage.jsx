import React from "react";

//React Components
import BrandLogo from "common/components/BrandLogo.jsx"
import SignIn from "./features/authentication/components/SignIn.jsx";
import Ellipse from "common/components/Ellipse.jsx";
import LogInCircle from "./components/LogInCircle.jsx";
import SignUp from "./components/SignUp.jsx";



import "./styles/main.scss";



export default function SignInPage() {
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