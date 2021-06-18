/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'AdTech',
  tagline: 'A Commons and Growth Documentation Website',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'go-MMT',
  projectName: 'AdTechDocs', 
  themeConfig: {
    // algolia: {
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: see doc section below
    //   appId: 'YOUR_APP_ID',

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   //... other Algolia params
    // },
    navbar: {
      logo: {
        alt: 'AdTech Logo',
        src: 'img/adTechLogo.png',
      },
      items: [
        {
          // type: 'doc',
          // docId: 'intro',
          to: '/adOrchDocs',
          position: 'left',
          label: 'AdOrch',
        },
        {to: '/adOrchAdmin', label: 'AdOrch-Admin', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'Mode',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
