import Section from '../components/Section.jsx'
import { links, textbooks } from '../data/content.js'
function Resources() {
    return (
        <main className="page-main">
            <header className="page-intro">
                <h1>Resources</h1>
                <p>
                    A few links and books I've found helpful.
                </p>
            </header>

            <Section title="Links">
                <div className="card-grid">
                    {links.map((link) => (
                        <article className="card" key={link.title}>
                            <h3><a href={link.link} target="_blank">{link.title}</a></h3>
                            <p>{link.comment}</p>
                        </article>
                    ))}
                </div>
            </Section>

            <Section title="Textbooks">
                <div className="card-grid">
                    {textbooks.map((book) => (
                        <article className="card" key={book.title}>
                            <a href={book.link} target="_blank"><h3 className="publication">{book.title}</h3></a>
                            <p>by {book.authors}</p>
                            <p>{book.comment}</p>
                        </article>
                    ))}
                </div>
            </Section>



        </main >
    )
}


export default Resources