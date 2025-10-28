import Section from '../components/Section.jsx'
import { researchProjects, publications } from '../data/content.js'

function Research() {
    return (
        <main className="page-main">
            <header className="page-intro">
                <h1>Research</h1>
                <p>
                    My work focuses on building spatial statistical and machine learning tools that help cities design
                    equitable and effective heat adaptation strategies.
                </p>
            </header>

            <Section title="Current Projects">
                <div className="card-grid">
                    {researchProjects.map((project) => (
                        <article className="card" key={project.title}>
                            {project.type && <p className="card__kicker">{project.type}</p>}
                            <h3>{project.title}</h3>
                            <p>{project.summary}</p>
                            {project.status && <p className="card__meta">{project.status}</p>}
                        </article>
                    ))}
                </div>
            </Section>

            <Section title="Recent Publications">
                <ol className="publication-list">
                    {publications.map((pub) => (
                        <li key={pub.title}>
                            <h3>{pub.title}</h3>
                            <p className="publication__meta">{pub.authors}</p>
                            <p className="publication__meta">{pub.venue}</p>
                            <a className="publication__link" href={pub.link}>
                                Read publication
                            </a>
                        </li>
                    ))}
                </ol>
            </Section>
        </main>
    )
}

export default Research
