export default function ExperienceTemplate({
  company,
  position,
  respons,
  from,
  to,
}) {
  return (
    <div className="experience-template">
      <p>Company: {company}</p>
      <p>Position: {position}</p>
      <p>From: {from}</p>
      <p>To: {to}</p>
      <p>Main Responsabilities: {respons}</p>
    </div>
  );
}
