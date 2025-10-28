import Section from '../components/Section.jsx'

const posts = []

function Blog() {
    return (
        <main className="page-main">
            <header className="page-intro">
                <h1>Blog</h1>
                <p>
                    Notes on spatial statistics, climate adaptation, and mentoring as I navigate life as an environmental
                    data scientist.
                </p>
            </header>

            {posts.length === 0 ? (
                <Section title="Coming Soon">
                    <p>
                        I&apos;m drafting the first set of posts now. Check back soon—or send me a topic suggestion on
                        the contact page.
                    </p>
                </Section>
            ) : (
                <Section title="Latest Posts">
                    <div className="blog-grid">
                        {posts.map((post) => (
                            <article className="card" key={post.slug}>
                                <p className="card__kicker">{post.date}</p>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <a className="publication__link" href={post.url}>
                                    Read post
                                </a>
                            </article>
                        ))}
                    </div>
                </Section>
            )}
        </main>
    )
}

export default Blog
