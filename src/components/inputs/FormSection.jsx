export default function FormSection({ title, children, newHandler }) {
  return (
    <div className="form-container">
      <h1>{title}</h1>
      {children}
      {title === "Personal Info" ? (
        ""
      ) : (
        <button className="experience-plus" onClick={newHandler}>
          +
        </button>
      )}
    </div>
  );
}
