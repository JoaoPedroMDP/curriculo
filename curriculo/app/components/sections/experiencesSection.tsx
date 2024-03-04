'use client'

import { Institution } from "@/app/objects/institution";
import instDao from "../../data/daos/institutionDAO";
import { default as expDao } from "../../data/daos/experienceDAO";
import { Experience } from "@/app/objects/experiences";

function renderInstitutionExperiences(exps: Experience[], institution_id: number, institution_name: string, secondary: string){
    return(
        <div key={institution_id}>
            <p className="font-raleway font-bold text-[20px] sm:text-[34px]">{institution_name}</p>
            <div className="flex flex-col">
                {exps.map((exp: Experience) => {
                    return(
                        <div key={exp.id} className="flex flex-row">
                            <span className={`ml-[2vw] mr-[3vw] w-[2px] shrink-0 bg-${secondary}`}></span>
                            {exp.render()}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function renderExperiences(institutions: Institution[], title: string, expType: string, primaryColor: string, secondaryColor: string){
    let line: string = "after:h-[2px] after:w-[80%] after:left-[10%] after:block after:relative";

    return(
        <div className={`lg:basis-1/2 bg-${primaryColor} text-${secondaryColor}`}>
            <h1 className={`${line} after:bg-mediumBlue sticky font-raleway text-[25px] sm:text-[50px] lg:text-[64px] text-center mt-5`}>{title}</h1>
            <div className={`flex flex-col max-h-[40vh] px-[40px] py-5 gap-10`}>
                <div className={`scroll overflow-auto light-scroll`}>
                    {institutions.map((inst)=>{
                        let exps = inst.getExperiences(expType);
                        if(exps.length == 0){
                            console.log("No experiences for " + expType + " in " + inst.name);
                            return;
                        }

                        return(renderInstitutionExperiences(exps, inst.id, inst.name, secondaryColor));
                    })}
                </div>
            </div>
        </div>
    );
}

export default function ExperiencesSection({}) {
    function sortInstitutionsByDate (institutions: Institution[]): Institution[] {
        return institutions.sort((a, b) => {
            let result = a.compareDate(a.start, b.start, true)
            return result;
        });
    }

    let institutions: Institution[] = sortInstitutionsByDate(instDao.getAll());

    return(
        <section id="experiences" className="flex flex-row flex-wrap">
            {renderExperiences(institutions, "Experiência Profissional", "professional", "darkBlue", "whiteBlue")}
            {renderExperiences(institutions, "Experiência Acadêmica", "academic", "whiteBlue", "darkBlue")}
        </section>
    );
}