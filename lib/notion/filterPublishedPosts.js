// Post, Bit, Work
export default function filterPublishedPosts({ posts, type = 'Post' }) {
  if (!posts || !posts.length) return []
  return posts
    .filter(post =>post?.type?.[0] === type)
    .filter(post =>
      post.title &&
      post?.status?.[0] === 'Published' &&
      post.date <= new Date()
    )
}
