module.exports = {
  siteTitle: '040code',
  siteDescription: "A developers blog",
  authorName: '040 code',
  twitterUsername: 'niekos77',
  authorAvatar: '',
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: ``,
  siteUrl: 'https://040code.github.io/',
  disqusSiteUrl: 'https://www.disqus.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpg',
  googleAnalyticsId: 'UA-137787150-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 7,
  disqusShortname: '040code',
  headerLinks: [
    {
      label: '🏡 040 blog',
      url: '/',
    },
    {
      label: 'Niek Palm',
      url: '/authors/niek'
    },
    {
      label: 'Maarten Metz',
      url: '/authors/maarten'
    },
    {
      label: 'Jeroen Knoops',
      url: '/authors/jeroen'
    },
    {
      label: 'Stefan van den Oord',
      url: '/authors/stefan'
    }
  ],
  // Footer information (ex: Github, Netlify...)
  footerLinks: [
    [
      '040 code © 2019',
      {
        label: 'Gatsby',
        prefix: 'Buildt with ',
        url: 'https://www.gatsbyjs.org/',
      },
    ],
    [
      'Blog',
      {
        label: 'home',
        prefix: '',
        url: '/',
      },
      {
        label: 'about',
        prefix: '',
        url: '/about',
      },
    ],
    [
      'Source',
      {
        label: 'Github',
        url: 'https://github.com/040code/',
      },
    ],
  ],
}
