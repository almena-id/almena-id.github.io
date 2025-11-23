import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HeroCard(): ReactNode {
  return (
    <div className={styles.heroCard} aria-hidden="true">
      <div className={styles.cardHeader}>
        <span>Sovereign credential</span>
        <span className={styles.cardPill}>checksum · 0xA1E9</span>
      </div>
      <div className={styles.idChip}>
        <div className={styles.idRow}>
          <span className={styles.idLabel}>ID</span>
          <span>did:alm:0x9c3f...b21a</span>
        </div>
        <div className={styles.idRow}>
          <span className={styles.idLabel}>Holder</span>
          <span>A. Sovereign</span>
        </div>
        <div className={styles.idRow}>
          <span className={styles.idLabel}>Reclaim</span>
          <span>T+30s · multi-sig</span>
        </div>
      </div>
      <div className={styles.status}>
        <span className={styles.statusDot} />
        <span>Status: ready to verify</span>
      </div>
    </div>
  );
}

function HomepageHero(): ReactNode {
  const {siteConfig} = useDocusaurusContext();

  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <h1 className={styles.title}>
          Secure identity that travels with you, not with servers.
        </h1>
        <p className={styles.subtitle}>
          Almena ID removes intermediaries, signs your credentials on-chain, and lets you
          control what you share, when and with whom. Privacy, instant verifications, and
          programmable trust.
        </p>
        <div className={styles.pill}>Zero-Knowledge · Native wallet · Granular control</div>
      </div>
      <HeroCard />
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Almena ID — Decentralized identity"
      description="Secure identity that travels with you, not with servers.">
      <div className={styles.page}>
        <HomepageHero />
        <main className={styles.main}>
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}
