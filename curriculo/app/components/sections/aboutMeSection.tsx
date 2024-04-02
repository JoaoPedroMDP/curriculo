import idiomDAO from "@/app/data/daos/idiomDAO";
import Idiom from "@/app/objects/idiom";
import IdiomC from "../idiomC";

export default function AboutMeSection(){
    let yearsOfExperience = 2;
    let idioms: Idiom[] = idiomDAO.getAll();
    console.log(idioms);
    return(
        <section id="introduction" className="font-raleway p-[50px] lg:px-[300px] flex flex-col flex-wrap justify-center lg:justify-between items-center print:p-[10px]">
            <div className="flex flex-col flex-wrap justify-center lg:justify-between align-middle">
                <div id="textual-introduction" className="flex flex-col gap-5">
                    <h2 className="text-[20px]">
                        Desenvolvedor versátil com {yearsOfExperience} anos de experiência. 
                        Especializado em Python, com experiência em desenvolvimento web e scripts de automação.
                        Facilidade em aprender e se adaptar a novos contextos e tecnologias.
                    </h2>
                </div>
                <p className="text-[25px] font-bold text-center mt-5">Idiomas</p>
                <div className="flex flex-row justify-around">
                    {idioms.map((idiom) => <IdiomC idiom={idiom} />)}
                </div>
            </div>
        </section>
    );
}