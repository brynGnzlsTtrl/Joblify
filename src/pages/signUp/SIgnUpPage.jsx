import React from "react";
import BrandLogo from "../../common/components/BrandLogo.jsx"

export default function SignUp({className}) {
    return (
        <div className={className}>
            <header className={className + "__brand-logo"}><BrandLogo className={className} /></header>
            <main class={className + "__main main"}>
                <header className={"main__header"}></header>
                <div className={"main__cont "}>
                </div>
            </main>
        </div>
    )
}

function MainContentBox({children, className, header, context}) {
    return (
        <div className={className="main__sub-conatinaer sub-container"}>
            {children}
            <header className="sub-container__header">{header}</header>
            <p className="sub-container__context">{context}</p>
        </div>
    )
}