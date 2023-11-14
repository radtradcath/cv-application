export default function PersonalForm() {
  return (
    <>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" />
        
      </div>

      <div>
        <label htmlFor="email">E-mail: </label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="phone">Phone: </label>
        <input type="tel" name="phone" id="phone" />
      </div>
    </>
  );
}
