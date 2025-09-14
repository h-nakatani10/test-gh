import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkPlantuml from 'remark-plantuml';

const config: Config = {
  // サイトの基本情報
  title: 'タスク管理アプリ ドキュメント',
  tagline: '各種仕様書をまとめたサイトです',
  favicon: 'img/favicon.ico',

  // サイトの公開URL
  url: 'https://h-nakatani10.github.io',
  baseUrl: '/test-gh/',

  // ★★★ 修正点1: あなたのGitHubユーザー名に修正
  organizationName: 'h-nakatani10',
  projectName: 'test-gh',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // 日本語サイトであることを明記
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // ★★★ 修正点2: "Edit this page"のリンク先をあなたのリポジトリに修正
          editUrl:
            'https://github.com/h-nakatani10/test-gh/tree/main/',
          remarkPlugins: [remarkPlantuml],
        },
        // ★★★ 修正点3: ブログ機能は使わないので無効化
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'タスク管理アプリ Doc',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      // ★★★ 修正点4: ナビゲーションバーの項目を整理
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '各種仕様書',
        },
        {
          href: 'https://github.com/h-nakatani10/test-gh',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    // ★★★ 修正点5: フッターの内容をシンプルに整理
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ドキュメント',
          items: [
            {
              label: '仕様書一覧',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'その他',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/h-nakatani10/test-gh',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    plugins: [
      [
        '@docusaurus/plugin-client-redirects',
        {
          from: '/', // ルートURL (トップページ) へのアクセスを
          to: '/docs/intro', // 最初のドキュメントページにリダイレクト
        },
      ],
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;