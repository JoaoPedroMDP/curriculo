import achievDao from "@/app/data/daos/achievementDAO";
import Achievement from "@/app/objects/achievement";

export default function AchievementsSection(){
    function agglomerateByYear(achievements: Achievement[]): any[]{
        let agglomerated: any = {};
        achievements.forEach((achiev) => {
            let year = achiev.date.split("/")[2];
            if(agglomerated[year] == undefined){
                agglomerated[year] = [];
            }
            agglomerated[year].push(achiev);
        });

        return agglomerated;
    }

    let achievements: any = agglomerateByYear(achievDao.allSortedByDate());
    let mainColors = "text-darkBlue hover:text-yellow border-darkBlue hover:bg-darkBlue"

    return(
        <section id="achievements" className="bg-yellow">
            <h2 className="text-darkBlue text-center font-raleway pt-10 text-[50px] lg:text-[64px] print:text-black print:font-bold">Conquistas</h2>
            <h3 className="text-darkBlue text-center font-medium font-raleway text-[20px] lg:text-[24px] print:text-black   ">Consequências da paixão pelo que fazemos</h3> 
                <div className="mt-5">
                    {Object.keys(achievements).reverse().map((year) => {
                        return(
                            <div key={year} className="font-raleway flex flex-col print:break-inside-avoid">
                                <h4 className="text-lightBlue bg-darkBlue text-center font-raleway text-[40px] lg:text-[50px] font-bold print:text-start print:text-black">{year}</h4>
                                <div className="flex flex-row flex-wrap m-[10px] justify-center print:justify-normal print:flex-col print:m-0">
                                    {achievements[year].map((achiev: Achievement) => {
                                        return(
                                            <div key={achiev.id} className={`${mainColors} m-4 sm:max-w-sm lg:max-w-lg group overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out rounded-3xl border-[1px] shadow-2xl print:rounded-none print:border-none print:shadow-none print:max-w-fit print:max-h-fit print:mb-3 print:break-inside-avoid`}>
                                                <div className="flex flex-col p-5 justify-between text-center print:text-start print:p-0">
                                                    <h5 className="font-raleway font-bold text-[32px]">{achiev.title}</h5>
                                                    <p className="font-raleway text-[24px]">{achiev.description}</p>
                                                </div>
                                                <div className="transition-all scroll overflow-auto duration-300 ease-out bg-darkBlue group-hover:bg-lightBlue text-yellow group-hover:text-darkBlue print:text-black">
                                                    <span className="font-bold text-[32px] italic px-[20px] text-nowrap print:p-0 print:text-[25px]">{achiev.institution_name}</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
        </section>
    );
};