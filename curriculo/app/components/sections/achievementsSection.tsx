import achievDao from "@/app/data/daos/achievementDAO";
import instDao from "@/app/data/daos/institutionDAO";
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
            <h1 className="text-darkBlue text-center font-raleway pt-10 text-[50px] lg:text-[64px]">Conquistas</h1>
            <h2 className="text-darkBlue text-center font-medium font-raleway text-[20px] lg:text-[24px]">Consequências da paixão pelo que fazemos</h2> 
                <div className="mt-5">
                    {Object.keys(achievements).reverse().map((year) => {
                        return(
                            <div key={year} className="font-raleway flex flex-col">
                                <h2 className="text-lightBlue bg-darkBlue text-center font-raleway text-[40px] lg:text-[50px] font-bold ">{year}</h2>
                                <div className="flex flex-row flex-wrap m-[2vw] justify-center">
                                    {achievements[year].map((achiev: Achievement) => {
                                        return(
                                            <div key={achiev.id} className={`${mainColors} m-4 sm:max-w-sm lg:max-w-lg group overflow-hidden flex flex-col justify-between transition-all duration-300 ease-out rounded-3xl border-[1px] shadow-2xl`}>
                                                <div className="flex flex-col p-5 justify-between text-center">
                                                    <h2 className="font-raleway font-bold text-[32px]">{achiev.title}</h2>
                                                    <p className="font-raleway text-[24px]">{achiev.description}</p>
                                                </div>
                                                <div className="transition-all duration-300 ease-out bg-darkBlue group-hover:bg-lightBlue text-yellow group-hover:text-darkBlue">
                                                    <span className="font-bold text-[32px] italic pl-[2vw] text-nowrap">{achiev.institution_name}</span>
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