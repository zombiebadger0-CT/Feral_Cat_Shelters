import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

/**
 * A row of contact buttons. Buttons whose link isn't configured yet in
 * docusaurus.config.js show as greyed-out "coming soon" placeholders.
 *
 * `subject` pre-fills the email subject line.
 */
export default function ContactOptions({subject}) {
  const {siteConfig} = useDocusaurusContext();
  const contact = siteConfig.customFields?.contact ?? {};

  const buttons = [
    {label: 'Message us on Facebook', href: contact.messengerUrl},
    {
      label: 'Message us on WhatsApp',
      href: contact.whatsappNumber && `https://wa.me/${contact.whatsappNumber}`,
    },
    {label: 'Text us', href: contact.textNumber && `sms:+${contact.textNumber}`},
    {
      label: 'Email us',
      href:
        contact.email &&
        `mailto:${contact.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`,
    },
  ];

  return (
    <div className={styles.buttons}>
      {buttons.map(({label, href}) => (
        <LinkButton key={label} label={label} href={href} />
      ))}
    </div>
  );
}

/** A large button, or a greyed-out "coming soon" placeholder when `href` is empty. */
export function LinkButton({label, href}) {
  return href ? (
    <a
      href={href}
      className="button button--primary button--lg"
      {...(href.startsWith('http')
        ? {target: '_blank', rel: 'noopener noreferrer'}
        : {})}>
      {label}
    </a>
  ) : (
    <span
      className={`button button--secondary button--lg ${styles.disabled}`}
      aria-disabled="true">
      {label} <small>(coming soon)</small>
    </span>
  );
}
