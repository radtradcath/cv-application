export default function EducationTemplate({
    school,
    area,
    from,
    to,
  }) {
    return (
      <div className="education-template">
        <p>School: {school}</p>
        <p>Area: {area}</p>
        <p>From: {from}</p>
        <p>To: {to}</p>
      </div>
    );
  }