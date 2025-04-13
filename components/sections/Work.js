import { useConfig } from '@/lib/config'
import { useLocale } from '@/lib/locale'
import useTheme from '@/lib/theme'
import FormattedDate from '@/components/FormattedDate'
import Link from 'next/link'
import SectionDivider from '@/components/ui/SectionDivider'

const getStatusColor = (status) => {
  switch (status) {
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
      <div className={`flex flex-wrap gap-4 ${items?.length === 1 ? 'justify-start' : 'justify-center'} mb-12`}>
        {items?.map((item) => (
          <div key={item.id} className="relative group w-[200px] h-[200px]">
            {item['work-status'] && (
              <div className={`absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-medium text-white shadow-lg ${getStatusColor(item['work-status'])}`}>
                {item['work-status']}
              </div>
            )}
            <img
              src={item.cover}
              alt={item.title}
              className="w-full h-full object-cover rounded-lg opacity-50 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
              onError={(e) => {
                console.error(`Failed to load image: ${item.cover}`);
                e.target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg bg-theme-light-bg/90 dark:bg-theme-dark-bg/90">
              <span className="text-sm font-medium text-theme-light-text dark:text-theme-dark-text px-3 py-2 text-center break-words max-w-[110px]">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
