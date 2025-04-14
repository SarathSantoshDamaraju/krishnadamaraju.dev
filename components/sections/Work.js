import { useConfig } from '@/lib/config'
import { useLocale } from '@/lib/locale'
import useTheme from '@/lib/theme'
import Link from 'next/link'
import Image from 'next/image'
import SectionDivider from '@/components/ui/SectionDivider'
import { cn } from '@/lib/utils'

const getStatusColor = (status) => {

  switch (status[0]) {
    case 'sold':
      return 'bg-green-500/90'
    case 'in-progress':
      return 'bg-blue-500/90'
    case 'archived':
      return 'bg-gray-500/90'
    default:
      return ''
  }
}

export default function Work({ items, showDividers = true, showTitle = true }) {
  const BLOG = useConfig()
  const locale = useLocale()
  const { dark } = useTheme()

  return (
    <>
      {showTitle && <SectionDivider>Work</SectionDivider>}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-12'>
        {items?.map((item) => {
          const content = (
            <>
              {item['work-status'] && (
                <div className={cn(
                  'z-10 absolute top-2 left-2 px-2 py-1 rounded-md text-[10px] sm:text-xs font-medium text-white shadow-lg',
                  getStatusColor(item['work-status'])
                )}>
                  {item['work-status']}
                </div>
              )}
              <Image
                src={item.cover}
                alt={item.title}
                fill
                className="object-cover rounded-lg hover:opacity-50 transition-opacity duration-300"
                onError={(e) => {
                  console.error(`Failed to load image: ${item.cover}`)
                  e.target.style.display = 'none'
                }}
              />
              <div className="border-primary hover:border-2 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg bg-theme-light-bg/90 dark:bg-theme-dark-bg/90">
                <span className="text-xs sm:text-sm font-medium text-theme-light-text dark:text-theme-dark-text px-2 sm:px-3 py-2 text-center break-words max-w-[90%] sm:max-w-[110px]">
                  {item.summary}
                </span>
              </div>
            </>
          )

          return (
            <div key={item.id} className="relative group aspect-square w-full">
              {item['external-url'] ? (
                <Link
                  href={item['external-url']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </Link>
              ) : content}
            </div>
          )
        })}
      </div>
    </>
  )
}
