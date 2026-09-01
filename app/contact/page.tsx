import ContactForm from '../../components/ContactForm';

export const metadata = { title: 'Start a conversation · M Sciences' };

export default function ContactPage() {
  return (
    <section className="py-[clamp(48px,7vw,96px)] bg-[#fbfbf9]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
          Start a conversation
        </div>
        <h1 className="font-serif font-bold text-[clamp(26px,3.2vw,34px)] leading-[1.2]">
          One site. One defined
          <br />
          water problem.
        </h1>
        <p className="font-serif text-[20px] leading-[1.5] text-[#37535e] mt-3.5 max-w-[60ch]">
          The most useful first conversation is about your site, not our product. The more of this
          you can tell us, the more useful our first answer will be.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[34px] items-start">
          {/* Left column – form */}
          <div>
            <ContactForm />
          </div>

          {/* Right column – info boxes */}
          <div>
            <div className="bg-[#eef2f1] p-6">
              <div className="text-[#17787a] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                Bring to the first conversation
              </div>
              <p className="text-[15px] text-[#37535e] m-0">
                Treatment-train diagram · representative water-quality data including the bad days
                · flow and variability · current operating-cost baseline · target discharge or
                reuse endpoint
              </p>
            </div>
            <div className="bg-[#10262e] text-white p-6 mt-3.5">
              <div className="text-[#2fa9a6] font-mono text-[11.5px] tracking-[0.14em] uppercase mb-2.5">
                Contact
              </div>
              <p className="font-mono text-[#2fa9a6] text-[13px]">
                [ EMAIL ]
                <br />
                [ PHONE ]
                <br />
                [ ADDRESS ]
              </p>
              <p className="text-[13px] text-[#a9c6c8] m-0">
                Placeholders — to be supplied by M Sciences before launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}