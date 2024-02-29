'use client';
import { Experience } from "../objects/experiences";
import { Institution } from "../objects/institution";

export default function ExperiencesC({institutions, title, theme}: {institutions: Institution[], title: string, theme: string}){
    const colorVariants: any = {
        dark: {
            content: 'bg-darkBlue text-whiteBlue',
            border: 'after:bg-mediumBlue',
            line: 'bg-whiteBlue'
        },
        light: {
            content: 'bg-whiteBlue text-darkBlue',
            border: 'after:bg-lightBlue',
            line: 'bg-darkBlue'
        },
    }
    let content = colorVariants[theme]['content'];
    let border = "after:h-[2px] after:w-[80%] after:left-[10%] after:block after:relative " + colorVariants[theme]['border'];
    let line = colorVariants[theme]['line'];
    let scroll = theme == "dark" ? "light-scroll" : "dark-scroll"; 

    return(
        <div className={`flex flex-col ${content}`}>
            <h1 className={`${border} sticky font-raleway text-[25px] sm:text-[50px] lg:text-[64px] text-center mt-5`}>{title}</h1>
            <div className={`flex flex-col max-h-[40vh] px-[40px] py-5 gap-10`}>
                <div className={`scroll overflow-auto ${scroll}`}>
                    {institutions.map((inst)=>{
                        return(
                            <div key={inst.id}>
                                <p className="font-raleway font-bold text-[20px] sm:text-[34px]">{inst.name}</p>

                                <div className="flex flex-col">
                                    {inst.experiences.map((exp: Experience) => {
                                        return(
                                            <div key={exp.id} className="flex flex-row">
                                                <span className={`ml-[2vw] mr-[3vw] w-[2px] shrink-0 ${line}`}></span>
                                                {exp.render()}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};