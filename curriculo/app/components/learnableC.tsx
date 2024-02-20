'use client';

import { useEffect, useState } from "react";

export default function LearnableC({learnable, onClickHandler, toggled = false}: {learnable: any, onClickHandler?: any, toggled?: boolean}){
    const colorVariants: any = {
        dark: `hover:text-whiteBlue ${toggled ? 'bg-darkBlue text-whiteBlue ring-yellow ring-offset-darkBlue ring-offset-2 ring-2' : 'bg-lightBlue'}`,
        light: `hover:text-yellow ${toggled ? 'bg-darkBlue text-yellow ring-lightBlue ring-offset-darkBlue ring-offset-2 ring-2' : 'bg-yellow'}`,
    }

    function handleClick(e: any){
        if(onClickHandler !== undefined){
            onClickHandler(e);
        }
        console.log(learnable.name, toggled);
    }

    return <p 
    onClick={handleClick}
    className={`${colorVariants[learnable.theme]} text-darkBlue hover:bg-darkBlue rounded-full select-none cursor-pointer px-2 text-center`}
    >
        {learnable.name}
    </p>
}