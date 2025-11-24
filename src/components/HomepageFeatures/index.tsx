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
      id: 'homepage.features.access.title',
      message: 'Access without accounts',
    }),
    description: translate({
      id: 'homepage.features.access.description',
      message:
        'Access apps without username/password or Google federation. Less friction for enterprise flows.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.onboarding.title',
      message: 'Ultra-fast onboarding',
    }),
    description: translate({
      id: 'homepage.features.onboarding.description',
      message:
        "If you carry issued VCs, a service accepts them in seconds without redoing KYC. Banking, fintech, telco.",
    }),
  },
  {
    title: translate({
      id: 'homepage.features.kyc.title',
      message: 'Reusable KYC/AML',
    }),
    description: translate({
      id: 'homepage.features.kyc.description',
      message:
        'KYC from one bank works at another without re-uploading ID or selfie. They verify the proof, not your raw data.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.attributeProofs.title',
      message: 'Attribute proofs',
    }),
    description: translate({
      id: 'homepage.features.attributeProofs.description',
      message:
        'Prove 18+, EU resident, or employee of X without revealing name, address, or ID. Practical privacy.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.certifications.title',
      message: 'Verifiable certifications',
    }),
    description: translate({
      id: 'homepage.features.certifications.description',
      message:
        'Degrees, courses, technical accreditations without fraud. Speeds contracts and hiring.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.iot.title',
      message: 'Identity for IoT',
    }),
    description: translate({
      id: 'homepage.features.iot.description',
      message: 'Each device has its DID. Machine-to-machine auth without central servers.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.serviceIdentity.title',
      message: 'Service identity',
    }),
    description: translate({
      id: 'homepage.features.serviceIdentity.description',
      message:
        'Services with DIDs proving status, permissions, or audits. Automate B2B without traditional cert chains.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.supplyChain.title',
      message: 'Supply chain',
    }),
    description: translate({
      id: 'homepage.features.supplyChain.description',
      message:
        'Producers, shippers, retailers issue VCs. One verifiable link to origin, checks, and certifications.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.health.title',
      message: 'Health',
    }),
    description: translate({
      id: 'homepage.features.health.description',
      message:
        'Portable medical certificates (vaccines, allergies) shared selectively. Not your whole record on-chain.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.gov.title',
      message: 'Digital government',
    }),
    description: translate({
      id: 'homepage.features.gov.description',
      message: 'Official certificates ready for public or private services, no signed PDFs.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.accessControl.title',
      message: 'Physical & logical access',
    }),
    description: translate({
      id: 'homepage.features.accessControl.description',
      message: 'VC passes for buildings, labs, coworkings. Works even offline.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.reputation.title',
      message: 'Reputation proofs',
    }),
    description: translate({
      id: 'homepage.features.reputation.description',
      message: 'In marketplaces or DAOs, show history without exposing full identity.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.authorship.title',
      message: 'Authorship & provenance',
    }),
    description: translate({
      id: 'homepage.features.authorship.description',
      message: 'Content signed with a DID and provenance VC to curb deepfakes and plagiarism.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.work.title',
      message: 'Work interoperability',
    }),
    description: translate({
      id: 'homepage.features.work.description',
      message: 'Permissions, roles, training as VCs. Switch projects without repetitive onboarding.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.ai.title',
      message: 'Identity for AI agents',
    }),
    description: translate({
      id: 'homepage.features.ai.description',
      message:
        'Bots with DIDs and creds on capabilities, limits, and accountable owner. Real traceability.',
    }),
  },
  {
    title: translate({
      id: 'homepage.features.smartContracts.title',
      message: 'Smart contracts with ID',
    }),
    description: translate({
      id: 'homepage.features.smartContracts.description',
      message: 'A smart contract requires a verified role or license via VC before execution.',
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
