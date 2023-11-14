export default function Education() {
  return (
    <>
      <div>
        <label htmlFor="school">School: </label>
        <input type="text" name="school" id="school" />
      </div>

      <div>
        <label htmlFor="area">Study area: </label>
        <input type="text" name="area" id="area" />
      </div>

      <div>
        <label htmlFor="date-initial">From: </label>
        <input type="date" name="date-initial" id="date-initial" />
      </div>

      <div>
        <label htmlFor="date-final">To: </label>
        <input type="date" name="date-final" id="date-final" />
      </div>
    </>
  );
}
