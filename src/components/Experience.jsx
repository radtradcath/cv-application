export default function Experience({
  companyValue,
  positionValue,
  fromDate,
  toDate,
  responsabilityValue,
  handler,
}) {
  return (
    <>
      <div>
        <label htmlFor="company">Company: </label>
        <input
          type="text"
          name="company"
          id="company"
          value={companyValue}
          onChange={handler}
        />
      </div>

      <div>
        <label htmlFor="position">Position: </label>
        <input
          type="text"
          name="position"
          id="position"
          value={positionValue}
          onChange={handler}
        />
      </div>

      <div>
        <label htmlFor="date_experience_initial">From: </label>
        <input
          type="date"
          name="date_experience_initial"
          id="date_experience_initial"
          value={fromDate}
          onChange={handler}
        />
      </div>

      <div>
        <label htmlFor="date_experience_final">To: </label>
        <input
          type="date"
          name="date_experience_final"
          id="date_experience_final"
          value={toDate}
          onChange={handler}
        />
      </div>

      <div>
        <label htmlFor="responsability">Main Responsability: </label>
        <input
          type="textarea"
          name="responsability"
          id="responsability"
          value={responsabilityValue}
          onChange={handler}
        />
      </div>
    </>
  );
}
