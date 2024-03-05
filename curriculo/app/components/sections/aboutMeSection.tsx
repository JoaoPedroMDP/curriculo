import { curriculumData } from "@/app/data/data";
import Image from "next/image";

export default function AboutMeSection(){
    let yearsOfExperience = 2;

    return(
        <section id="introduction" className="font-raleway py-20 px-[10vw] flex flex-col flex-wrap justify-center lg:justify-between items-center">
            {/* <h1 className="text-[50px] font-bold">Sobre mim</h1> */}
            <div className="flex flex-wrap justify-center lg:justify-between align-middle">
                <div id="textual-introduction" className="flex flex-col gap-5 mt-10 lg:mt-0">
                    <p className="text-[20px]">
                        Desenvolvedor <span className="text-yellow"> versátil </span> com {yearsOfExperience} anos de experiência. 
                        Especializado em Python, com experiência em desenvolvimento web e scripts de automação.
                        Facilidade em aprender e se adaptar a novos contextos e tecnologias.
                    </p>
                </div>
            </div>
        </section>
    );
}