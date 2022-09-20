import React from "react";
import getBaseClass from "../../../common/lib/bem";
import ImagOptimize from "../../../common/utils/ImgOptimize.jsx";
import Ellipse from "../../../common/components/Ellipse.jsx";

export default function LogInCircle({ className }) {
    return (
        <div className={className} style={{ position: "absolute" }}>
            <svg className={getBaseClass(className) + "__fill main-circle"} width="588" height="588" viewBox="0 0 588 588" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M587.004 293.501C587.004 455.598 455.599 587.003 293.502 587.003C131.405 587.003 0 455.598 0 293.501C0 131.405 131.405 0 293.502 0C455.599 0 587.004 131.405 587.004 293.501Z" fill="#28272F" />
            </svg>
            <svg className={getBaseClass(className) + "__ring main-cicle"} width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M598.5 300.08C598.5 464.732 465.023 598.21 300.37 598.21C135.718 598.21 2.24072 464.732 2.24072 300.08C2.24072 135.428 135.718 1.95056 300.37 1.95056C465.023 1.95056 598.5 135.428 598.5 300.08Z" stroke="#BEBEBE" strokeOpacity="0.4" strokeWidth="3" />
            </svg>
            <Context className={getBaseClass(className) + "__log-in-context log-in-context"} />
            <Images className={getBaseClass(className) + "__log-in-images log-in-images"} />
            <Ellipse className="circle-container__ellipse ellipse__bg-1 ellipse" color="var(--bg_1)" />
            <Ellipse className="circle-container__ellipse ellipse__bg-2 ellipse" color="var(--bg_2)" />
            
            
        </div>
    )
}




function Context({ className }) {
    return (
        <div className={className}>
            <p className={getBaseClass(className) + "__header"}>Job Opportunities and Services Offered By Professionals</p>
            <p className={getBaseClass(className) + "__body"}>Market your skills or Find a suitable person qualified for the job</p>
        </div>
    )
}

function Images({ className }) {
    const imageList = logInImages.map(image => <ImagOptimize key={image.id} className={getBaseClass(className) + "__image"} imageName={image.name} alt={image.description} imageType={image.type} />)
    return (
        <div className={className}>
            {imageList}
        </div>
    )
}