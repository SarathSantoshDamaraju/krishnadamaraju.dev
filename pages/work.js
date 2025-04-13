import Container from '@/components/Container'
import { getContent } from '@/lib/notion'
import Work from '@/components/sections/Work'
import EmptyState from '@/components/EmptyState'

export async function getStaticProps() {
  const workItems = await getContent({ type: 'Work' })

  return {
    props: {
      workItems
    },
    revalidate: 1
  }
}

export default function WorkPage({ workItems }) {
  return (
    <Container>
      <div className="relative text-theme-light-text dark:text-theme-dark-text">
        <div className="max-w-3xl mx-auto">
          {workItems.length > 0 ? (
            <Work items={workItems} showDividers={false} showTitle={false} />
          ) : (
            <EmptyState message="No work experience to show" />
          )}
        </div>
      </div>
    </Container>
  )
}
