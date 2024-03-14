'use client'
import { Institution } from "@/app/objects/institution";
import instDao from "../../data/daos/institutionDAO";
import { Experience } from "@/app/objects/experiences";
import { Learnable } from "@/app/objects/learnables";
import { useMemo } from "react";

function passFilters(exp: Experience, filters: any): boolean{
    let pass: boolean = false
    
    if(exp.tools !== undefined){
        for(let i in exp.tools){
            if(filters[exp.tools[i].name]){
                pass = true;
                break;
            }
        }
    }

    if(pass == false && exp.skills !== undefined){
        for(let i in exp.skills){
            if(filters[exp.skills[i].name]){
                pass = true;
                break;
            }
        }
    }

    if(Object.values(filters).length == 0){
        pass = true;
    }

    return pass;
}

function renderInstitutionExperiences(exps: Experience[], filters: Learnable[], institution_id: number, institution_name: string, theme: string){
    let selectedTheme: string = theme == "dark" ? "bg-whiteBlue" : "bg-darkBlue";

    return(
        <div key={institution_id}>
            <p className="font-raleway font-bold text-[20px] sm:text-[34px]">{institution_name}</p>
            <div className="flex flex-col">
                {exps.map((exp: Experience) => {
                    let filtered = !passFilters(exp, filters);
                    return(
                        <div key={exp.id} className={`flex flex-row ${filtered ? 'opacity-25': ''}`}>
                            <span className={`mx-[20px] w-[2px] shrink-0 ${selectedTheme}`}></span>
                            {exp.render()}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function renderExperiences(institutions: Institution[], filters: Learnable[], title: string, expType: string, theme: string){
    let selectedTheme: string = theme == "dark" ? "bg-darkBlue text-whiteBlue" : "bg-whiteBlue text-darkBlue";

    let line: string = "after:h-[2px] after:w-[80%] after:left-[10%] after:block after:relative";
    let scrollTheme: string = theme == "dark" ? "light-scroll" : "dark-scroll";

    return(
        <div className={`lg:basis-1/2 w-full ${selectedTheme}`}>
            <h1 className={`${line} after:bg-mediumBlue sticky font-raleway text-[40px] sm:text-[50px] lg:text-[60px] text-center mt-5 mx-5`}>{title}</h1>
            <div className={`flex flex-col h-[300px] lg:h-[400px] px-[40px] py-5 gap-10`}>
                <div className={`scroll overflow-auto ${scrollTheme} flex flex-col gap-5`}>
                    {institutions.map((inst)=>{
                        let exps = inst.getExperiences(expType);
                        if(exps.length == 0){
                            return;
                        }

                        let filteredExps: Experience[] = exps.filter((exp: Experience) => filters.length == 0 || (passFilters(exp, filters)));
                        if(filteredExps.length == 0){
                            return;
                        }

                        return(renderInstitutionExperiences(exps, filters, inst.id, inst.name, theme));
                    })}
                </div>
            </div>
        </div>
    );
}

export default function ExperiencesSection({filters} : {filters: Learnable[]}) {
    let institutions: Institution[] = useMemo(() => instDao.allSortedByDate(), []);
    
    return(
        <section id="experiences" className="flex flex-row flex-wrap">
            {renderExperiences(institutions, filters, "Experiência Profissional", "professional", "dark")}
            {renderExperiences(institutions, filters, "Experiência Acadêmica", "academic", "light")}
        </section>
    );
}