import Image from "next/image";
import { promises as fs } from "fs";
import Experience from "./components/experience";
import CustomDate from "./objects/customDate";
import Achievement from "./objects/achievement";

function experiencesColumn(experiences: any[], title: string, theme: string){
    const colorVariants: any = {
        dark: {content: 'bg-darkBlue text-whiteBlue', input: 'bg-whiteBlue text-darkBlue'},
        light: {content: 'bg-whiteBlue text-darkBlue', input: 'bg-darkBlue text-whiteBlue'},
      }
    let scroll = theme == "dark" ? "light-scroll" : "dark-scroll"; 

    return(
        <div id="professional" className={`flex flex-col lg:basis-1/2 justify-top align-middle py-5 px-[5vw] ${colorVariants[theme]["content"]}`}>
            <h1 className="sticky font-raleway text-[50px] lg:text-[64px] text-center">{title}</h1>
            <div className={`${scroll} scroll overflow-auto max-h-[60vh] mt-10`}>
            {
                experiences.map((exp) => 
                    <Experience experience_data={exp} />)
            }
            </div>
        </div>
    );
}


export default async function Home() {
    function computeAge(birth_date: Date){
        let today = new Date();
        if(today.getDate() >= birth_date.getDate() && today.getMonth() >= birth_date.getMonth()){
            return today.getFullYear() - birth_date.getFullYear();
        }
        return today.getFullYear() - birth_date.getFullYear() - 1;
    }

    const file = await fs.readFile(process.cwd() + '/data.json', 'utf8');
    const data = JSON.parse(file);
    let age = computeAge(new CustomDate(data.birth_date));

    return(
        <section id="site" className="flex flex-col">
            <section id="banner" 
            className="relative bg-cover bg-center flex flex-row flex-wrap justify-center lg:justify-between items-center py-10 xl:py-[20vh] lg:px-[10vw]"
            >
                <Image  
                src={"/beach_background.png"} 
                fill
                alt="Autor do currículo de touca, numa praia nublada com neblina"
                className="absolute opacity-30 z-[-1] object-cover"
                />
                <div className="flex flex-col items-center xl:items-start text-center lg:text-start order-2 lg:order-1 mt-10 lg:mt-0 lg:basis-2/3">
                    <p className="font-bebas text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[96px]">{data.name}</p>
                    <p className="font-raleway text-[25px] lg:text-[22px] xl:text-[28px] 2xl:text-[36px]">{data.title}</p>
                    <p className="font-raleway text-[18px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">{data.marital_status} | {age} anos</p>
                    <p className="font-raleway text-[18px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">{data.email}</p>
                    <p className="font-raleway text-[18px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]"><a href={data.linkedin} target="blank">Linkedin</a> | <a href={data.github} target="blank">Github</a></p>
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
            <section id="introduction" className="py-20 px-[15vw] flex flex-row flex-wrap justify-center lg:justify-between items-center">
                <div id="textual-introduction" className="flex flex-col gap-5 mt-10 lg:mt-0 order-2 lg:order-1 lg:basis-2/3">
                    {
                        data.description.map((desc: {id: string, text: string}) => {
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
            <section id="experiences" className="flex flex-row flex-wrap justify-center m-0">
                {experiencesColumn(data.professional_experiences, "Experiência profissional", "dark")}
                {experiencesColumn(data.academic_experiences, "Experiência acadêmica", "light")}
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
                        data.achievements.map((achievement: any) => {
                            let a: Achievement = Achievement.fromData(achievement);
                            return a.render();
                        })
                    }
                </div>
            </section>
            <footer className="h-[20vh] flex justify-center">
            </footer>
        </section>
    );
}