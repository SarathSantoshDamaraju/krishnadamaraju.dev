import BLOG from '@/blog.config'
import Image from 'next/image'

export default function Companies() {
  return (
    <div name="companies" className="mt-4 flex flex-wrap items-center gap-6 transition-all duration-300 group-hover:backdrop-blur-sm group-hover:bg-white/5 dark:group-hover:bg-black/5 rounded-lg">
      {BLOG.companies.map((company) => (
        <div key={company.name} className="relative h-auto w-[100px]">
          <Image
            src={company.logo}
            alt={company.alt}
            width={100}
            height={100}
            className="opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale dark:invert"
            onError={(e) => {
              console.error(`Failed to load image: ${company.logo}`)
              e.target.style.display = 'none'
            }}
          />
        </div>
      ))}
    </div>
  )
}