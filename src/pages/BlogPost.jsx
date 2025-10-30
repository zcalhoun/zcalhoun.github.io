import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { getPostBySlug } from '../posts/index.js'

function BlogPost() {
    const { slug } = useParams()
    const location = useLocation()
    const statePost = location.state?.post

    const post = useMemo(() => {
        if (statePost && statePost.slug === slug) {
            return statePost
        }
        return getPostBySlug(slug)
    }, [slug, statePost])

    if (!post) {
        return <Navigate to="/blog" replace />
    }

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    return (
        <main className="page-main">
            <article className="blog-post">
                <Link className="blog-post__back" to="/blog">
                    ← Back to blog
                </Link>
                <header className="blog-post__header">
                    <p className="blog-post__date">{formattedDate}</p>
                    <h1>{post.title}</h1>
                    {post.excerpt && <p className="blog-post__excerpt">{post.excerpt}</p>}
                </header>
                <div className="blog-post__content">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </article>
        </main>
    )
}

export default BlogPost
