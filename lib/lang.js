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
        'Engineering Manager @ Front-End Platform | Hands-On with Module Federation, Infra & DevX for scalable teams | Coding, Mentoring, Scaling, Debugging.'
    },
    PAGE: {
      ERROR_404: {
        MESSAGE: 'Page not found'
      }
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
