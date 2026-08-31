import ContactForm from '../../components/ContactForm';

export const metadata = { title: 'Start a conversation · M Sciences' };

export default function ContactPage() {
  return (
    <section className="band">
      <div className="wrap">
        <div className="eyebrow">Start a conversation</div>
        <h1>
          One site. One defined
          <br />
          water problem.
        </h1>
        <p className="lead" style={{ marginTop: 14 }}>
          The most useful first conversation is about your site, not our product. The more of this
          you can tell us, the more useful our first answer will be.
        </p>
        <div className="grid g2" style={{ marginTop: 34, alignItems: 'start' }}>
          <div>
            <ContactForm />
          </div>
          <div>
            <div style={{ background: 'var(--mineral)', padding: 24 }}>
              <div className="eyebrow">Bring to the first conversation</div>
              <p style={{ fontSize: 15, color: 'var(--slate)' }}>
                Treatment-train diagram · representative water-quality data including the bad days
                · flow and variability · current operating-cost baseline · target discharge or
                reuse endpoint
              </p>
            </div>
            <div style={{ background: 'var(--ink)', color: '#fff', padding: 24, marginTop: 14 }}>
              <div className="eyebrow" style={{ color: 'var(--teal-br)' }}>
                Contact
              </div>
              <p className="ph" style={{ color: 'var(--teal-br)' }}>
                [ EMAIL ]
                <br />
                [ PHONE ]
                <br />
                [ ADDRESS ]
              </p>
              <p style={{ fontSize: 13, color: 'var(--mute)', margin: 0 }}>
                Placeholders — to be supplied by M Sciences before launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
