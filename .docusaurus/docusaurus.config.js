export default {
  "title": "AdTech",
  "tagline": "A Commons and Growth Documentation Website",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "go-MMT",
  "projectName": "AdTechDocs",
  "themeConfig": {
    "navbar": {
      "logo": {
        "alt": "AdTech Logo",
        "src": "img/adTechLogo.png"
      },
      "items": [
        {
          "to": "/adOrchDocs",
          "position": "left",
          "label": "AdOrch"
        },
        {
          "to": "/adOrchAdmin",
          "label": "AdOrch-Admin",
          "position": "left"
        },
        {
          "href": "https://github.com/facebook/docusaurus",
          "label": "Mode",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/mmt9183/Desktop/DocusaurusProject/sidebars.js"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/mmt9183/Desktop/DocusaurusProject/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};