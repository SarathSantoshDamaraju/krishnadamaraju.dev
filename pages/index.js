import Container from '@/components/Container'
import { getContent } from '@/lib/notion'
import Hero from '@/components/sections/Hero'
import Companies from '@/components/sections/Companies'
import Work from '@/components/sections/Work'
import RecentPosts from '@/components/sections/RecentPosts'

export async function getStaticProps() {
  const [postsToShow, workItems] = await Promise.all([
    getContent({ type: 'Post', limit: 2 }),
    getContent({ type: 'Work' })
  ])


  return {
    props: {
      postsToShow,
      workItems
    },
    revalidate: 1
  }
}

export default function PageAbout({ postsToShow, workItems }) {
  return (
    <Container>
      <div className="relative text-theme-light-text dark:text-theme-dark-text">
        <Hero />
        <Companies />
        {postsToShow.length > 0 && <RecentPosts posts={postsToShow} />}
        {workItems.length > 0 && <Work items={workItems} />}
      </div>
    </Container>
  )
}
