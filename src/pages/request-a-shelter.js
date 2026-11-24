import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import ContactOptions, {LinkButton} from '@site/src/components/ContactOptions';
import styles from './request-a-shelter.module.css';

const SUBJECT = 'Shelter request';

/** One pickup hub. Its details come from `customFields.hubs` in docusaurus.config.js. */
function HubCard({town, serves = [], email}) {
  const href =
    email && `mailto:${email}?subject=${encodeURIComponent(`${SUBJECT}: ${town}`)}`;
  return (
    <li className={styles.hub}>
      <Heading as="h3">{town} hub</Heading>
      {serves.length > 0 && (
        <p className={styles.serves}>
          <strong>Serves:</strong> {serves.join(', ')}
        </p>
      )}
      <LinkButton label={`Email the ${town} hub`} href={href} />
    </li>
  );
}

export default function RequestAShelter() {
  const {siteConfig} = useDocusaurusContext();
  const hubs = siteConfig.customFields?.hubs ?? [];

  return (
    <Layout
      title="Request a Shelter"
      description="Request a free winter shelter for the outdoor cats you care for in Central CT. Find your nearest pickup hub.">
      <main className={styles.page}>
        <div className="container">
          <div className={styles.wrapper}>
            <Heading as="h1">Request a Shelter</Heading>
            <p className={styles.lead}>
              Caring for a colony or a single outdoor cat? Shelters are handed
              out by local volunteers at pickup hubs. Message your nearest hub
              and they’ll arrange a time and place with you.
            </p>

            <section className={styles.card}>
              <Heading as="h2">Please include</Heading>
              <ul>
                <li>Your name and town</li>
                <li>How many shelters you need (up to 10)</li>
                <li>A little about the colony or cat you’re protecting</li>
              </ul>
              <p className={styles.note}>
                Pickups happen at a public spot, shared once your request is
                confirmed. Your information is used only to arrange your
                shelter pickup.
              </p>
            </section>

            <section className={styles.card}>
              <Heading as="h2">Find your nearest pickup hub</Heading>
              <ul className={styles.hubs}>
                {hubs.map((hub) => (
                  <HubCard key={hub.town} {...hub} />
                ))}
              </ul>
            </section>

            <section className={styles.card}>
              <Heading as="h2">No hub near you, or not sure?</Heading>
              <p>
                Send us a message and we’ll point you to the right hub.
              </p>
              <ContactOptions subject={SUBJECT} />
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
