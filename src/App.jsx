import './App.css'

const navLinks = [
    { id: 'research', label: 'Research' },
    { id: 'publications', label: 'Publications' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'contact', label: 'Contact' },
]

const researchAreas = [
    'Scalable Gaussian processes',
    'Preferential sampling',
    'Spatial Causal Inference'
]

const researchProjects = [
    {
        title: 'Scalable Gaussian processes',
        summary:
            'GPs are perfect models for autocorrelated data, like temperature over space and time. However, they often don\'t scale!',
    },
    {
        title: 'Preferential Sampling',
        summary:
            'Statisticians LOVE randomly sampled data, but such data rarely exists. How do make sure statistical methods account for this gap in sampling?',
    },
    {
        title: 'Spatial Causal Inference',
        summary:
            'In pursuit of developing precision climate solutions, we can adapt techniques from medicine (i.e., causal inference) to the spatial domain!',
    },
]

const publications = [
    {
        title: 'Scalable and robust Gaussian processes for reanalysis of urban air temperature with crowdsourced meteorological data',
        authors: 'Z. D. Calhoun, M. Bergin, D. Carlson',
        venue: 'Under review at Urban Climate',
        year: 2025,
        link: 'https://eartharxiv.org/repository/view/10601/',
    },
    {
        title: 'Refining citizen climate science: Addressing preferential sampling for improved estimates of urban heat',
        authors: 'Z. D. Calhoun, M. Bergin, D. Carlson',
        venue: 'ES&T Letters',
        year: 2024,
        link: 'https://pubs.acs.org/doi/full/10.1021/acs.estlett.4c00296',
    },
    {
        title: 'Estimating the effects of vegetation and increased albedo on the urban heat island effect with spatial causal inference',
        authors: 'Z. D. Calhoun, F. Willard, C. Ge, C. Rodriguez, M. Bergin, D. Carlson',
        venue: 'Nature Scientific Reports',
        year: 2024,
        link: 'https://www.nature.com/articles/s41598-023-50981-w',
    },
];

const teaching = [
    {
        course: 'Air Pollution Engineering',
        term: 'Spring 2025',
        role: 'Guest Lecturer',
        description:
            'To gain classroom experience, I taught 5 lectures on topics ranging from the adiabatic lapse rate to Gaussian plume equations.',
    },
    {
        course: 'Air Pollution Engineering',
        term: 'Spring 2024',
        role: 'Teaching Assistant',
        description:
            'Conducted office hours, and developed an innovative project to help students use AI to analyze air quality data.',
    },
    {
        course: 'Data Science & ML for Engineers',
        term: 'Fall 2023',
        role: 'Teaching Assistant',
        description:
            'Conducted office hours, graded exams, and supported student final projects.',
    }
];


const news = [
    {
        date: 'July 2025',
        text: 'Presented on preferential sampling at JSM 2025 in Nashville, TN.',
    },
    {
        date: 'August 2025',
        text: 'Presented my work on spatiotemporal Gaussian processes at ICUC25.',
    },
    {
        date: 'Summer 2025',
        text: 'Led 4 undergraduates on a Climate+ 2025 project.',
    },
];

const Section = ({ id, title, kicker, children }) => (
    <section id={id} className="section">
        <div className="section__header">
            {kicker && <p className="section__kicker">{kicker}</p>}
            <h2>{title}</h2>
        </div>
        <div className="section__body">{children}</div>
    </section>
)

function App() {
    return (
        <div className="page">
            <header className="hero" id="top">
                <nav className="nav">
                    <a className="nav__brand" href="#top">
                        Zachary D. Calhoun
                    </a>
                    <ul className="nav__links">
                        {navLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hero__body">
                    <div className="hero__intro">
                        <p className="hero__eyebrow">
                            PhD Candidate · Civil & Environmental Engineering, Duke University
                        </p>
                        <h1>Spatial Stats & ML for Heat Adaptation</h1>
                        <p className="hero__lead">
                            I am a PhD candidate in Civil & Environmental Engineering at Duke University studying how
                            techniques from data science can better inform climate adaptation. Currently, I am studying
                            how urban heat mitigation can reduce the risks of extreme heat exposure. Methodologically,
                            I am interested in spatial statistics, causal inference, and Bayesian statistics.
                        </p>
                        <div className="hero__actions">
                            <a className="button button--primary" href="#contact">
                                Let&apos;s collaborate
                            </a>
                            <a className="button button--ghost" href="/cv.pdf">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <aside className="hero__aside">
                        <div className="info-card">
                            <h3>Research focus</h3>
                            <ul>
                                {researchAreas.map((area) => (
                                    <li key={area}>{area}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="info-card">
                            <h3>Currently</h3>
                            <ul>
                                {news.slice(0, 2).map((item) => (
                                    <li key={item.date}>
                                        <span className="info-card__date">{item.date}</span> {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </header>

            <main>

                <Section
                    id="research"
                    title="Research"
                >
                    <div className="card-grid">
                        {researchProjects.map((project) => (
                            <article className="card" key={project.title}>
                                <p className="card__kicker">{project.type}</p>
                                <h3>{project.title}</h3>
                                <p>{project.summary}</p>
                                <p className="card__meta">{project.status}</p>
                            </article>
                        ))}
                    </div>
                </Section>

                <Section id="publications" title="Sharing What We Learn">
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

                <Section id="teaching" title="Teaching">
                    <div className="timeline">
                        {teaching.map((item) => (
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


                <Section id="news" title="Recent Updates">
                    <ul className="news-list">
                        {news.map((item) => (
                            <li key={item.date}>
                                <span className="news-list__date">{item.date}</span>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section id="contact" kicker="Let's connect" title="Contact">
                    <div className="contact-grid">
                        <div className="contact-card">
                            <h3>Email</h3>
                            <a href="mailto:zachary.calhoun@duke.edu">zachary.calhoun@duke.edu</a>
                        </div>
                        <div className="contact-card">
                            <h3>Office</h3>
                            <p>Room 436, Wilkinson Building</p>
                            <p>Duke University · Durham, NC</p>
                        </div>
                        <div className="contact-card">
                            <h3>Online</h3>
                            <ul>
                                <li>
                                    <a
                                        href="https://scholar.google.com/citations?user=pyD7kFsAAAAJ&hl=en"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Google Scholar
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/zcalhoun" target="_blank" rel="noreferrer">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/zach-calhoun-865856a3/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://bsky.app/profile/zcalhoun.bsky.social"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Bluesky
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Section>
            </main>

            <footer className="footer">
                <p>© {new Date().getFullYear()} Zachary D. Calhoun. Vibe-coded using Codex.</p>
            </footer>
        </div>
    )
}

export default App
