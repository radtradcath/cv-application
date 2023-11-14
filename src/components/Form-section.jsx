export default function FormSection({ title, children, id }) {
  return (
    <div className="form-container" id={id}>
        <h1>{title}</h1>
        <form action="">
          {children}          
        </form>
        <button type='submit' form={id}>Confirm</button>  
        <button className="edit-btn">Edit</button>
    </div>
  );
}
