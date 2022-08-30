import React from "react";


import BrandLogo from "./components/BrandLogo.jsx"
import "./assets/style/main.scss"
import "./features/authentication/components/SignUp.jsx"
import SignUp from "./features/authentication/components/SignUp.jsx";

export default function App() {
    return (
    <div className="log-in-form">
        <BrandLogo className="log-in-form__brand-logo"></BrandLogo>
        <SignUp className="sign-up log-in-form__sign-up" />
    </div>
    
    );
}