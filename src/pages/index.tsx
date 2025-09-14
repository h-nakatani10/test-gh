import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        {/* この下のdivは不要であれば削除してもOKです */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            チュートリアルを見る ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

// --- ▼▼▼ ここから追加 ▼▼▼ ---

// ドキュメントの情報を配列で定義
const docs = [
  {
    title: '基本設計書',
    description: 'システムのアーキテクチャや機能一覧を定義しています。',
    link: '/docs/01_design', // sidebars.jsで設定したパス
  },
  {
    title: '画面仕様書',
    description: '各画面のレイアウトや表示項目について定義しています。',
    link: '/docs/02_screen_spec',
  },
  {
    title: 'DB設計書',
    description: '使用するテーブルの構造やカラム情報を定義しています。',
    link: '/docs/03_db_spec',
  },
  {
    title: 'API仕様書 (HTML)',
    description: 'Redocで生成されたHTML形式のAPI仕様書です。',
    link: '/api/', // sidebars.jsで設定したパス
  },
];

// ドキュメントカードのコンポーネント
function DocCard({title, description, link}) {
  return (
    <div className={clsx('col col--6 margin-bottom--lg')}>
      <Link to={link} className={clsx('card', styles.docCard)}>
        <div className="card__body">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

// ドキュメント一覧を表示するセクション
function DocumentList() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>ドキュメント一覧</h2>
          </div>
        </div>
        <div className="row">
          {docs.map((doc, idx) => (
            <DocCard key={idx} {...doc} />
          ))}
        </div>
      </div>
    </section>
  );
}
// --- ▲▲▲ ここまで追加 ▲▲▲ ---


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* --- ▼▼▼ ここに追加 ▼▼▼ --- */}
        <DocumentList />
        {/* --- ▲▲▲ ここに追加 ▲▲▲ --- */}
        <HomepageFeatures />
      </main>
    </Layout>
  );
}