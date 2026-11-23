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

  // GitHub Pages deployment config
  url: 'https://zombiebadger0-CT.github.io',
  baseUrl: '/Feral_Cat_Shelters/',
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
      // Project email address, e.g. 'hello@yourdomain.org'
      email: '',
    },
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
