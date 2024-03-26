'use client';
import {curriculumData, institutions as raw_inst} from './data/data';
import BannerSection from './components/sections/bannerSection';
import LearnablesSection from './components/sections/learnablesSection';
import ExperiencesSection from './components/sections/experiencesSection';
import AchievementsSection from './components/sections/achievementsSection';
import AboutMeSection from './components/sections/aboutMeSection';
import { useEffect, useState } from 'react';
import { Learnable } from './objects/learnables';
import DataConsentSection from './components/sections/dataConsent';
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Home() {
    const [dataConsent, setDataConsent] = useState(undefined);
    const [filters, setFilters]: any = useState({});

    useEffect(() => {}, [dataConsent]);

    function updateLearnablesFilter(learnable: Learnable){
        if(filters[learnable.name]){
            let newFilters = {...filters};
            delete newFilters[learnable.name];
            setFilters(newFilters);
        }else{
            setFilters({...filters, [learnable.name]: learnable});
        }
    }

    return(
        <section id="site" className="flex flex-col">
            <div className="text-center top bg-black w-full z-10 text-[15px]">
                <p className="m-2 print:hidden">Sabia que você pode salvar esse currículo como PDF, ou imprimi-lo? Basta apertar as teclas 
                    <span className="text-yellow italic"> Ctrl</span> e <span className="text-yellow italic">P</span> ao mesmo tempo!
                </p>
            </div>
            <BannerSection curriculumData={curriculumData}/>
            <p className="m-2 hidden print:block">Você pode acessar esse currículo online em <a href="https://joaopedromdp.vercel.app" className="text-yellow">joaopedromdp.vercel.app</a></p>
            <AboutMeSection />
            <ExperiencesSection filters={filters}/>
            <LearnablesSection updateFilters={updateLearnablesFilter}/>
            <AchievementsSection />
            <DataConsentSection consented={dataConsent} updateConsent={setDataConsent}/>
            {dataConsent == true &&
                <>
                    <Analytics/>
                    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS || ""} />
                </>
            }
        </section>
    );
}