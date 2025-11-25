import type {ReactNode} from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.features.didLogin.title',
      message: 'DID login',
    }),
    description: translate({
      id: 'homepage.features.didLogin.description',
      message:
        'Authentication with your DID keys instead of passwords or third-party OAuth. Works across tenants.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.apiTrust.title',
      message: 'API-to-API trust',
    }),
    description: translate({
      id: 'homepage.features.apiTrust.description',
      message:
        'Backends and services expose a DID, verify counterparty keys, and get mutual authentication without shared secrets.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.deviceIdentity.title',
      message: 'Devices with DIDs',
    }),
    description: translate({
      id: 'homepage.features.deviceIdentity.description',
      message:
        'Each piece of hardware has a DID for signing and receiving commands. Revoke, rotate keys, or quarantine on compromise.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.domainBinding.title',
      message: 'Domain binding',
    }),
    description: translate({
      id: 'homepage.features.domainBinding.description',
      message:
        'Link DIDs to DNS or ENS so users can resolve that they are talking to the real domain or service.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.keyRotation.title',
      message: 'Key rotation & recovery',
    }),
    description: translate({
      id: 'homepage.features.keyRotation.description',
      message:
        'Update DID documents to rotate keys, add guardians, or migrate wallets without breaking existing integrations.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.provenance.title',
      message: 'Signed provenance',
    }),
    description: translate({
      id: 'homepage.features.provenance.description',
      message:
        'Sign data feeds, PDFs, or contracts with a DID so consumers can verify origin and detect tampering.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.messaging.title',
      message: 'Encrypted messaging',
    }),
    description: translate({
      id: 'homepage.features.messaging.description',
      message:
        'Use DID service endpoints (DIDComm) to exchange encrypted, authenticated messages between people, bots, or services.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.allowlists.title',
      message: 'DID allowlists',
    }),
    description: translate({
      id: 'homepage.features.allowlists.description',
      message:
        'Access policies where only approved DIDs can call APIs, read resources, or enter facilities.',
    }),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.section} id="use-cases">
      <div className={styles.sectionTitle}>
        <span className={styles.tagDot} />
        <span>
          <Translate id="homepage.features.sectionTitle">Use cases</Translate>
        </span>
        <span className={styles.line} />
      </div>
      <div className={styles.grid}>
        {FeatureList.map((props) => (
          <Feature key={props.title} {...props} />
        ))}
      </div>
    </section>
  );
}
