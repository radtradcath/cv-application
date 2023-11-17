export default function Education({ handler, school, area, from, to, id }) {
  return (
    <div className="education input-collection" id={id}>
      <label>
        School:
        <input type="text" name="school" value={school} onChange={handler} />
      </label>

      <label>
        Study area:
        <input type="text" name="area" value={area} onChange={handler} />
      </label>

      <label>
        From:
        <input type="date" name="from" value={from} onChange={handler} />
      </label>

      <label>
        To:
        <input type="date" name="to" value={to} onChange={handler} />
      </label>

      <button className="delete-btn">Remove</button>
    </div>
  );
}
