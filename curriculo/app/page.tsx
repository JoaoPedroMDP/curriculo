'use client';
import {curriculumData, institutions as raw_inst} from './data/data';
import BannerSection from './components/sections/bannerSection';
import LearnablesSection from './components/sections/learnablesSection';
import ExperiencesSection from './components/sections/experiencesSection';
import AchievementsSection from './components/sections/achievementsSection';
import AboutMeSection from './components/sections/aboutMeSection';
import { useState } from 'react';
import { Learnable } from './objects/learnables';

export default function Home() {
    const [filters, setFilters]: any = useState({});

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
            <BannerSection curriculumData={curriculumData}/>
            <ExperiencesSection filters={filters}/>
            <LearnablesSection updateFilters={updateLearnablesFilter}/>
            <AchievementsSection />
            <AboutMeSection />
        </section>
    );
}