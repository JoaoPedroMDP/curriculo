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
        className="relative flex flex-row flex-wrap justify-center lg:justify-between items-center py-10 xl:py-[20vh] lg:px-[10vw]"
        >
            <Image  
            src={"/beach_background.png"} 
            fill
            alt="Autor do currículo de touca, numa praia nublada com neblina"
            className="absolute opacity-30 z-[-1] object-cover"
            />
            <div className="flex flex-col items-center xl:items-start text-center lg:text-start order-2 lg:order-1 mt-10 lg:mt-0 lg:basis-2/3">
                <p className="font-bebas text-[50px] lg:text-[60px] xl:text-[70px] 2xl:text-[96px]">{user.name}</p>
                <p className="font-raleway text-[25px] lg:text-[22px] xl:text-[28px] 2xl:text-[36px]">{user.title}</p>
                <p className="font-raleway text-[18px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">{user.marital_status} | {age} anos</p>
                <p className="font-raleway text-[18px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]">{user.email}</p>
                <p className="font-raleway text-[18px] lg:text-[15px] xl:text-[18px] 2xl:text-[24px]"><a href={user.linkedin} target="blank">Linkedin</a> | <a href={curriculumData.github} target="blank">Github</a></p>
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
    );
};