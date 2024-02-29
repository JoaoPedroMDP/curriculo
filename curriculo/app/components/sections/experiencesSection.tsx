'use client'

import { ExpBuilder, Experience, Job } from "@/app/objects/experiences";
import { Institution } from "@/app/objects/institution";
import ExperiencesC from "../experiencesC";

export default function ExperiencesSection({professionalExperiences, academicExperiences}: {professionalExperiences: Experience[], academicExperiences: Experience[]}) {
    let pInstitutions: Institution[] = Institution.collectAll(professionalExperiences);
    let aInstitutions: Institution[] = Institution.collectAll(academicExperiences);

    return(
        <section id="experiences" className="flex flex-row flex-wrap">
            <div className="lg:basis-1/2">
                <ExperiencesC institutions={pInstitutions} theme="dark" title="Experiência profissional"/>
            </div>
            <div className="lg:basis-1/2">
                <ExperiencesC institutions={aInstitutions} theme="light" title="Experiência acadêmica"/>
            </div>
        </section>
    );
}