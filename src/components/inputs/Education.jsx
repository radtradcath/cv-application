export default function Education({ handler, school, area, from, to }) {
  return (
    <>
      <div>
        <label>
          School:
          <input type="text" name="school" value={school} onChange={handler} />
        </label>
      </div>

      <div>
        <label>
          Study area:
          <input type="text" name="area" value={area} onChange={handler} />
        </label>
      </div>

      <div>
        <label>
          From:
          <input type="date" name="from" value={from} onChange={handler} />
        </label>
      </div>

      <div>
        <label>
          To:
          <input type="date" name="to" value={to} onChange={handler} />
        </label>
      </div>
    </>
  );
}
