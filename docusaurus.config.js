// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Feral Cat Shelters Central CT',
  tagline: 'Warm, dry winter shelters for the community cats of Central Connecticut',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages deployment config, served at the custom domain.
  // The domain itself is also set in static/CNAME and in the repo's Pages settings.
  url: 'https://ctcatshelters.org',
  baseUrl: '/',
  organizationName: 'zombiebadger0-CT',
  projectName: 'Feral_Cat_Shelters',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  customFields: {
    // Contact options shown on the Request a Shelter and Donate Materials pages.
    // Any left empty show as a greyed-out "coming soon" button.
    contact: {
      // Messenger link for the project's Facebook page, e.g. 'https://m.me/yourpagename'
      messengerUrl: '',
      // WhatsApp number with country code, digits only, e.g. '18605551234'
      whatsappNumber: '',
      // Texting number with country code, digits only, e.g. '18605551234'
      textNumber: '',
      // General project email. Also the fallback for "no hub near you / not sure".
      email: 'info@ctcatshelters.org',
    },
    // Pickup hubs, shown on the Request a Shelter page in this order.
    // To add a hub, copy one entry and change it:
    //   town:   the hub's town (the card heading)
    //   serves: towns this hub covers, e.g. ['Bristol', 'Plainville', 'Southington'].
    //           Leave empty [] to hide the "Serves" line.
    //   email:  the hub's address, named for the town, not the volunteer.
    //           Leave '' to show a greyed-out "coming soon" button.
    // Don't add volunteers' names here: this file is public on GitHub.
    hubs: [
      {
        town: 'Bristol',
        serves: [],
        email: '', // bristol@ctcatshelters.org — turn on when ready for requests
      },
      {
        town: 'Glastonbury',
        serves: [],
        email: '', // glastonbury@ctcatshelters.org — turn on when ready for requests
      },
    ],
    // Amazon wish list link, shown on the Donate Materials page.
    amazonWishlistUrl: '',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/hero-shelter.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Feral Cat Shelters Central CT',
        items: [{to: '/', label: 'Home', position: 'left'}],
      },
      footer: {
        style: 'dark',
        copyright: `© ${new Date().getFullYear()} Feral Cat Shelters Central CT`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
