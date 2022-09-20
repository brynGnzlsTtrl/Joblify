import React from "react";
import getBaseClass from "../../../common/lib/bem.js";

export default function SignUp({className}) {
    return (
        <div className={className}>
            <p className={getBaseClass(className) + "__context"}>Don't have a Joblify Account ?</p>
            <button className={getBaseClass(className)  + "__buttton  button_bg-2 button"}>Sign Up</button>
        </div>
    )
}