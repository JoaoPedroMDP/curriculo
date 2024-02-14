import Image from "next/image";
import { promises as fs } from "fs";

export default async function Home() {
    function getDateFromString(date: string){
        let pieces = date.split("/").map((piece) => parseInt(piece));
        return new Date(pieces[2], pieces[1], pieces[0])
    }

    function computeAge(birth_date: Date){
        let today = new Date();
        if(today.getDate() >= birth_date.getDate() && today.getMonth() >= birth_date.getMonth()){
            return today.getFullYear() - birth_date.getFullYear();
        }
        return today.getFullYear() - birth_date.getFullYear() - 1;
    }

    const file = await fs.readFile(process.cwd() + '/data.json', 'utf8');
    const data = JSON.parse(file);
    let age = computeAge(getDateFromString(data.birth_date));

    return(
        <section id="site" className="flex flex-col">
            <section id="banner" 
            className="bg-banner bg-cover bg-center flex flex-row justify-between items-center px-[10vw] py-[20vh]"
            >
                <div className="flex flex-col">
                    <p className="font-bebas text-[96px]">{data.name}</p>
                    <p className="font-raleway text-[36px]">{data.title}</p>
                    <p className="font-raleway text-[24px]">{data.marital_status} | {age} anos</p>
                    <p className="font-raleway text-[24px]">joao.pedro.mdp@outlook.com | Linkedin | Github</p>
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
                <div id="professional" className="flex flex-col justify-center align-middle">
                    <p>Experiência profissional</p>
                </div>
                <div id="academic" className="flex flex-col justify-center align-middle">
                    <p>Experiência acadêmica</p>
                </div>
            </section>
        </section>
    );
}