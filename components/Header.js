import { useConfig } from '@/lib/config'
import { useLocale } from '@/lib/locale'
import useTheme from '@/lib/theme'
import Link from 'next/link'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'

const NavBar = () => {
  const BLOG = useConfig()
  const locale = useLocale()
  const links = [
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.SEARCH, to: '/search', show: true },
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to} target={link.external ? '_blank' : null}>{link.name}</Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

export default function Header ({ navBarTitle, fullWidth }) {
  const BLOG = useConfig()
  const { dark } = useTheme()

  // Favicon

  const resolveFavicon = fallback => !fallback && dark ? '/favicon.dark.png' : '/favicon.png'
  const [favicon, _setFavicon] = useState(resolveFavicon())
  const setFavicon = fallback => _setFavicon(resolveFavicon(fallback))

  useEffect(
    () => setFavicon(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dark]
  )

  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(/** @type {HTMLDivElement} */ undefined)
  const sentinelRef = useRef(/** @type {HTMLDivElement} */ undefined)
  const handler = useCallback(([entry]) => {
    if (useSticky && navRef.current) {
      navRef.current?.classList.toggle('sticky-nav-full', !entry.isIntersecting)
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }, [useSticky])

  useEffect(() => {
    const sentinelEl = sentinelRef.current
    const observer = new window.IntersectionObserver(handler)
    observer.observe(sentinelEl)

    return () => {
      sentinelEl && observer.unobserve(sentinelEl)
    }
  }, [handler, sentinelRef])

  const titleRef = useRef(/** @type {HTMLParagraphElement} */ undefined)

  function handleClickHeader (/** @type {MouseEvent} */ ev) {
    if (![navRef.current, titleRef.current].includes(ev.target)) return

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className="observer-element" ref={sentinelRef}></div>
      <div
        className='flex flex-row items-center justify-between w-full px-10 py-5 m-auto mb-2 sticky-nav group md:mb-12 bg-opacity-60'
        id="sticky-nav"
        ref={navRef}
        onClick={handleClickHeader}
      >
        <div className="flex items-center">
          <Link href="/" aria-label={BLOG.title}>
          <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
        >
          <rect
            id="logo__bg"
            width="40"
            height="40"
            fill="rgba(28,31,36,0)"
          />
          <path
            id="logo__text"
            fill={'#cb734d'}
            data-name="LOGO"
            d="M13.188-13.636q.14,0,.224.266a1.637,1.637,0,0,1,.084.49.771.771,0,0,1-.112.322,4.267,4.267,0,0,1-.28.448q-.168.238-.35.462t-.294.392A51.733,51.733,0,0,1,8.638-6.93,31.277,31.277,0,0,1,4.2-3.192q.784-.42,1.694-.84T7.63-4.774q.826-.322,1.5-.518a4.019,4.019,0,0,1,1.036-.2q.168,0,.392.294a.881.881,0,0,1,.224.462.074.074,0,0,1-.084.084,4.4,4.4,0,0,0-.868.112,11.884,11.884,0,0,0-1.148.308q-.616.2-1.232.434a8.943,8.943,0,0,0-1.12.518A10.394,10.394,0,0,0,9.8-1.106a11.033,11.033,0,0,0,3.78.658,14.458,14.458,0,0,0,3.794-.5,31.6,31.6,0,0,0,3.71-1.26l-.056.28A32.808,32.808,0,0,1,16.8-.392a15.108,15.108,0,0,1-4.116.56A11.288,11.288,0,0,1,8.918-.476,8.551,8.551,0,0,1,5.516-2.8q-.364.2-.756.434t-.9.616q-.5.378-1.12.924T1.316.476q-.2,0-.35-.336A1.385,1.385,0,0,1,.812-.392a.921.921,0,0,1,.056-.28A22.072,22.072,0,0,1,2.9-3.892,39.591,39.591,0,0,1,5.544-7.056Q6.972-8.6,8.512-10.01t3.024-2.59q.112-.084.322-.252t.462-.336q.252-.168.49-.308A.823.823,0,0,1,13.188-13.636ZM4-3.36A29.573,29.573,0,0,0,6.342-5.222Q7.5-6.244,8.582-7.35t2.044-2.282a25.084,25.084,0,0,0,1.722-2.352,52.29,52.29,0,0,0-4.9,4.536A46.7,46.7,0,0,0,4-3.36ZM39.7-2.072a8.773,8.773,0,0,1-1.3.868,12.36,12.36,0,0,1-1.47.686,10.385,10.385,0,0,1-1.512.462,6.594,6.594,0,0,1-1.428.168A3.23,3.23,0,0,1,31.276-1.12,5.216,5.216,0,0,1,30.324-4.4,23.357,23.357,0,0,1,28.35-2.688a17.306,17.306,0,0,1-2.184,1.442,13.018,13.018,0,0,1-2.3,1.008A7.35,7.35,0,0,1,21.588.14a.932.932,0,0,1-.812-.35,1.376,1.376,0,0,1-.252-.826,2.379,2.379,0,0,1,.364-1.3,3.756,3.756,0,0,1,.98-1.022,6.575,6.575,0,0,1,1.414-.77,11.964,11.964,0,0,1,1.666-.532q.868-.21,1.736-.336t1.624-.182h.2a.249.249,0,0,1,.112.028.242.242,0,0,1,.112.2.59.59,0,0,1-.238.434,1.109,1.109,0,0,1-.49.266q-.784.112-1.876.308a14.176,14.176,0,0,0-2.142.56,8.651,8.651,0,0,0-1.89.91,2.665,2.665,0,0,0-1.12,1.33.777.777,0,0,0,.672.308,6.61,6.61,0,0,0,2.38-.462A14.312,14.312,0,0,0,26.39-2.478a18.462,18.462,0,0,0,2.212-1.6q1.05-.882,1.918-1.694a12.113,12.113,0,0,1,1.61-3.948,16.586,16.586,0,0,1,2.758-3.332L35-13.16q.084-.084.112-.084.14,0,.168.21a2.735,2.735,0,0,1,.028.35,4.96,4.96,0,0,1-.42,1.9,13.888,13.888,0,0,1-1.05,2.016,21.512,21.512,0,0,1-1.372,1.946q-.742.938-1.386,1.694a1.573,1.573,0,0,0-.028.308v.28A4.925,4.925,0,0,0,31.29-3a3.892,3.892,0,0,0,.686,1.274A3.384,3.384,0,0,0,33.1-.84,3.464,3.464,0,0,0,34.664-.5a6.9,6.9,0,0,0,2.7-.574,19.724,19.724,0,0,0,2.394-1.19Zm-4.872-10.3a1.106,1.106,0,0,0,.042-.168,1.422,1.422,0,0,0,.014-.224,14.919,14.919,0,0,0-2.2,2.8,11.294,11.294,0,0,0-1.358,3.36A25.338,25.338,0,0,0,33.362-9.3,12.639,12.639,0,0,0,34.832-12.376Z"
            transform="translate(0 26)"
          />
        </svg>
          </Link>
          <HeaderName
            ref={titleRef}

            postTitle={navBarTitle}
            onClick={handleClickHeader}
          />
        </div>
        <NavBar />
      </div>
    </>
  )
}

const HeaderName = forwardRef(function HeaderName ({  postTitle, onClick }, ref) {
if(!postTitle) {
    return null
}

  return (
    <p
      ref={ref}
      className="items-center grid-cols-1 grid-rows-1 ml-2 font-medium text-gray-600 header-name dark:text-gray-300 capture-pointer-events"
      onClick={onClick}
    >
      {postTitle && <span className="col-start-1 row-start-1 post-title">| {postTitle}</span>}
    </p>
  )
})
