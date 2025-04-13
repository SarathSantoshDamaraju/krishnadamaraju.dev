import BlogPost from '@/components/BlogPost'
import SectionDivider from '@/components/ui/SectionDivider'

export default function RecentPosts({ posts }) {
  return (
    <>
      <SectionDivider>Recent Blogs</SectionDivider>
      <div>
        {posts.map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
