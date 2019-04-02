module.exports = {
  siteTitle: '040code',
  siteDescription: "040 Code - A developers blog",
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
  googleAnalyticsId: '',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'src/assets/gatsby-icon.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerLinks: [
    {
      label: '🏡',
      url: '/',
    },
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/gatsby-starter-morning-dew',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    [
      'Explore',
      {
        label: 'Blog',
        url: '/',
      },
      {
        label: 'About',
        url: '/',
      },
      {
        label: 'Installation',
        url: '/how-to-install',
      },
    ],
    [
      'Follow the author',
      {
        label: 'Github',
        url: 'https://github.com/040code',
        iconClassName: 'fa fa-github',
      },
      {
        label: 'Website',
        url: 'https://040code.github.io',
        iconClassName: 'fa fa-globe',
      },
      {
        label: 'Twitter',
        url: 'https://twitter.com/niekos77',
        iconClassName: 'fa fa-twitter',
      },
    ],
  ],
}
