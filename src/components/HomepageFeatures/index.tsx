import type {ReactNode} from 'react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Access without accounts',
    description:
      'Access apps without username/password or Google federation. Less friction for enterprise flows.',
  },
  {
    title: 'Ultra-fast onboarding',
    description:
      'If you carry issued VCs, a service accepts them in seconds without redoing KYC. Banking, fintech, telco.',
  },
  {
    title: 'Reusable KYC/AML',
    description:
      'KYC from one bank works at another without re-uploading ID or selfie. They verify the proof, not your raw data.',
  },
  {
    title: 'Attribute proofs',
    description:
      'Prove 18+, EU resident, or employee of X without revealing name, address, or ID. Practical privacy.',
  },
  {
    title: 'Verifiable certifications',
    description:
      'Degrees, courses, technical accreditations without fraud. Speeds contracts and hiring.',
  },
  {
    title: 'Identity for IoT',
    description:
      'Each device has its DID. Machine-to-machine auth without central servers.',
  },
  {
    title: 'Service identity',
    description:
      'Services with DIDs proving status, permissions, or audits. Automate B2B without traditional cert chains.',
  },
  {
    title: 'Supply chain',
    description:
      'Producers, shippers, retailers issue VCs. One verifiable link to origin, checks, and certifications.',
  },
  {
    title: 'Health',
    description:
      'Portable medical certificates (vaccines, allergies) shared selectively. Not your whole record on-chain.',
  },
  {
    title: 'Digital government',
    description:
      'Official certificates ready for public or private services, no signed PDFs.',
  },
  {
    title: 'Physical & logical access',
    description:
      'VC passes for buildings, labs, coworkings. Works even offline.',
  },
  {
    title: 'Reputation proofs',
    description:
      'In marketplaces or DAOs, show history without exposing full identity.',
  },
  {
    title: 'Authorship & provenance',
    description:
      'Content signed with a DID and provenance VC to curb deepfakes and plagiarism.',
  },
  {
    title: 'Work interoperability',
    description:
      'Permissions, roles, training as VCs. Switch projects without repetitive onboarding.',
  },
  {
    title: 'Identity for AI agents',
    description:
      'Bots with DIDs and creds on capabilities, limits, and accountable owner. Real traceability.',
  },
  {
    title: 'Smart contracts with ID',
    description:
      'A smart contract requires a verified role or license via VC before execution.',
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
        <span>Use cases</span>
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
