'use client';
import Image from 'next/image';
import { ReactNode, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { acadExp, Experience, profExp, userData } from '@/app/data/data';
import { FaCalendarAlt, FaGithubAlt, FaHeart, FaLinkedin, FaMapMarkerAlt, FaMoon, FaSun } from 'react-icons/fa';
import CustomDate from './objects/customDate';

function DataConsentSection({consented, updateConsent} : {consented: boolean | undefined, updateConsent: CallableFunction}){
    if(consented === undefined){
        return(
            <section id="data-consent" className="animate-slideIn fixed bottom-0 bg-inherit text-inherit w-full px-5 py-4 flex flex-col text-center border-offBlack dark:border-offWhite border-t-8">
                <p className="text-[20px] font-bold">A &lsquo;Oráculo&rsquo; lhe oferece cookies. Aceitas?</p>
                <p className="text-[16px]">Estão saboroosos, hehehe</p>
                <p className="text-[12px] mt-2">Ao continuar na página, você aceita que dados de navegação sejam coletados.</p>
                <div className="flex flex-row justify-around lg:justify-center lg:gap-20 pt-3">
                    <button onClick={() => updateConsent(true)} className="font-semibold border-[2px] text-inherit border-offBlack dark:border-offWhite bg-inherit px-5 py-1">Entendi!</button>
                </div>
            </section>
        );
    }
}

const Experiences = ({exps}: {exps: Experience[]}) => {
    let sorted = exps.sort((a, b) => CustomDate.compareDate(a.start, b.start, true));

    return (
        <div>
            {sorted.map(exp => {
                return(
                    <div key={exp.id} className="flex flex-col mt-5">
                        <span className="text-[22px]">{exp.position}</span>
                        <span className="text-[20px] font-light">{exp.institution}</span>
                        <div className="flex gap-3">
                            <span className="font-light text-[16px]">{exp.start}</span>
                            <span>•</span>
                            <span className="font-light text-[16px]">{exp.end ?? "Atual"}</span>
                        </div>
                        <span>{exp.description}</span>
                    </div>
                );
            })}
        </div>
    );
}

const Idiom = ({name, level} : {name: string, level: string}) => {
    return(
        <div className="flex gap-3">
            <span className="text-[16px] font-bold">{name}</span>
            <span className="text-[16px] font-normal">{level}</span>
        </div>
    )
}

const Section = ({id, children, title, classes, row} : {id: string, children: ReactNode, title?: string, classes?: string, row?: any}) => {
    return(
        <div id={id} className={`flex ${row != undefined ? 'flex-row' : 'flex-col'} w-full px-6 pt-5 pb-2 ${classes}`}>
            {title && <h2 className='text-[22px] font-bold'>{title}</h2>}
            {children}
        </div>
    )
}

const SmallInfo = ({icon, text, link} : {icon: ReactNode, text: string, link?: string}) => {
    return(
        <div className={`flex flex-row gap-[5px] w-fit ${link && 'border-b-2 border-offBlack dark:border-offWhite'}`}>
            {icon}
            {link ? <a href={link} target='blank' className="text-[14px]">{text}</a> : <span className="text-[14px]">{text}</span>}
        </div>
    )
}

const TechStack = ({name, tools}: {name: string, tools: string[]}) => {
    return (
        <div className="flex flex-col mt-3">
            <span className="text-[18px] lg:text-[22px] font-normal">{name}</span>
            <div className="flex flex-row flex-wrap">
                {tools.map((tool, index) => {
                    return(
                        <div key={tool}>
                            <span className="text-[16px] font-normal px-2">•</span>
                            <span key={tool} className="font-normal">{tool}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

const ThemeSwitcher = ({theme, switchTheme} : {theme: boolean, switchTheme: CallableFunction}) => {
    return(
        <div id="theme-button" className="fixed right-5 bottom-5 bg-offBlack dark:bg-offWhite p-3 rounded-[15px] cursor-pointer" onClick={() => switchTheme(!theme)}>
            {theme ? 
                <FaMoon size={25} className="text-offWhite"/>
                : <FaSun size={25} className="text-offBlack"/>
            }
        </div>
    );
}
export default function Home() {
    const [dataConsent, setDataConsent] = useState(undefined);
    const [enableAnalytics, setEnableAnalytics] = useState(false);
    const [expType, setExpType] = useState("P");
    const [theme, switchTheme] = useState(true);

    return (
        <section id="site" className={`flex flex-col text-[14px] bg-offWhite text-offBlack items-center dark:bg-offBlack dark:text-offWhite ${!theme && 'dark' } lg:px-80 lg:text-[18px]`}>
            <ThemeSwitcher theme={theme} switchTheme={switchTheme}/>
            
            <div id="photo" className="relative aspect-square w-[200px] lg:w-[300px] my-8 self-center">
                <Image src={"/author.jpeg"} fill alt={"Autor da página"} className=" object-cover rounded-[35px] border-offBlack dark:border-offWhite border-[2px] print:rounded-none print:border-none print:shadow-none"/>
            </div>

            <div id="headers" className="flex flex-col items-center text-center">
                <h1 className="text-[36px] lg:text-[45px] font-normal">{userData.name}</h1>
                <h2 className="text-[22px] w-[80%] font-normal">{userData.title}</h2>
            </div>
            <Section id="small-info" row classes="gap-5 lg:justify-center">
                <SmallInfo icon={<FaMapMarkerAlt size={18} />} text={userData.location}/>
                <SmallInfo icon={<FaCalendarAlt size={18} />} text="24 anos"/>
                <SmallInfo icon={<FaLinkedin size={18} />} text="Linkedin" link={userData.linkedin}/>
                <SmallInfo icon={<FaGithubAlt size={18} />} text="Github" link={userData.github}/>
            </Section>
            <Section id="brief">
                {userData.briefs.map((brief: string) => {
                    return(
                        <p key={brief} className="mt-5 font-medium">{brief}</p>
                    )
                })}
            </Section>
            <Section id="graduation" title="Formação">
                <span className='text-[18px] font-normal mt-1'>Tecnologia em Análise e Desenvolvimento de Sistemas</span>
                <div className="flex gap-5">
                    <span className="font-bold">Universidade Federal do Paraná</span>
                    <span>Término: 12/2024</span>
                </div>
            </Section>
            <Section id="languages" title="Idiomas">
                <div className="flex gap-5 flex-wrap">
                    <Idiom name="Português" level="Nativo"/>
                    <Idiom name="Inglês" level="Intermediário"/>
                </div>

            </Section>
            <Section id="technologies" title="Tecnologias">
                <TechStack name="Back-end" tools={["APIs REST", "Django", "Laravel", "MySQL", "PHP", "PostgreSQL", "Pytest", "Python", "Redis", "SQLite",]}/>
                <TechStack name="Front-end" tools={["Figma", "Next.js", "TailwindCSS", "React", "Axios"]}/>
                <TechStack name="Outras ferramentas" tools={["React Native", "Docker", "GIT", "Linux"]}/>
            </Section>
            
            {/* Espaçador apenas */}
            <div className="mt-5"></div>

            <Section id="experiences" title="Experiências" classes="bg-offBlack text-offWhite dark:bg-offWhite dark:text-offBlack">
                <div className="flex flex-col my-5">
                    <div className='flex justify-between sm:justify-center sm:gap-20 mb-2'>
                        <span className={`text-[15px] text-center cursor-pointer ${expType == "P" ? "border-b-2 border-offWhite dark:border-offBlack" : ""}`} onClick={() => setExpType("P")}>Experiência Profissional</span>
                        <span className={`text-[15px] text-center cursor-pointer ${expType == "A" ? "border-b-2 border-offWhite dark:border-offBlack" : ""}`} onClick={() => setExpType("A")}>Experiência Acadêmica</span>
                    </div>
                    <div className="max-h-[500px] overflow-y-scroll border-b-[1px] border-offWhite dark:border-offBlack">
                        <Experiences exps={expType == "P" ? profExp : acadExp} />
                    </div>
                </div>
            </Section>
            <Section id="footer">
                <div className="flex items-center gap-2 self-center">
                    <p className="font-normal">Feito com </p>
                    <FaHeart />
                    <p className="font-normal"> por João Pedro Martins</p>
                </div>
            </Section>
            <DataConsentSection consented={dataConsent} updateConsent={setDataConsent}/>
            {(dataConsent || enableAnalytics) &&
                <>
                    <Analytics/>
                    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS || ""} />
                </>
            }
        </section>
    );
}