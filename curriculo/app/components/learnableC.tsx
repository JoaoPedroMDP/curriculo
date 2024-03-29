'use client';

import { useState } from "react";
import { Learnable } from "../objects/learnables";

export default function LearnableC({learnable, onClickHandler}: {learnable: Learnable, onClickHandler?: any}){
    const [toggled, setToggled] = useState(false);
    let underlineConfig = "after:relative after:bottom-[1px] after:duration-200 after:block after:w-0 after:transition-width after:group-hover:w-[100%] after:h-[1px] after:bg-whiteBlue after:group-hover:bg-darkBlue"
    let textConfig = "text-nowrap text-center group-hover:text-darkBlue text-[20px]"

    function handleClick(){
        setToggled(!toggled);
        if(onClickHandler){
            onClickHandler(learnable);
        }
    }

    return (
    <div onClick={handleClick} className={`group flex flex-grow justify-center transition-color duration-200 ${toggled ? 'bg-darkBlue': ''} hover:bg-yellow p-5 print:px-1 print:py-0`}>
        <p className={`${underlineConfig} ${textConfig} ${toggled ? "text-whiteBlue after:w-[100%]" : ""} transition-color duration-300 cursor-pointer`}>
            {learnable.name}
        </p>
    </div>
    );
}