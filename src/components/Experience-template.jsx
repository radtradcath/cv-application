export default function ExperienceTemplate({
  company,
  position,
  respons,
  initialDate,
  finalDate
}) {
  return (
    <div className="experience-template">
      <p>Company: {company}</p>
      <p>Position: {position}</p>
      <p>From: {initialDate}</p>
      <p>To: {finalDate}</p>
      <p>Main Responsabilities: {respons}</p>
    </div>
  );
}
