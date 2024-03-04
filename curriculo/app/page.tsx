'use client';
import {curriculumData, institutions as raw_inst} from './data/data';
import BannerSection from './components/sections/bannerSection';
import LearnablesSection from './components/sections/learnablesSection';
import { Skill, Tool } from './objects/learnables';
import ExperiencesSection from './components/sections/experiencesSection';
import AchievementsSection from './components/sections/achievementsSection';
import AboutMeSection from './components/sections/aboutMeSection';
import { useState } from 'react';

export default function Home() {
    const [filters, setFilters] = useState([]);
    
    return(
        <section id="site" className="flex flex-col">
            <BannerSection curriculumData={curriculumData}/>
            <ExperiencesSection />
            <LearnablesSection filters={filters}/>
            <AchievementsSection />
            <AboutMeSection />
        </section>
    );
}