export default function PreviewSection({title, classTitle, children}) {
    return (
        <div className={classTitle}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}