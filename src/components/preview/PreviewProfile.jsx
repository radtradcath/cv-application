export default function PreviewProfile({name, phone, email}) {
    return (
        <div className="personal-p">
            <h1 className="name-p">{name}</h1>            
            <h3 className="email-p">{email}</h3>
            <h3 className="phone-p">{phone}</h3>
        </div>
    )
}