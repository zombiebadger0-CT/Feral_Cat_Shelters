import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const heroImage = useBaseUrl('/img/hero-shelter.png');
  return (
    <header
      className={styles.hero}
      style={{backgroundImage: `url(${heroImage})`}}>
      <div className={styles.heroOverlay}>
        <div className="container">
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        </div>
      </div>
    </header>
  );
}

const highlights = [
  {
    title: 'Request a Shelter',
    body: 'Caring for a colony or a single outdoor cat? Tell us what you need and we’ll set aside shelters for you to pick up.',
    to: '/request-a-shelter',
    cta: 'Request a shelter →',
  },
  {
    title: 'Donate shelter materials',
    body: 'Our shelters are built from everyday materials you might already have lying around: storage totes, foam insulation boards, and straw. Your extras can keep a cat warm this winter.',
    to: '/donate-materials',
    cta: 'Donate materials →',
  },
  {
    title: 'Getting them where they’re needed',
    body: 'We work to place shelters with colony caretakers and neighbors across Central CT who look after community cats.',
  },
];

function HighlightCard({title, body, to, cta}) {
  const content = (
    <>
      <Heading as="h3">{title}</Heading>
      <p>{body}</p>
      {cta && <span className={styles.cardCta}>{cta}</span>}
    </>
  );
  return to ? (
    <Link to={to} className={`${styles.card} ${styles.cardLink}`}>
      {content}
    </Link>
  ) : (
    <div className={styles.card}>{content}</div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <HomepageHeader />
      <main className={styles.main}>
        <div className="container">
          <section className={styles.intro}>
            <Heading as="h2">Why shelters matter</Heading>
            <p>
              Connecticut winters are hard on outdoor cats. A simple insulated
              shelter keeps them dry, out of the wind, and warm enough to make
              it through the coldest nights.
            </p>
          </section>
          <div className="row">
            {highlights.map((item) => (
              <div key={item.title} className="col col--4">
                <HighlightCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
