export default function FormSection({ disabled, title, children, newHandler }) {
  return (
    <div className="form-container">
      <h1>{title}</h1>
      {children}
      {title === "Personal Info" ? (
        ""
      ) : (
        <button disabled={disabled} className="experience-plus" onClick={newHandler}>
          +
        </button>
      )}
    </div>
  );
}
