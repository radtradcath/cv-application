export default function ProfileForm({
  handler,
  nameValue,
  emailValue,
  phoneValue,
}) {
  return (
    <div className="input-collection">
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          id="name"
          value={nameValue}
          onChange={handler}
        />
      </label>

      <label htmlFor="email">
        E-mail:
        <input
          type="email"
          name="email"
          id="email"
          value={emailValue}
          onChange={handler}
        />
      </label>

      <label htmlFor="phone">
        Phone:
        <input
          type="tel"
          name="phone"
          id="phone"
          value={phoneValue}
          onChange={handler}
        />
      </label>
    </div>
  );
}
