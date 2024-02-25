'use client';
import Image from "next/image";
import CustomDate from "./objects/customDate";
import Achievement from "./objects/achievement";
import { Course, Job, Paper, Research } from "./objects/experiences";
import {Experience} from "./objects/experiences";
import { Learnable } from "./objects/learnables";
import LearnableC from "./components/learnableC";
import { useEffect, useState } from "react";
import curriculumData from "./data/data";
import ExperiencesC from "./components/experiencesC";

function collectAllLearnables(professionalExperiences: Job[], academicExperiences: Experience[]): {[key: string]: Learnable[]}{
    let tools: {[key: string]: Learnable} = {};
    let skills: {[key: string]: Learnable} = {};

    professionalExperiences.forEach((exp)=>{
        exp.tools.forEach((tool) => {
            tools[tool.name] = tool;
        });

        exp.skills.forEach((skill) => {
            skills[skill.name] = skill;
        });
    });

    academicExperiences.forEach((exp)=>{
        exp.tools.forEach((tool) => {
            tools[tool.name] = tool;
        });

        exp.skills.forEach((skill) => {
            skills[skill.name] = skill;
        });
    });

    let all = {
        tools: Object.values(tools).sort((a, b)=> a.name.localeCompare(b.name)),
        skills: Object.values(skills).sort((a, b)=> a.name.localeCompare(b.name))
    }

    return all;
};

function getProfessionalExperiences(professionalExperiences: any[]){
    return professionalExperiences.map((exp) => {
        return new Job(
            exp.id,
            exp.institution,
            exp.position,
            exp.dates,
            exp.description,
            exp.tools,
            exp.skills
        );
    });
}

function getAcademicExperiences(academicExperiences: any[]){
    return academicExperiences.map((exp) => {
        if(exp.type == "course"){
            return new Course(
                exp.id,
                exp.institution,
                exp.title,
                exp.dates,
                exp.description,
                exp.level,
                exp.tools,
                exp.skills
            );
        }else if(exp.type == "research"){
            return new Research(
                exp.id,
                exp.institution,
                exp.subject,
                exp.dates,
                exp.description,
                exp.tools,
                exp.skills
            );
        }else{
            return new Paper(
                exp.id,
                exp.institution,
                exp.title,
                exp.dates,
                exp.description,
                exp.magazine,
                exp.skills
            );
        }
    });
}


