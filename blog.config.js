const BLOG = {
  title: "Krishna Damaraju",
  author: "Krishna Damaraju",
  email: "sarathdamaraju@yahoo.com",
  link: "",
  description: "Experiences, Mistakes & Learnings",
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Kolkata', // Your Notion posts' date will be interpreted as this timezone. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'raleway-regular', // ['sans-serif', 'serif']
  primaryColor: "#cb734d",
  primaryLight: "#d0815f",
  lightBackground: '#f8f9fa', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#1c1f24', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2021, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: true,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://og-image-craigary.vercel.app', // The link to generate OG image, don't end with a slash
  socialLink: 'https://twitter.com/krishnadamaraju',
  avatar:
  "https://lh3.googleusercontent.com/ogw/ADea4I7HNclaRfwivBtpXv_GLZlQbO67A0id6w5--1Rjwg=s64-c-mo",
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: '', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: '', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  socials: [
    {
      link: "https://bit.ly/38SXaKO",
      name: "HashNode",
    },
    {
      link: "http://bit.ly/2wPe5Xx",
      name: "Medium",
    },
    {
      link: "http://bit.ly/2Cqd4v2",
      name: "Dev.to",
    },
    {
      link: "http://bit.ly/2MUfVBl",
      name: "Linkedin",
    },
    {
      link: "http://bit.ly/37Q6tVf",
      name: "Product Hunt",
    },
    {
      link: "https://twitter.com/krishnadamaraju",
      name: "Twitter",
    },
    {
      link: "http://bit.ly/2wJgNhc",
      name: "Github",
    },
    {
      link: "http://bit.ly/2NiENlJ",
      name: "npm",
    },
    {
      link: "http://bit.ly/2oM9XEd",
      name: "SO",
    },
  ],
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
