const Section = ({ id, title, kicker, children }) => (
    <section id={id} className="section">
        <div className="section__header">
            {kicker && <p className="section__kicker">{kicker}</p>}
            <h2>{title}</h2>
        </div>
        <div className="section__body">{children}</div>
    </section>
)

export default Section
