export default function Experience({
  company,
  position,
  from,
  to,
  responsibility,
  handler,
  id
}) {
  return (
    <div className="experience" id={id}>
      <div>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={company}
            onChange={handler}
          />
        </label>
      </div>

      <div>
        <label>Position: </label>
        <input
          type="text"
          name="position"
          value={position}
          onChange={handler}
        />
      </div>

      <div>
        <label>From: </label>
        <input
          type="date"
          name="from"
          value={from}
          onChange={handler}
        />
      </div>

      <div>
        <label>To: </label>
        <input
          type="date"
          name="to"
          value={to}
          onChange={handler}
        />
      </div>

      <div>
        <label>Main Responsability: </label>
        <input
          type="textarea"
          name="responsibility"
          value={responsibility}
          onChange={handler}
        />
      </div>
    </div>
  );
}
