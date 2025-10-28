import Section from '../components/Section.jsx'
import { teachingTimeline } from '../data/content.js'

function Teaching() {
    return (
        <main className="page-main">
            <header className="page-intro">
                <h1>Teaching</h1>
                <p>
                    I value inclusive, hands-on learning experiences that help students connect climate data to real
                    communities. Here is how I support classrooms at Duke and beyond.
                </p>
            </header>

            <Section title="Courses &amp; Roles">
                <div className="timeline">
                    {teachingTimeline.map((item) => (
                        <article className="timeline__item" key={item.course + item.term}>
                            <header>
                                <h3>{item.course}</h3>
                                <p className="timeline__meta">
                                    {item.term} · {item.role}
                                </p>
                            </header>
                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </Section>
        </main>
    )
}

export default Teaching
