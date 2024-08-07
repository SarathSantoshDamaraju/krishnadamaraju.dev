import BLOG from '@/blog.config'
import Container from '@/components/Container'
import { useLocale } from '@/lib/locale'

export default function PageAbout () {
  const locale = useLocale()

  return (
    <Container>
      <div className="relative dark:text-white">
        <p> {locale.ABOUT.INTRO}</p>
        <h2 className="my-2 font-ralewayMedium text-author text-primary hover:underline cursor-text">
          Krishna Damaraju
        </h2>
        <p> {locale.ABOUT.SUMMARY}</p>
        <div className="p-4 my-8 border-4 border-solid border-night dark:border-white">
          <span className="text-3xl">🌏</span>
          <ul className="my-2">
            {BLOG.socials.map((each) => (
              <li key={each.name}>
                <a
                  href={each.link}
                  className="hover:underline hover:text-primary"
                  target={'_blank'}
                  rel="noopener noreferrer"
                >
                  {each.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  )
}

