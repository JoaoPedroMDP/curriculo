import { curriculumData } from "@/app/data/data";
import Image from "next/image";

export default function AboutMeSection(){
    let yearsOfExperience = 2;

    return(
        <section id="introduction" className="font-raleway p-[50px] lg:px-[300px] flex flex-col flex-wrap justify-center lg:justify-between items-center">
            <div className="flex flex-wrap justify-center lg:justify-between align-middle">
                <div id="textual-introduction" className="flex flex-col gap-5">
                    <h2 className="text-[20px]">
                        Desenvolvedor <span className="text-yellow"> versátil </span> com {yearsOfExperience} anos de experiência. 
                        Especializado em Python, com experiência em desenvolvimento web e scripts de automação.
                        Facilidade em aprender e se adaptar a novos contextos e tecnologias.
                    </h2>
                </div>
            </div>
        </section>
    );
}