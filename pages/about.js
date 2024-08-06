import BLOG from '@/blog.config'
import Container from '@/components/Container'
import { useLocale } from '@/lib/locale'

const About = () => {
  const locale = useLocale()

  return (
    <Container>
      <div className="relative dark:text-white">
        <p> {locale.ABOUT.INTRO}</p>
        <h2 className="font-ralewayMedium text-author text-primary my-2 hover:underline cursor-text">
          Krishna Damaraju
        </h2>
        <p> {locale.ABOUT.SUMMARY}</p>
        <div className="my-8 border-4 border-night border-solid	p-4 dark:border-white">
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

export default About
