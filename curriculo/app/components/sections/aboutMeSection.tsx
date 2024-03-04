import { curriculumData } from "@/app/data/data";
import Image from "next/image";

export default function AboutMeSection(){
    return(
        <section id="introduction" className="font-raleway py-20 px-[10vw] flex flex-col flex-wrap justify-center lg:justify-between items-center">
            <h1 className="text-[50px] font-bold">Sobre mim</h1>
            <div className="flex flex-wrap justify-center lg:justify-between align-middle">
                <div id="textual-introduction" className="flex flex-col gap-5 mt-10 lg:mt-0 lg:basis-2/3">
                    {
                        curriculumData.description.map((desc: {id: string, text: string}) => {
                            return <p key={desc.id} className="text-[20px]">{desc.text}</p>
                        })
                    }
                </div>
                <div className="relative w-[250px] h-[250px] self-center mt-10 lg:mt-0">
                    <Image
                    className="rounded-full"
                    src={"/baby_author.png"}
                    fill
                    alt="Foto do autor quando bebê"
                    />
                </div>
            </div>
        </section>
    );
}