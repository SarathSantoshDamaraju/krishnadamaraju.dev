import BLOG from '@/blog.config'

const lang = {
  en: {
    NAV: {
      INDEX: 'Blog',
      RSS: 'RSS',
      SEARCH: 'Search',
      ABOUT: 'About',
      BITS: 'Bits',
      WORK: 'Work',
      PROJECTS: 'Projects'
    },
    PAGINATION: {
      PREV: 'Prev',
      NEXT: 'Next'
    },
    POST: {
      BACK: 'Back',
      TOP: 'Top'
    },
    FOOTER: {
      BETA: '⚠️ Still in beta.',
      BUGSREPORT: "Report 🐞's",
      OLDSITE: 'Older Version 📦'
    },
    COMMON: {
      HERE: 'here'
    },
    ABOUT: {
      INTRO: "hi there 🖐️, i'm",
      SUMMARY:
        'A JS dev — with no adjectives attached and works primarily with web technologies.'
    }
  }
}

export const fetchLocaleLang = () => {
  switch (BLOG.lang.toLowerCase()) {
    case 'en':
    case 'en-us':
    default:
      return lang.en
  }
}
