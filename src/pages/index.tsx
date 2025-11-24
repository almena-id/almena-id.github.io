import type {ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HeroCard(): ReactNode {
  return (
    <div className={styles.heroCard} aria-hidden="true">
      <div className={styles.cardHeader}>
        <span>
          <Translate id="homepage.hero.card.title">Sovereign credential</Translate>
        </span>
        <span className={styles.cardPill}>
          <Translate id="homepage.hero.card.pill">checksum · 0xA1E9</Translate>
        </span>
      </div>
      <div className={styles.idChip}>
        <div className={styles.idRow}>
          <span className={styles.idLabel}>
            <Translate id="homepage.hero.card.idLabel">ID</Translate>
          </span>
          <span>did:alm:0x9c3f...b21a</span>
        </div>
        <div className={styles.idRow}>
          <span className={styles.idLabel}>
            <Translate id="homepage.hero.card.holderLabel">Holder</Translate>
          </span>
          <span>A. Sovereign</span>
        </div>
        <div className={styles.idRow}>
          <span className={styles.idLabel}>
            <Translate id="homepage.hero.card.reclaimLabel">Reclaim</Translate>
          </span>
          <span>
            <Translate id="homepage.hero.card.reclaimValue">T+30s · multi-sig</Translate>
          </span>
        </div>
      </div>
      <div className={styles.status}>
        <span className={styles.statusDot} />
        <span>
          <Translate id="homepage.hero.card.status">Status: ready to verify</Translate>
        </span>
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
          <Translate id="homepage.hero.title">
            Secure identity that travels with you, not with servers.
          </Translate>
        </h1>
        <p className={styles.subtitle}>
          <Translate id="homepage.hero.subtitle">
            Almena ID removes intermediaries, signs your credentials on-chain, and lets you
            control what you share, when and with whom. Privacy, instant verifications, and
            programmable trust.
          </Translate>
        </p>
        <div className={styles.pill}>
          <Translate id="homepage.hero.pill">
            Zero-Knowledge · Native wallet · Granular control
          </Translate>
        </div>
      </div>
      <HeroCard />
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({
        id: 'homepage.meta.title',
        message: 'Almena ID — Decentralized identity',
      })}
      description={translate({
        id: 'homepage.meta.description',
        message: 'Secure identity that travels with you, not with servers.',
      })}>
      <div className={styles.page}>
        <HomepageHero />
        <main className={styles.main}>
          <HomepageFeatures />
        </main>
      </div>
    </Layout>
  );
}
