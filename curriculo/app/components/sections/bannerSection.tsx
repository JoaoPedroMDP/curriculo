import Image from 'next/image';
import CustomDate from '../../objects/customDate';

export default function BannerSection({curriculumData}: {curriculumData: any}){
    let user = curriculumData.user;

    function computeAge(birth_date: Date){
        let today = new Date();
        if(today.getDate() >= birth_date.getDate() && today.getMonth() >= birth_date.getMonth()){
            return today.getFullYear() - birth_date.getFullYear();
        }
        return today.getFullYear() - birth_date.getFullYear() - 1;
    }

    let age = computeAge(new CustomDate(user.birth_date));

    return(
        <section id="banner" 
        className="relative flex flex-col lg:flex-row justify-center lg:justify-between items-center p-5 lg:p-20 xl:p-44 xl:h-[80vh]"
        >
            <Image  
            src={"/banner_background.jpeg"} 
            fill
            alt="Autor do currículo numa trilha no Pico do Anhangava. Óculos de sol, boné preto e mochila cinza."
            className="absolute opacity-30 z-[-1] object-cover object-right-top max-sm:hidden"
            />
            <div className="flex flex-col xl:items-start text-center lg:text-start order-2 lg:order-1 mt-10 lg:mt-0 lg:basis-2/3">
                <p className="font-bebas text-[50px] lg:text-[60px] xl:text-[80px]">{user.name}</p>
                <p className="font-raleway text-[25px] lg:text-[22px] xl:text-[30px]">{user.title}</p>
                <p className="font-raleway text-[18px] lg:text-[15px] xl:text-[20px]">{user.marital_status} | {age} anos</p>
                <p className="font-raleway text-[18px] lg:text-[15px] xl:text-[20px]">{user.email}</p>
                <p className="font-raleway text-[18px] lg:text-[15px] xl:text-[20px]"><a href={user.linkedin} target="blank">Linkedin</a> | <a href={user.github} target="blank">Github</a></p>
            </div>

            <div className="relative w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] order-1 2xl:order-2">
                <Image 
                className="rounded-full object-cover" 
                src={"/author.jpeg"} 
                fill
                alt="Autor do currículo"
                />
            </div>
        </section>
    );
};