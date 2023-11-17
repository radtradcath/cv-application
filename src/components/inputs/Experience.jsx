export default function Experience({
  company,
  position,
  from,
  to,
  responsibility,
  handler,
  id,
}) {
  return (
    <div className="experience input-collection" id={id}>
      <div className="company-flex">
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={company}
            onChange={handler}
          />
        </label>

        <label>
          Position:
          <input
            type="text"
            name="position"
            value={position}
            onChange={handler}
          />
        </label>
      </div>

    
        <label>
          From:
          <input type="date" name="from" value={from} onChange={handler} />
        </label>

        <label>
          To:
          <input type="date" name="to" value={to} onChange={handler} />
        </label>
  

      <label>
        Main Responsability:
        <input
          type="textarea"
          name="responsibility"
          value={responsibility}
          onChange={handler}
        />
      </label>

      <button className="delete-btn">Remove</button>
    </div>
  );
}
