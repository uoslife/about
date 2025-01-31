import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

const config: Config = {
  title: '시대생팀',
  tagline: 'www.uoslife.team',
  favicon: 'img/app_symbol.png',
  url: 'https://www.uoslife.team',
  baseUrl: '/',
  organizationName: 'uoslife',
  projectName: 'about',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/index.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '시대생팀',
      logo: {
        alt: '시대생 로고',
        src: 'img/app_symbol.png',
      },
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'tutorialSidebar',
        //   position: 'left',
        //   label: 'Tutorial',
        // },
        // { to: '/blog', label: 'Blog', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '고객지원',
          items: [
            {
              label: '개인정보처리방침',
              to: '/docs/privacy',
            },
            {
              label: '이용약관',
              to: '/docs/terms',
            },
            {
              label: '카카오채널',
              href: 'https://pf.kakao.com/_gMEHK',
            },
          ],
        },
        {
          title: '서비스',
          items: [
            {
              label: '시대생 iOS',
              href: 'https://apps.apple.com/kr/app/%EC%8B%9C%EB%8C%80%EC%83%9D-%EB%82%B4-%EC%86%90%EC%95%88%EC%9D%98-%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EB%8C%80%ED%95%99%EA%B5%90/id1514073192',
            },
            {
              label: '시대생 Android',
              href: 'https://play.google.com/store/apps/details?id=com.beyondconnect.uoslife&hl=ko',
            },
          ],
        },
        {
          title: '링크',
          items: [
            {
              label: '블로그',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/uoslife',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} 시대생팀, All Rights Reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    async function tailwind() {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwindcss);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
  ],
};

export default config;
