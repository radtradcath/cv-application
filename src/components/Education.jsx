export default function Education({
  handler,
  schoolValue,
  areaValue,
  fromDateSchool,
  toDateSchool,
}) {
  return (
    <>
      <div>
        <label htmlFor="school">School: </label>
        <input
          type="text"
          name="school"
          id="school"
          value={schoolValue}
          onChange={handler}
        />
      </div>

      <div>
        <label htmlFor="area">Study area: </label>
        <input
          type="text"
          name="area"
          id="area"
          value={areaValue}
          onChange={handler}
        />
      </div>

      <div>
        <label htmlFor="date_initial">From: </label>
        <input
          type="date"
          name="date_initial"
          id="date_initial"
          value={fromDateSchool}
          onChange={handler}
        />
      </div>

      <div>
        <label htmlFor="date_final">To: </label>
        <input
          type="date"
          name="date_final"
          id="date_final"
          value={toDateSchool}
          onChange={handler}
        />
      </div>
    </>
  );
}
