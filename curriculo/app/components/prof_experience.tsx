import { Job } from "../objects/experiences";

export default function ProfExperience({experience_data}) {
    let job: Job = new Job(experience_data.institution, experience_data.type, experience_data.position, experience_data.interval)
    
    return (
        <div>
            <p>{job.institution}</p>
            <div>
                <p>{job.description}</p>
            </div>
        </div>
    );
};