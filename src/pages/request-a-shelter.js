import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import ContactOptions from '@site/src/components/ContactOptions';
import styles from './request-a-shelter.module.css';

export default function RequestAShelter() {
  return (
    <Layout
      title="Request a Shelter"
      description="Request a free winter shelter for the outdoor cats you care for in Central CT.">
      <main className={styles.page}>
        <div className="container">
          <div className={styles.wrapper}>
            <Heading as="h1">Request a Shelter</Heading>
            <p className={styles.lead}>
              Caring for a colony or a single outdoor cat? Send us a message
              and we’ll be in touch to arrange pickup.
            </p>

            <section className={styles.card}>
              <Heading as="h2">Please include</Heading>
              <ul>
                <li>Your name and town</li>
                <li>How many shelters you need (up to 10)</li>
                <li>Where you’d like to pick up: Bristol or Glastonbury</li>
                <li>A little about the colony or cat you’re protecting</li>
              </ul>
              <p className={styles.note}>
                Your information is used only to arrange your shelter pickup.
              </p>
            </section>

            <section className={styles.card}>
              <Heading as="h2">Send us a message</Heading>
              <ContactOptions subject="Shelter request" />
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