export default function Home() {
    const allProfExp: Job[] = getProfessionalExperiences(curriculumData.professional_experiences);
    const allAcadExp: Experience[] = getAcademicExperiences(curriculumData.academic_experiences);
    const learnables = collectAllLearnables(allProfExp, allAcadExp);

    const [applyFilters, setApplyFilters] = useState(false);
    const [professionalExperiences, setProfessionalExperiences]: any = useState(allProfExp);
    const [academicExperiences, setAcademicExperiences]: any = useState(allAcadExp);
    const [learnableFilters, setLearnableFilters]: any = useState([]);

    useEffect(() => {
        if(learnableFilters.length > 0){
            setProfessionalExperiences(allProfExp.filter((exp) => {
                return exp.tools.some((tool: any) => learnableFilters.includes(tool.name)) ||
                        exp.skills.some((skill: any) => learnableFilters.includes(skill.name));
            }));
            setAcademicExperiences(allAcadExp.filter((exp) => {
                return exp.tools.some((tool: any) => learnableFilters.includes(tool.name)) ||
                        exp.skills.some((skill: any) => learnableFilters.includes(skill.name));
            }));
        }else{
            setProfessionalExperiences(allProfExp);
            setAcademicExperiences(allAcadExp);
        }

        console.log(learnableFilters);
    }, [learnableFilters]);

    function updateLearnablesFilter(e: any){
        const learnable = e.target.innerText;
        // Check if the learnable is already in the filters
        const index: number = learnableFilters.indexOf(learnable);

        if(index == -1){
            setLearnableFilters((learnableFilters: any) => [...learnableFilters, learnable]);
        }else{
            setLearnableFilters((learnableFilters: any) => [...learnableFilters].filter(learn => learn != learnable));
        }
    }

    function computeAge(birth_date: Date){
        let today = new Date();
        if(today.getDate() >= birth_date.getDate() && today.getMonth() >= birth_date.getMonth()){
            return today.getFullYear() - birth_date.getFullYear();
        }
        return today.getFullYear() - birth_date.getFullYear() - 1;
    }

    let age = computeAge(new CustomDate(curriculumData.birth_date));

    return(
        <section id="site" className="flex flex-col">
            <section id="banner" 
            className="relative flex flex-row flex-wrap justify-center lg:justify-between items-center py-10 xl:py-[20vh] lg:px-[10vw]"
            >
                <Image  
                src={"/beach_background.png"} 
                fill
                alt="Autor do currículo de touca, numa praia nublada com neblina"
                className="absolute opacity-30 z-[-1] object-cover"
                />
                <div className="flex flex-col items-center xl:items-start text-center lg:text-start order-2 lg:order-1 mt-10 lg:mt-0 lg:basis-2/3">
                    <p className="font-bebas text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[96px]">{curriculumData.name}</p>
                    <p className="font-raleway text-[25px] lg:text-[22px] xl:text-[28px] 2xl:text-[36px]">{curriculumData.title}</p>
                    <p className="font-raleway text-[18px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">{curriculumData.marital_status} | {age} anos</p>
                    <p className="font-raleway text-[18px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">{curriculumData.email}</p>
                    <p className="font-raleway text-[18px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]"><a href={curriculumData.linkedin} target="blank">Linkedin</a> | <a href={curriculumData.github} target="blank">Github</a></p>
                </div>

                <div className="relative w-[250px] h-[250px] 2xl:w-[400px] 2xl:h-[400px] order-1 2xl:order-2">
                    <Image 
                    className="rounded-full" 
                    src={"/author_profile.png"} 
                    fill
                    alt="Autor do currículo de touca, numa praia nublada com neblina"
                    />
                </div>
            </section>
            <section id="experiences" className="flex flex-row flex-wrap justify-center m-0">
                <div id="stack" className="flex flex-col justify-between items-center relative min-h-[60vh]">
                    <Image  
                    src={"/neo.png"} 
                    fill
                    style={{top: 0}}
                    alt="Foto do autor quando for mais velho (tomara)... Mentira, é apenas Neo, de Matrix."
                    className="relative z-[-1] opacity-60 object-top object-cover"
                    />
                    <p className="font-goldman text-center font-bold text-[40px] lg:mt-10">Stack</p>
                    <div className="flex lg:flex-row justify-between px-5 lg:px-10 gap-5">
                        <div className="flex flex-col flex-wrap mt-5 lg:mt-10">
                            <h2 className="font-goldman text-center text-[30px]">Hard skills</h2>
                            <div className="flex flex-row flex-wrap justify-center gap-2">
                                {learnables.tools.map((tool) =>
                                    <LearnableC key={tool.id} learnable={tool.toObject()} onClickHandler={updateLearnablesFilter} toggled={learnableFilters.includes(tool.name)}/> 
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col flex-wrap mt-5 lg:mt-10">
                            <h2 className="font-goldman text-center text-[30px]">Soft skills</h2>
                            <div className="flex flex-row flex-wrap justify-center gap-2">
                                {learnables.skills.map((skill) => 
                                    <LearnableC key={skill.id} learnable={skill.toObject()} onClickHandler={updateLearnablesFilter} toggled={learnableFilters.includes(skill.name)}/>
                                )}
                            </div>
                        </div>
                    </div>
                    <p className="font-raleway p-2 text-center">Obs: clique nos itens acima para filtrar as experiências abaixo</p>
                </div>
                <div className="flex flex-row flex-wrap justify-center">
                    <ExperiencesC experiences={professionalExperiences} title="Experiência profissional" theme={"dark"}/>
                    <ExperiencesC experiences={academicExperiences} title="Experiência acadêmica" theme={"light"}/>
                </div>
            </section>
            <section id="achievements" className="bg-yellow flex flex-col justify-center items-center pb-10">
                <div className="flex flex-col items-center">
                    <h1 className="text-darkBlue text-center font-raleway pt-10 text-[50px] lg:text-[64px]">Conquistas</h1>
                    <h2 className="text-darkBlue text-center font-medium font-raleway text-[20px] lg:text-[24px]">Algumas são fruto do esforço, outras vêm de surpresa.</h2>
                    <h2 className="text-darkBlue text-center font-medium font-raleway text-[20px] lg:text-[24px]">E outras, nós nos esforçamos sem saber, por gostarmos do que fazemos, e então somos surpreendidos.</h2> 
                    <h2 className="text-darkBlue text-center font-medium font-raleway text-[20px] lg:text-[24px]">Particularmente, gosto da última opção.</h2>
                </div>
                <div className="flex justify-center flex-wrap pt-5">
                    {
                        curriculumData.achievements.map((achievement: any) => {
                            let a: Achievement = Achievement.fromData(achievement);
                            return a.render();
                        })
                    }
                </div>
            </section>
            <section id="introduction" className="py-20 px-[15vw] flex flex-row flex-wrap justify-center lg:justify-between items-center">
                <div id="textual-introduction" className="flex flex-col gap-5 mt-10 lg:mt-0 order-2 lg:order-1 lg:basis-2/3">
                    {
                        curriculumData.description.map((desc: {id: string, text: string}) => {
                            return <p key={desc.id} className="font-raleway text-[20px]">{desc.text}</p>
                        })
                    }
                </div>
                <div className="relative w-[200px] h-[200px] order-1 lg:order-2">
                    <Image
                    className="rounded-full"
                    src={"/baby_author.png"}
                    fill
                    alt="Foto do autor quando bebê"
                    />
                </div>
            </section>
            <footer className="h-[20vh] flex justify-center">
            </footer>
        </section>
    );
}