import { useLocale } from '@/lib/locale'
import { useState } from 'react'

export default function Hero() {
  const locale = useLocale()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="mb-6">
      <p>{locale.ABOUT.INTRO}</p>
      <div className="relative inline-block">
        <h2
          className="my-2 font-ralewayMedium text-author text-primary cursor-text"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className={`inline-block transition-all duration-500 ${
            isHovered
              ? 'opacity-0 transform scale-105 translate-z-0'
              : 'opacity-100 transform scale-100 translate-z-10'
          }`}>
            Krishna Damaraju
          </span>
          <span className={`absolute left-0 top-0 inline-block transition-all duration-500 ${
            isHovered
              ? 'opacity-100 transform scale-100 translate-z-10'
              : 'opacity-0 transform scale-95 translate-z-0'
          }`}>
            కృష్ణ దామరాజు
          </span>
        </h2>
      </div>
      <p>{locale.ABOUT.SUMMARY}</p>
    </div>
  )
}
