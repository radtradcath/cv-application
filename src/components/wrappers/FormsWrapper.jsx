export default function FormsWrapper({ children, handler }) {
  return (
    <form action="">
      {children}
      <button onClick={handler}>Confirm</button>
      <button className="edit-button">Edit</button>
    </form>
  );
}
