import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ContactOptions, {LinkButton} from '@site/src/components/ContactOptions';
import styles from './request-a-shelter.module.css';

export default function DonateMaterials() {
  const {siteConfig} = useDocusaurusContext();
  const wishlistUrl = siteConfig.customFields?.amazonWishlistUrl;

  return (
    <Layout
      title="Donate Materials"
      description="Donate storage totes, foam insulation, straw, and other materials for feral cat shelters in Central CT.">
      <main className={styles.page}>
        <div className="container">
          <div className={styles.wrapper}>
            <Heading as="h1">Donate Materials</Heading>
            <p className={styles.lead}>
              Our shelters are built from everyday materials like storage
              totes, foam insulation boards, and straw. Have some to donate?
              Send us a message and we’ll arrange a pickup or drop-off.
            </p>

            <section className={styles.card}>
              <Heading as="h2">Please include</Heading>
              <ul>
                <li>Your name and town</li>
                <li>What materials you have to donate</li>
                <li>A photo or two, if you can</li>
              </ul>
            </section>

            <section className={styles.card}>
              <Heading as="h2">Send us a message</Heading>
              <ContactOptions subject="Materials donation" />
            </section>

            <section className={styles.card}>
              <Heading as="h2">Prefer to buy new?</Heading>
              <p>
                Our wish list has the supplies we use most, shipped straight
                to us.
              </p>
              <LinkButton label="View our Amazon wish list" href={wishlistUrl} />
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
