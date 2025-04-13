import { useLocale } from '@/lib/locale'

export default function Hero() {
  const locale = useLocale()

  return (
    <div className="mb-6">
      <p>{locale.ABOUT.INTRO}</p>
      <h2 className="my-2 font-ralewayMedium text-author text-primary hover:underline cursor-text">
        Krishna Damaraju
      </h2>
      <p>{locale.ABOUT.SUMMARY}</p>
    </div>
  )
}
