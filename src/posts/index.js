import { Buffer } from 'buffer'
import matter from 'gray-matter'

if (typeof globalThis !== 'undefined' && !globalThis.Buffer) {
    globalThis.Buffer = Buffer
}

const markdownModules = import.meta.glob('./*.md', { eager: true, import: 'default', query: '?raw' })

const parsedPosts = Object.entries(markdownModules)
    .map(([path, raw]) => {
        const { data, content } = matter(raw)
        const slug = path.split('/').pop().replace(/\.md$/u, '')
        const date = data.date ? new Date(data.date) : null

        return {
            slug,
            title: data.title ?? slug,
            excerpt: data.excerpt ?? '',
            date,
            content: content.trim(),
        }
    })
    .filter((post) => post.title && post.date instanceof Date && !Number.isNaN(post.date.valueOf()))
    .sort((a, b) => b.date - a.date)

export function getAllPosts() {
    return parsedPosts.map((post) => ({
        ...post,
        date: post.date.toISOString(),
    }))
}

export function getPostBySlug(slug) {
    const match = parsedPosts.find((post) => post.slug === slug)
    if (!match) {
        return null
    }

    return {
        ...match,
        date: match.date.toISOString(),
    }
}
