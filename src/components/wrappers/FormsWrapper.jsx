export default function FormsWrapper({
  disabled,
  handleEdit,
  children,
  handler,
}) {
  return (
    <form action="">
      {children}
      <div className="forms-buttons">
        <button
          className="confirm-button"
          onClick={handler}
          disabled={disabled}
        >
          Confirm
        </button>
        <button
          className="edit-button"
          onClick={handleEdit}
          disabled={!disabled}
        >
          Edit
        </button>
      </div>
    </form>
  );
}
