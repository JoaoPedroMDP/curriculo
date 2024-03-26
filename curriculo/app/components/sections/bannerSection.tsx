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
        className="relative flex flex-col justify-center align-middle p-[50px] lg:flex-row lg:justify-between lg:px-[50px] lg:py-[150px] xl:px-[200px] print:flex-row print:py-[50px]"
        >
            {/* BACKGROUND */}
            <Image src={"/banner_background.jpeg"} fill
            alt={user.brief}
            className="print:hidden absolute opacity-30 z-[-1] object-cover object-right-top"
            />
            
            <div className="relative w-[250px] h-[250px] self-center lg:order-2 lg:w-[300px] lg:h-[300px]">
                <Image src={"/author.jpeg"} fill alt={user.brief} className="object-cover rounded-full border-yellow border-[2px] shadow-md shadow-lightBlue print:rounded-none print:border-none print:shadow-none"/>
            </div>
            
            <div className="flex flex-col flex-wrap flex-shrink m-5 text-center lg:text-start lg:order-1 print:text-start">
                <p className="font-bebas text-[35px] lg:text-[50px]">{user.name}</p>
                <p className="font-raleway text-wrap text-[20px] lg:text-[25px]">{user.title}</p>
                <p className="font-raleway text-wrap text-[15px] lg:text-[25px]">{user.marital_status} | {age} anos</p>
                <p className="font-raleway text-wrap text-[15px] lg:text-[25px]">{user.email}</p>
                <p className="font-raleway text-wrap text-[15px] lg:text-[25px]"><a href={user.linkedin} target="blank">Linkedin</a> | <a href={user.github} target="blank">Github</a></p>
            </div>
        </section>
    );
};