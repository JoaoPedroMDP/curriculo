'use client';
import {curriculumData, institutions as raw_inst} from './data/data';
import BannerSection from './components/sections/bannerSection';
import LearnablesSection from './components/sections/learnablesSection';
import ExperiencesSection from './components/sections/experiencesSection';
import AchievementsSection from './components/sections/achievementsSection';
import AboutMeSection from './components/sections/aboutMeSection';
import { useEffect, useState } from 'react';
import { Learnable } from './objects/learnables';

export default function Home() {
    const [filters, setFilters]: any = useState({});
    
    useEffect(() => {
        console.log(filters);
    }, [filters]);

    function updateLearnablesFilter(learnable: Learnable){
        // Check if the learnable is already in the filters
        if(filters[learnable.name]){
            // If it is, remove it
            let newFilters = {...filters};
            delete newFilters[learnable.name];
            setFilters(newFilters);
        }else{
            // If it's not, add it
            setFilters({...filters, [learnable.name]: learnable});
        }
    }

    return(
        <section id="site" className="flex flex-col">
            <BannerSection curriculumData={curriculumData}/>
            <ExperiencesSection filters={filters}/>
            <LearnablesSection filters={filters} updateFilters={updateLearnablesFilter}/>
            <AchievementsSection />
            <AboutMeSection />
        </section>
    );
}