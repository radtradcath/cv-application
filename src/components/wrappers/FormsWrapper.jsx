export default function FormsWrapper({ disabled, handleEdit, children, handler }) {
  return (
    <form action="">
      {children}
      <button onClick={handler} disabled={disabled}>Confirm</button>
      <button className="edit-button" onClick={handleEdit} disabled={!disabled}>Edit</button>
    </form>
  );
}
