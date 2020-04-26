var PKG = require('./../package.json')

module.exports = {
  title: 'SpaceForest',
  tagline: 'Static Styles and React components',
  url: 'https://space-forest.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'bdryanovski', // Usually your GitHub org/user name.
  projectName: 'spaceforest', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SpaceForest',
      logo: {
        alt: 'Space Forest',
        src: 'img/logo.svg',
      },
      hideOnScroll: true,
      sidebarCollapsible: true,
      links: [
        {
          to: 'docs/documentation/installation',
          activeBasePath: 'documentation',
          label: 'Documentation',
          position: 'left',
        },
        {
          href: 'https://github.com/bdryanovski/spaceforest',
          label: 'GitHub',
          position: 'right',
        },
      ],
      prism: {
        defaultLanguage: 'javascript',
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting started',
              to: 'docs/documentation/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github Issues',
              href: 'https://github.com/bdryanovski/space-forest/issues',
            },
            {
              label: 'Github Pull-Requests',
              href: 'https://github.com/bdryanovski/space-forest/pulls',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/bdryanovski/space-forest',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/dryanovski',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SpaceForest.  v${PKG.version}`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/bdryanovski/spaceforest/edit/master/docs/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  themes: [
    '@docusaurus/theme-live-codeblock'
  ],
  plugins: ['docusaurus-plugin-sass']
}
