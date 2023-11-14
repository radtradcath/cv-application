export default function Experience() {
  return (
    <>
      <div>
        <label htmlFor="company">Company: </label>
        <input type="text" name="company" id="company" />
      </div>

      <div>
        <label htmlFor="position">Position: </label>
        <input type="text" name="position" id="position" />
      </div>

      <div>
        <label htmlFor="date-experience-initial">From: </label>
        <input type="date" name="date-experience-initial" id="date-experience-initial" />
      </div>

      <div>
        <label htmlFor="date-experience-final">To: </label>
        <input type="date" name="date-experience-final" id="date-experience-final" />
      </div>

      <div>
        <label htmlFor="respons">Main Responsability: </label>
        <input type="textarea" name="respons" id="respons" />
      </div>
    </>
  );
}
