import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * このファイルでサイドバーの構造を定義します。
 */
const sidebars: SidebarsConfig = {
  // tutorialSidebarという名前のサイドバーを定義します
  tutorialSidebar: [
    'intro', // docs/intro.md へのリンク
    {
      type: 'category',
      label: '各種仕様書',
      items: [
        '01_design',
        '02_screen_spec',
        '03_db_spec',
        {
          type: 'link',
          label: 'API仕様書 (HTML)',
          href: '/test-gh/api/', // baseUrlを含むパス
        },
      ],
    },
  ],
};

export default sidebars;