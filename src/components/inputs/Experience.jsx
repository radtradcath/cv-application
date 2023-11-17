export default function Experience({
  company,
  position,
  from,
  to,
  responsibility,
  handler,
  deleteHandler,
  id,
  disabled
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
            disabled={disabled}
          />
        </label>

        <label>
          Position:
          <input
            type="text"
            name="position"
            value={position}
            onChange={handler}
            disabled={disabled}
          />
        </label>
      </div>

    
        <label>
          From:
          <input disabled={disabled} type="date" name="from" value={from} onChange={handler} />
        </label>

        <label>
          To:
          <input disabled={disabled} type="date" name="to" value={to} onChange={handler} />
        </label>
  

      <label>
        Main Responsability:
        <input
          type="textarea"
          name="responsibility"
          value={responsibility}
          onChange={handler}
          disabled={disabled}
        />
      </label>

      <button className="delete-btn" disabled={disabled} onClick={deleteHandler}>Remove</button>
    </div>
  );
}
