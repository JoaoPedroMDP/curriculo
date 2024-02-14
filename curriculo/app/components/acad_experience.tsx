export default function Experience({institution, type, dates, description, tools, skills, extra_data}) {
    return (
        <div>
            <p>{institution}</p>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
};