import Section from '../components/Section.jsx'

function Contact() {
    return (
        <main className="page-main">
            <header className="page-intro">
                <h1>Contact</h1>
                <p>Reach out if you would like to collaborate or chat about spatial statistics and climate adaptation.</p>
            </header>

            <Section title="Get in touch">
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
    )
}

export default Contact
