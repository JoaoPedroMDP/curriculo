import Image from "next/image";
import { promises as fs } from "fs";
import Experience from "./components/experience";
import CustomDate from "./objects/customDate";
import Achievement from "./objects/achievement";

function experiencesColumn(experiences: any[], title: string, bgColor: string, textColor: string, scroll: string){
    return(
        <div id="professional" className={`flex flex-col basis-1/2 justify-top align-middle py-5 px-[5vw] ${bgColor} ${textColor}`}>
            <h1 className="sticky font-raleway text-[64px] text-center">{title}</h1>
            <div className={`${scroll} scroll overflow-auto overscroll-contain max-h-[60vh] mt-10`}>
            {
                experiences.map((exp) => 
                    <Experience key={exp.id} experience_data={exp} />)
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
            className="relative bg-cover bg-center flex flex-row justify-between items-center px-[10vw] py-[20vh]"
            >
                <Image  
                src={"/beach_background.png"} 
                fill
                alt="Autor do currículo de touca, numa praia nublada com neblina"
                className="absolute opacity-30 z-[-1]"
                />
                <div className="flex flex-col">
                    <p className="font-bebas text-[96px]">{data.name}</p>
                    <p className="font-raleway text-[36px]">{data.title}</p>
                    <p className="font-raleway text-[24px]">{data.marital_status} | {age} anos</p>
                    <p className="font-raleway text-[24px]">
                        {data.email} | <a href={data.linkedin} target="blank">Linkedin</a> | <a href={data.github} target="blank">Github</a>
                    </p>
                </div>

                <div className="pl-20">
                    <Image 
                    className="rounded-full" 
                    src={"/author_profile.png"} 
                    width={400} 
                    height={400}
                    alt="Autor do currículo de touca, numa praia nublada com neblina"
                    />
                </div>
            </section>
            <section id="introduction" className="py-20 px-[15vw] m-0 flex flex-row justify-between items-center">
                <div id="textual-introduction" className="flex flex-col gap-5 basis-2/3">
                    {
                        data.description.map((desc: {id: string, text: string}) => {
                            return <p key={desc.id} className="font-raleway text-[20px]">{desc.text}</p>
                        })
                    }
                </div>
                <div id="baby-author">
                    <Image
                    className="rounded-full"
                    src={"/baby_author.png"}
                    width={200}
                    height={200}
                    alt="Foto do autor quando bebê"
                    />
                </div>
            </section>
            <section id="experiences" className="flex flex-row justify-center">
                {experiencesColumn(data.professional_experiences, "Experiência profissional", "bg-darkBlue", "text-white", "light-scroll")}
                {experiencesColumn(data.academic_experiences, "Experiência acadêmica", "bg-whiteBlue", "text-darkBlue", "dark-scroll")}
            </section>
            <section id="achievements" className="bg-yellow flex flex-col justify-center items-center pb-10">
                <h1 className="text-darkBlue font-raleway pt-10 text-[64px]">Conquistas</h1>
                <h2 className="text-darkBlue font-medium font-raleway text-[24px]">Algumas são fruto do esforço, outras vêm de surpresa.</h2>
                <h2 className="text-darkBlue font-medium font-raleway text-[24px]">E outras, nós nos esforçamos sem saber, por gostarmos do que fazemos, e então somos surpreendidos.</h2> 
                <h2 className="text-darkBlue font-medium font-raleway text-[24px]">Particularmente, gosto da última opção.</h2>
                <div className="flex flex-row justify-center flex-wrap gap-5 pt-5">
                    {
                        data.achievements.map((achievement: any) => {
                            let a: Achievement = Achievement.fromData(achievement);
                            return <div key={a.id}>{a.render()}</div>
                        })
                    }
                </div>
            </section>
            <footer className="h-[20vh] flex justify-center">
            </footer>
        </section>
    );
}