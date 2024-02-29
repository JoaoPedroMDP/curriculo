'use client'

import { ExpBuilder, Experience, Job } from "@/app/objects/experiences";
import { Institution } from "@/app/objects/institution";

export default function ExperiencesSection({professionalExperiences, academicExperiences}: {professionalExperiences: Experience[], academicExperiences: Experience[]}) {
    let pInstitutions: Institution[] = Institution.collectAll(professionalExperiences);
    let aInstitutions: Institution[] = Institution.collectAll(academicExperiences);

    return(
        <section id="experiences" className="flex flex-row">
            <div id="professional-experiences" className="flex flex-grow flex-col bg-darkBlue p-5">
                {pInstitutions.map((inst)=>{
                    return(
                        <div key={inst.name} className="mt-2">
                            <p className="font-raleway text-whiteBlue font-bold text-[34px]">{inst.name}</p>
                            
                            <div className="flex flex-col">
                                {inst.experiences.map((exp: Experience)=> {
                                    console.log(exp);
                                    return(
                                        <div key={exp.id} className="flex flex-row">
                                            <span className="mx-5 lg:mx-10 w-[2px] bg-whiteBlue"></span>
                                            {exp.render()}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div id="academic-experiences" className="flex flex-grow bg-whiteBlue"></div>
        </section>
    );
}