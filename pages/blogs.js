import { clientConfig } from '@/lib/server/config'
import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import Pagination from '@/components/Pagination'
import { getContent } from '@/lib/notion'
import EmptyState from '@/components/EmptyState'

export async function getStaticProps() {
  const posts = await getContent({ type: 'Post' })
  const postsToShow = posts.slice(0, clientConfig.postsPerPage)
  const totalPosts = posts.length
  const showNext = totalPosts > clientConfig.postsPerPage
  return {
    props: {
      page: 1,
      postsToShow,
      showNext
    },
    revalidate: 1
  }
}

export default function Blogs({ postsToShow, page, showNext }) {
  return (
    <Container>
      {postsToShow.length > 0 ? (
        <>
          {postsToShow.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
          {showNext && <Pagination page={page} showNext={showNext} />}
        </>
      ) : (
        <EmptyState message="No blog posts to show" />
      )}
    </Container>
  )
}
