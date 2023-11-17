export default function Education({ disabled, handler, school, area, from, to, id, deleteHandler }) {
  return (
    <div className="education input-collection" id={id}>
      <label>
        School:
        <input disabled={disabled} type="text" name="school" value={school} onChange={handler} />
      </label>

      <label>
        Study area:
        <input disabled={disabled} type="text" name="area" value={area} onChange={handler} />
      </label>

      <label>
        From:
        <input disabled={disabled} type="date" name="from" value={from} onChange={handler} />
      </label>

      <label>
        To:
        <input disabled={disabled} type="date" name="to" value={to} onChange={handler} />
      </label>

      <button disabled={disabled} className="delete-btn" onClick={deleteHandler}>Remove</button>
    </div>
  );
}
