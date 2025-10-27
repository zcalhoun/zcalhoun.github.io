import './App.css';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#research', label: 'Research' },
    { href: '#publications', label: 'Publications' },
    { href: '#teaching', label: 'Teaching' },
    { href: '#contact', label: 'Contact' },
];

const researchAreas = [
    {
        title: 'Scalable Gaussian processes',
        description:
            'GPs are perfect models for autocorrelated data, like temperature over space and time. However, they often don\'t scale!',
    },
    {
        title: 'Preferential Sampling',
        description:
            'Statisticians LOVE randomly sampled data, but such data rarely exists. How do make sure statistical methods account for this gap in sampling?',
    },
    {
        title: 'Spatial Causal Inference',
        description:
            'In pursuit of developing precision climate solutions, we can adapt techniques from medicine (i.e., causal inference) to the spatial domain!',
    },
];

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

const courses = [
    {
        code: 'CEE',
        title: 'Air Pollution Engineering',
        term: 'Spring 2025 · Guest Lecturer',
        description:
            'To gain classroom experience, I taught 5 lectures on topics ranging from the adiabatic lapse rate to Gaussian plume equations.',
    },
    {
        code: 'CS 341',
        title: 'Air Pollution Engineering',
        term: 'Spring 2024 · Teaching Assistant',
        description:
            'Conducted office hours, and developed an innovative project to help students use AI to analyze air quality data.',
    },
    {
        code: 'CEE',
        title: 'Data Science & ML for Engineers',
        term: 'Fall 2023 · Teaching Assistant',
        description:
            'Conducted office hours, graded exams, and supported student final projects.',
    },
];

const newsItems = [
    {
        year: '2025',
        text: 'Presented on preferential sampling at JSM 2025 in Nashville, TN.',
    },
    {
        year: '2025',
        text: 'Presented my work on spatiotemporal Gaussian processes at ICUC25.',
    },
    {
        year: '2025',
        text: 'Led 4 undergraduates on a Climate+ 2025 project.',
    },
];

const contact = {
    email: 'zachary.calhoun@duke.edu',
    office: '436 Wilkinson Building, Duke University',
    social: [
        {
            name: 'Scholar',
            label: 'Google Scholar',
            url: 'https://scholar.google.com/citations?user=pyD7kFsAAAAJ&hl=en',
        },
        {
            name: 'GitHub',
            label: 'GitHub',
            url: 'https://github.com/zcalhoun',
        },
        {
            name: 'LinkedIn',
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/zach-calhoun-865856a3/',
        },
        {
            name: 'Bluesky',
            label: 'Bluesky',
            url: 'https://bsky.app/profile/zcalhoun.bsky.social',
        },
    ],
};

function App() {
    return (
        <div className="App">
            <a className="skip-link" href="#main">
                Skip to content
            </a>
            <header className="hero" id="home">
                <div className="container">
                    <div className="hero__top">
                        <div className="brand">
                            <p className="brand__name">Zachary D. Calhoun</p>
                            <p className="brand__role">PhD Candidate · Duke University</p>
                        </div>
                        <nav className="nav" aria-label="Primary navigation">
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href}>
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="hero__content">
                        <figure className="hero__media">
                            <img
                                src={`${process.env.PUBLIC_URL}/headshot.jpg`}
                                alt="Portrait of Zachary D. Calhoun"
                            />
                        </figure>
                        <div className="hero__summary">
                            {/* <p className="hero__eyebrow">AI, Society & Policy Lab</p> */}
                            <h1>Spatial Stats & ML for Heat Adaptation</h1>
                            <p>
                                I am a PhD candidate in Civil & Environmental Engineering at Duke University studying how
                                techniques from data science can better inform climate adaptation. Currently, I am studying
                                how urban heat mitigation can reduce the risks of extreme heat exposure. Methodologically,
                                I am interested in spatial statistics, causal inference, and Bayesian statistics.
                            </p>
                            <div className="hero__actions">
                                <a className="button button--primary" href="#publications">
                                    Latest publications
                                </a>
                                <a className="button button--secondary" href="mailto:zachary.calhoun@duke.edu">
                                    Connect via email
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className="hero__news">
                        <h2>Recent highlights</h2>
                        <ul className="news-list">
                            {newsItems.map((item) => (
                                <li key={`${item.year}-${item.text.slice(0, 12)}`} className="news-item">
                                    <span className="news-item__year">{item.year}</span>
                                    <p>{item.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </header>

            <main id="main">

                <section id="research" className="section section--alt">
                    <div className="container">
                        <div className="section__header">
                            <h2>Research focus</h2>
                        </div>
                        <div className="research-grid">
                            {researchAreas.map((area) => (
                                <article key={area.title} className="research-card">
                                    <h3>{area.title}</h3>
                                    <p>{area.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="publications" className="section">
                    <div className="container">
                        <div className="section__header">
                            <h2>Selected publications</h2>
                            <p>See <a target="_blank" href='https://scholar.google.com/citations?user=pyD7kFsAAAAJ&hl=en'>Google Scholar</a> for the full list.</p>
                        </div>
                        <div className="publication-list">
                            {publications.map((publication) => (
                                <article key={publication.title} className="publication">
                                    <div>
                                        <h3>{publication.title}</h3>
                                        <p className="publication__meta">
                                            {publication.authors} · {publication.venue} ({publication.year})
                                        </p>
                                    </div>
                                    <a
                                        className="publication__link"
                                        href={publication.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View paper
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="teaching" className="section section--alt">
                    <div className="container">
                        <div className="section__header">
                            <h2>Teaching</h2>
                            <p>
                                I am interested in teaching courses on environmental engineering, statistics, and data science.
                            </p>
                        </div>
                        <div className="teaching-grid">
                            {courses.map((course) => (
                                <article key={course.code} className="teaching-card">
                                    <p className="teaching-card__term">{course.term}</p>
                                    <h3>
                                        {course.code} · {course.title}
                                    </h3>
                                    <p>{course.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="section">
                    <div className="container contact">
                        <div className="section__header">
                            <h2>Contact</h2>
                            <p>
                                Whether you are a fellow researcher, community partner, or journalist, I welcome conversations about
                                climate adaptation and data science.
                            </p>
                        </div>
                        <div className="contact__details">
                            <ul>
                                <li>
                                    <span>Email</span>
                                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                </li>
                                <li>
                                    <span>Office</span>
                                    <p>{contact.office}</p>
                                </li>
                            </ul>
                            <div>
                                <h3>Find me online</h3>
                                <ul className="social-links">
                                    {contact.social.map((profile) => (
                                        <li key={profile.name}>
                                            <a href={profile.url} target="_blank" rel="noopener noreferrer">
                                                {profile.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main >

            <footer className="footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} Zachary D. Calhoun. Created with React.</p>
                </div>
            </footer>
        </div >
    );
}

export default App;
