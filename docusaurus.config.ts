import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  trailingSlash: false,
  title: 'DevOps Indonesia',
  tagline: 'Your guide to mastering DevOps!',
  favicon: 'img/favicon.ico',

  // Production site URL
  url: 'https://docs.devops-idn.my.id',
  baseUrl: '/',

  // GitHub deployment config
  organizationName: 'hattamksa', // Your GitHub username
  projectName: 'docs.devops-idn.my.id', // Repo name
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/hattamksa/docs.devops-idn.my.id/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/hattamksa/docs.devops-idn.my.id/edit/main/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DevOps Indonesia',
      logo: {
        alt: 'DevOps IDN Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Tutorial' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'https://github.com/hattamksa/docs.devops-idn.my.id', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{ label: 'Tutorial', to: '/docs/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/devops' },
            { label: 'Discord', href: 'https://discord.gg/devops' },
            { label: 'X (Twitter)', href: 'https://x.com/devopsidn' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'GitHub', href: 'https://github.com/hattamksa/docs.devops-idn.my.id' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevOps Indonesia. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'docker', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
