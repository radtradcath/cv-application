export default function PreviewEducation({school, area, initialDate, finalDate}) {
    return (
        <div className="education-p">
            <h1>Education Experience</h1>
            <p>School: {school}</p>
            <p>Study: {area}</p>
            <p>From: {initialDate}</p>
            <p>To: {finalDate}</p>
        </div>
    )
}