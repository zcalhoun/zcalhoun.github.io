import { Link } from 'react-router-dom'
import Section from '../components/Section.jsx'
import headshot from '../assets/headshot.jpg'
import cv from '../assets/calhoun-cv.pdf'
import { newsItems } from '../data/content.js'

function Home() {
    return (
        <>
            <header className="hero" id="top">
                <div className="hero__body">
                    <div className="hero__media">
                        <figure className="headshot">
                            <div className="headshot__frame">
                                <img src={headshot} alt="Portrait of Zachary D. Calhoun" />
                            </div>
                            <figcaption>Zachary D. Calhoun</figcaption>
                        </figure>
                    </div>

                    <div className="hero__intro">
                        <p className="hero__eyebrow">
                            PhD Candidate · Civil & Environmental Engineering, Duke University
                        </p>
                        <h1>Spatial Stats &amp; ML for Heat Adaptation</h1>
                        <p className="hero__lead">
                            I am a PhD candidate in Civil & Environmental Engineering at Duke University studying how
                            techniques from data science can better inform climate adaptation. Currently, I am studying
                            how urban heat mitigation can reduce the risks of extreme heat exposure. Methodologically,
                            I am interested in spatial statistics, causal inference, and Bayesian statistics.
                        </p>
                        <div className="hero__actions">
                            <Link className="button button--primary" to="/contact">
                                Let&apos;s collaborate
                            </Link>
                            <a className="button button--ghost" href={cv}>
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <main className="page-main">
                <Section id="news" title="Recent Updates">
                    <ul className="news-list">
                        {newsItems.map((item) => (
                            <li key={item.date}>
                                <span className="news-list__date">{item.date}</span>
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </Section>
            </main>
        </>
    )
}

export default Home
