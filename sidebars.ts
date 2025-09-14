import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '各種仕様書',
      items: [
        'design',        // ★修正: 「01_」を削除
        'screen_spec',   // ★修正: 「02_」を削除
        'db_spec',       // ★修正: 「03_」を削除
        {
          type: 'link',
          label: 'API仕様書 (HTML)',
          href: '/test-gh/api/',
        },
      ],
    },
  ],
};

export default sidebars;