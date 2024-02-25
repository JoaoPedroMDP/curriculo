'use client';
import { Experience } from "../objects/experiences";

export default function ExperiencesC({experiences, title, theme}: {experiences: Experience[], title: string, theme: string}){
    const colorVariants: any = {
        dark: {
            content: 'bg-darkBlue text-whiteBlue',
            border: 'border-t-[2px] border-mediumBlue',
        },
        light: {
            content: 'bg-whiteBlue text-darkBlue',
            border: 'border-t-[2px] border-lightBlue',
        },
      }
    let scroll = theme == "dark" ? "light-scroll" : "dark-scroll"; 

    return(
        <div className={`flex flex-col lg:basis-1/2 justify-top align-middle py-1 px-[3vw] ${colorVariants[theme]["content"]}`}>
            <h1 className="sticky font-raleway text-[50px] lg:text-[64px] text-center mt-2">{title}</h1>
            <div className={`${scroll} scroll overflow-auto max-h-[60vh] mt-5 ${colorVariants[theme]["border"]}`}>
            {experiences.length > 0
                ? experiences.map((exp) => exp.render())
                : <p className="font-raleway text-[26px] text-center">Nenhuma experiência com o filtro selecionado</p>
            }
            </div>
        </div>
    );
};