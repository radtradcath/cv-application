export default function PersonalForm({handler, nameValue, emailValue, phoneValue}) { 

  return (
    <>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" value={nameValue} onChange={handler} />
        
      </div>

      <div>
        <label htmlFor="email">E-mail: </label>
        <input type="email" name="email" id="email" value={emailValue} onChange={handler}/>
      </div>

      <div>
        <label htmlFor="phone">Phone: </label>
        <input type="tel" name="phone" id="phone" value={phoneValue} onChange={handler}/>
      </div>
    </>
  );
}
