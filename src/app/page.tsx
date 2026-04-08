import FaqAccordion from "./components/FaqAccordion";
import ContactForm from "./components/ContactForm";

/* ───── reusable SVG icons (inline, no deps) ───── */
function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

function ShieldIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function UsersIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function HeartIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
  );
}

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function DollarIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function ClockIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function BuildingIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />
    </svg>
  );
}

export default function EmbeddedCarePage() {
  return (
    <>
      {/* ───── STICKY HEADER ───── */}
      <header className="sticky top-0 z-50 flex h-[44px] items-center justify-between border-b border-white/5 bg-navy-deep px-4 text-[13px] tracking-wide text-white sm:px-7">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="Nurses & Company"
          width={140}
          height={28}
          className="h-[24px] w-auto object-contain max-sm:h-[20px]"
          src="https://homevisit.nursesandco.com/images/logo-wordmark.png"
        />
        {/* Mobile phone */}
        <a href="tel:6367065212" className="flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-gold transition-colors hover:text-gold-light sm:hidden">
          <PhoneIcon className="h-3.5 w-3.5" />
          <span>(636) 706-5212</span>
        </a>
        {/* Desktop phone */}
        <div className="hidden items-center gap-3 sm:flex">
          <a href="tel:6367065212" className="flex items-center gap-1.5 text-[15px] font-semibold tracking-wide text-gold transition-colors hover:text-gold-light">
            <PhoneIcon className="h-3.5 w-3.5" />
            <span>(636) 706-5212</span>
          </a>
          <span className="h-3.5 w-px bg-white/15" />
          <span className="text-[11px] text-white/50">Embedded Care for Senior Communities</span>
        </div>
      </header>

      <div className="min-h-[calc(100vh-44px)]">
        <main className="flex justify-center">
          <div className="w-full max-w-[680px] px-14 py-15 pb-20 max-[960px]:max-w-full max-[960px]:px-6 max-[960px]:pb-[100px] max-[960px]:pt-10">

            {/* ───── HERO ───── */}
            <section>
              <div className="mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-navy">
                Embedded Care · Since 1992
                <span className="inline-block h-px w-8 bg-navy/40" />
              </div>
              <h1 className="mb-6 font-serif text-[clamp(34px,4vw,54px)] font-medium leading-[1.08] tracking-tight text-navy max-sm:text-[30px]">
                In-House Care for Your Residents.{" "}
                <em className="text-gold">Zero Cost to Your Facility.</em>
              </h1>
              <p className="mb-6 max-w-[560px] text-[18px] font-light leading-[1.75] text-text-mid">
                We place a trained, certified care team inside your senior community so you can offer your residents quality in-house care — without the cost, the staffing burden, or the liability.
              </p>
              <a
                href="#contact"
                className="mb-8 flex max-w-[400px] items-center justify-center gap-2 rounded-[10px] bg-gold px-6 py-4 text-[15px] font-bold tracking-wide text-navy transition-all hover:bg-gold-light"
              >
                Schedule an Introductory Meeting
              </a>
              <a href="tel:6367065212" className="mb-11 flex items-center gap-2 text-[15px] font-medium text-navy">
                <PhoneIcon className="h-4 w-4 text-gold" />
                (636) 706-5212
              </a>
            </section>

            {/* ───── TRUST BADGES ───── */}
            <div className="mb-14 grid grid-cols-3 overflow-hidden rounded-[14px] border border-border bg-card shadow-[0_1px_4px_rgba(0,0,0,0.04)] max-sm:grid-cols-1">
              <div className="flex flex-col items-center border-r border-border px-3.5 py-5 text-center max-sm:border-r-0 max-sm:border-b">
                <DollarIcon className="mb-2 h-5 w-5 text-gold" />
                <div className="whitespace-pre-line text-xs font-medium leading-snug text-text-dark">Zero cost{"\n"}to your facility</div>
              </div>
              <div className="flex flex-col items-center border-r border-border px-3.5 py-5 text-center max-sm:border-r-0 max-sm:border-b">
                <ClockIcon className="mb-2 h-5 w-5 text-gold" />
                <div className="whitespace-pre-line text-xs font-medium leading-snug text-text-dark">Trusted partner{"\n"}since 1992</div>
              </div>
              <div className="flex flex-col items-center px-3.5 py-5 text-center">
                <HeartIcon className="mb-2 h-5 w-5 text-gold" />
                <div className="whitespace-pre-line text-xs font-medium leading-snug text-text-dark">Your residents. Our team.{"\n"}Your building.</div>
              </div>
            </div>

            {/* ───── HOW IT WORKS ───── */}
            <section className="mb-14">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-light">How it works</div>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-[34px_38px] shadow-[0_1px_4px_rgba(0,0,0,0.04)] max-sm:p-[22px_18px]">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold to-gold-light" />
                <h2 className="mb-3.5 font-serif text-[25px] font-medium text-navy">Your In-House Care Team</h2>
                <p className="mb-5 text-[15px] font-light leading-[1.8] text-text-mid">
                  Nurses &amp; Company embeds a dedicated care team directly inside your facility. Our caregivers are trained and certified specifically for your community — they know your residents by name, they know your building, and they know your culture.
                </p>
                <div className="flex flex-col">
                  {[
                    { n: "1", title: "We embed a dedicated care team", desc: "directly inside your facility" },
                    { n: "2", title: "Caregivers are trained and certified", desc: "specifically for your community" },
                    { n: "3", title: "We create a presence and communication plan", desc: "tailored to your facility with your leadership" },
                    { n: "4", title: "This is your in-house care team", desc: "operated and managed by Nurses & Company" },
                  ].map((step, i) => (
                    <div key={i} className={`flex items-start gap-3.5 py-3 ${i > 0 ? "border-t border-border" : ""}`}>
                      <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold-dim text-[11px] font-bold text-gold">{step.n}</div>
                      <div className="text-sm font-light leading-relaxed text-text-mid">
                        <strong className="font-medium text-text-dark">{step.title}</strong> — {step.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ───── SERVICES PROVIDED ───── */}
            <section className="mb-14">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-light">Services we provide</div>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Personal Care", "Medication Reminders", "Companion Care", "Mobility Assistance", "Scheduled Services", "On-Demand Services"].map((s) => (
                  <span key={s} className="rounded-full border border-border bg-card px-[18px] py-2.5 text-[14px] font-medium tracking-tight text-text-dark">{s}</span>
                ))}
              </div>
              <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                {[
                  { title: "Personal Care", desc: "Bathing, grooming, dressing, toileting, and hygiene assistance" },
                  { title: "Medication Reminders", desc: "Ensuring residents take medications on schedule" },
                  { title: "Companion Care", desc: "Conversation, engagement, accompaniment to meals and activities" },
                  { title: "Mobility Assistance", desc: "Transfers, walking support, fall prevention, and positioning" },
                  { title: "Scheduled & On-Demand", desc: "Available when your residents need care — regular daily schedule or unexpected needs at 2am" },
                ].map((svc, i) => (
                  <div key={i} className="flex items-start gap-4 border-b border-border px-7 py-5 last:border-b-0">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <div>
                      <div className="mb-0.5 text-[15px] font-semibold text-navy">{svc.title}</div>
                      <div className="text-[14px] font-light leading-relaxed text-text-mid">{svc.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-start gap-3.5 rounded-xl border border-gold/35 bg-gradient-to-br from-[#fff8ee] to-[#fff3e0] p-[18px_22px]">
                <ShieldIcon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                <p className="text-[14.5px] font-light leading-relaxed text-text-dark">
                  <strong className="font-semibold text-navy">Non-medical care only.</strong>{" "}
                  We do not provide skilled nursing or medical procedures. If a resident needs skilled nursing, we&apos;ll help coordinate with the appropriate provider.
                </p>
              </div>
            </section>

            {/* ───── SERVICE TIERS ───── */}
            <section className="mb-14">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-light">Service tiers</div>
              <p className="mb-6 text-[15px] font-light leading-[1.8] text-text-mid">
                Every facility is different. We offer flexible service tiers so you can match the level of care presence to your community&apos;s needs.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    tier: "Tier 1",
                    name: "Pre-Set Hours",
                    desc: "Care team on-site during designated hours — typically morning and evening blocks when residents need the most assistance.",
                    ideal: "Ideal for smaller communities or those just beginning to offer in-house care.",
                  },
                  {
                    tier: "Tier 2",
                    name: "Extended Hours",
                    desc: "Expanded on-site coverage with both scheduled and on-demand availability throughout the day. Includes a broader range of service hours and greater caregiver capacity.",
                    ideal: "",
                  },
                  {
                    tier: "Tier 3",
                    name: "24/7 Coverage",
                    desc: "Round-the-clock care team presence. A dedicated site lead manages day-to-day operations on-site. Full scheduled and on-demand services at any hour.",
                    ideal: "Ideal for larger communities with high care utilization.",
                  },
                ].map((t, i) => (
                  <div key={i} className="relative overflow-hidden rounded-2xl border border-border bg-card p-[28px_32px] shadow-[0_1px_4px_rgba(0,0,0,0.04)] max-sm:p-[22px_18px]">
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold to-gold-light" />
                    <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{t.tier}</div>
                    <h3 className="mb-2 font-serif text-[20px] font-medium text-navy">{t.name}</h3>
                    <p className="text-[14px] font-light leading-relaxed text-text-mid">{t.desc}</p>
                    {t.ideal && <p className="mt-2 text-[13px] font-medium text-text-dark">{t.ideal}</p>}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[14px] font-light text-text-mid">
                All tiers include on-demand services — if a resident needs help outside of scheduled hours, we respond.
              </p>
            </section>

            {/* ───── WHAT YOUR FACILITY GETS ───── */}
            <section className="mb-14">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-light">What your facility gets</div>
              <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                {[
                  {
                    icon: <HeartIcon className="h-5 w-5 text-gold" />,
                    title: "A Powerful Resident Amenity",
                    desc: "In-house care is the #1 question families ask when evaluating senior communities. With Embedded Care, you can answer \"yes\" — and mean it. Residents age in place. Families get peace of mind.",
                  },
                  {
                    icon: <DollarIcon className="h-5 w-5 text-gold" />,
                    title: "Zero Cost",
                    desc: "No fee to your facility. We pay you for office space. Residents pay Nurses & Company directly. Optional resident credits or subsidies at your discretion.",
                  },
                  {
                    icon: <ShieldIcon className="h-5 w-5 text-gold" />,
                    title: "Zero Liability",
                    desc: "We carry all insurance, handle all HR and employment. Zero liability exposure for your facility. Our team members are our employees, not yours.",
                  },
                  {
                    icon: <UsersIcon className="h-5 w-5 text-gold" />,
                    title: "Zero Staffing Burden",
                    desc: "We recruit, hire, train, certify, schedule, and manage every caregiver. If someone calls out, we handle the replacement. You never have to think about staffing.",
                  },
                  {
                    icon: <CheckIcon className="h-5 w-5 text-gold" />,
                    title: "Dedicated, Trained Caregivers",
                    desc: "Not random rotating agency staff. A team trained specifically for your facility who knows your residents by name. Dedicated site lead for larger communities.",
                  },
                  {
                    icon: <BuildingIcon className="h-5 w-5 text-gold" />,
                    title: "Care Coordination from HQ",
                    desc: "All scheduling, care plans, family communication, and quality oversight handled by our operations team. Your staff doesn't need to manage care delivery.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 border-b border-border px-7 py-5 transition-colors last:border-b-0 hover:bg-[#fdfcfb]">
                    <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                    <div>
                      <div className="mb-0.5 text-[15px] font-semibold text-navy">{item.title}</div>
                      <div className="text-[14px] font-light leading-relaxed text-text-mid">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ───── BUILDING RELATIONSHIPS ───── */}
            <section className="mb-14">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-light">Building relationships with your residents</div>
              <p className="mb-6 text-[15px] font-light leading-[1.8] text-text-mid">
                We don&apos;t wait for referrals. We proactively build relationships with every resident in your community so they know who we are, what we offer, and how to get help when they need it.
              </p>
              <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
                {[
                  { title: "Individual Resident Visits", desc: "We visit every resident individually to introduce ourselves, understand their needs, and let them know care is available right inside their building" },
                  { title: "New Resident Welcome Visits", desc: "Every new move-in receives a personal visit from our care team so they know about in-house care from day one" },
                  { title: "Monthly Awareness Events", desc: "Wellness workshops, care Q&A sessions, meet-the-team socials — keeping care top of mind and building trust with residents and families" },
                  { title: "In-Facility Marketing Materials", desc: "Brochures, flyers, and signage for your common areas so residents and visiting family members always know how to access care" },
                  { title: "Ongoing Communication Plan", desc: "A communication cadence with your leadership team so you're always informed about care activity, resident feedback, and emerging needs" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 border-b border-border px-7 py-5 last:border-b-0">
                    <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                    <div>
                      <div className="mb-0.5 text-[15px] font-semibold text-navy">{item.title}</div>
                      <div className="text-[14px] font-light leading-relaxed text-text-mid">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ───── HOW RESIDENTS PAY ───── */}
            <section className="mb-14">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-light">How residents pay</div>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-[34px_38px] shadow-[0_1px_4px_rgba(0,0,0,0.04)] max-sm:p-[22px_18px]">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold to-gold-light" />
                <p className="mb-4 text-[15px] font-light leading-[1.8] text-text-mid">
                  Residents pay Nurses &amp; Company directly for the care services they use. We handle all billing, invoicing, and payment processing. <strong className="font-semibold text-navy">Your facility is never involved in the financial transaction.</strong>
                </p>
                <p className="mb-4 text-[15px] font-light leading-[1.8] text-text-mid">
                  If your facility wants to offer care credits or subsidize care for residents as a value-added amenity, we&apos;ll work with you to set that up. But it&apos;s entirely optional — most facilities offer Embedded Care as a resident-paid benefit at no cost to the community.
                </p>
                <p className="text-[15px] font-light leading-[1.8] text-text-mid">
                  We also assist families with long-term care insurance benefits, helping them discover, activate, and use existing LTCI policies to cover the cost of care.
                </p>
              </div>
            </section>

            {/* ───── THE PARTNERSHIP ───── */}
            <section className="mb-14">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-light">The partnership</div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-[28px_32px] shadow-[0_1px_4px_rgba(0,0,0,0.04)] max-sm:p-[22px_18px]">
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-navy to-navy/70" />
                  <h3 className="mb-4 font-serif text-[20px] font-medium text-navy">What We Ask</h3>
                  <ul className="flex flex-col gap-3">
                    {[
                      "An annual partnership commitment",
                      "A small office or workspace (preferred, not required — we pay rent)",
                      "An introduction to your resident community",
                      "Ongoing collaboration with your leadership team",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[14px] font-light leading-relaxed text-text-mid">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-[28px_32px] shadow-[0_1px_4px_rgba(0,0,0,0.04)] max-sm:p-[22px_18px]">
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold to-gold-light" />
                  <h3 className="mb-4 font-serif text-[20px] font-medium text-navy">What You Get</h3>
                  <ul className="flex flex-col gap-3">
                    {[
                      "A fully managed, in-house care team at zero cost",
                      "Rent payments for any office space provided",
                      "A resident amenity that differentiates your community",
                      "Higher resident satisfaction and retention",
                      "Fewer move-outs to assisted living",
                      "Peace of mind for residents' families",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[14px] font-light leading-relaxed text-text-mid">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* ───── TESTIMONIALS ───── */}
            <section className="mb-14">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-light">What facility partners say</div>
              <div className="flex flex-col gap-4">
                {[
                  {
                    quote: "Since partnering with Nurses & Company, our residents have access to care without leaving the community they love. It\u2019s been a game-changer for resident satisfaction and family peace of mind.",
                    initials: "SM",
                    name: "S.M.",
                    role: "Executive Director",
                  },
                  {
                    quote: "The Embedded Care team feels like part of our staff. They know every resident by name, they\u2019re here every day, and families tell us it\u2019s one of the main reasons they chose our community.",
                    initials: "JR",
                    name: "J.R.",
                    role: "Operations Manager",
                  },
                  {
                    quote: "We were worried about liability and staffing complexity. Nurses & Company handles everything \u2014 insurance, HR, scheduling. We get all the benefits of in-house care with none of the headaches.",
                    initials: "DK",
                    name: "D.K.",
                    role: "Community Owner",
                  },
                ].map((t, i) => (
                  <div key={i} className="relative rounded-[16px] border border-border bg-card px-7 pb-6 pt-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <span className="absolute left-6 top-3 font-serif text-[48px] leading-none text-gold/20" aria-hidden="true">&ldquo;</span>
                    <blockquote className="mb-4 font-serif text-[18px] italic leading-relaxed text-text-dark">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-[12px] font-bold text-gold">
                        {t.initials}
                      </div>
                      <div>
                        <div className="text-[14px] font-semibold text-navy">{t.name}</div>
                        <span className="text-[11px] font-normal text-text-light">{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ───── ABOUT ───── */}
            <section className="mb-14">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-light">About Nurses &amp; Company</div>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-[34px_38px] shadow-[0_1px_4px_rgba(0,0,0,0.04)] max-sm:p-[22px_18px]">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold to-gold-light" />
                <p className="mb-4 text-[15px] font-light leading-[1.8] text-text-mid">
                  Nurses &amp; Company is a private-duty home care agency based in St. Louis, Missouri. We&apos;ve been providing quality personal care since 1992. We are a division of Homecare Group (HCG).
                </p>
                <p className="text-[15px] font-light leading-[1.8] text-text-mid">
                  Our Embedded Care model was developed through our partnerships with senior living communities in the St. Louis metro area, where we&apos;ve seen firsthand how in-house care transforms resident satisfaction and community performance.
                </p>
              </div>
            </section>

            {/* ───── FAQ ───── */}
            <section className="mb-14">
              <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-text-light">Frequently asked questions</div>
              <FaqAccordion />
            </section>

            {/* ───── CTA / CONTACT ───── */}
            <section id="contact" className="mb-14 scroll-mt-16">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-[34px_38px] shadow-[0_1px_4px_rgba(0,0,0,0.04)] max-sm:p-[22px_18px]">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold to-gold-light" />
                <h2 className="mb-3.5 font-serif text-[25px] font-medium text-navy">
                  Bring Embedded Care to Your Community
                </h2>
                <p className="mb-6 text-[15px] font-light leading-[1.8] text-text-mid">
                  Schedule an introductory meeting — we&apos;ll tour your facility, understand your residents&apos; needs, and develop a customized plan.
                </p>
                <div className="mb-6 flex flex-wrap items-center gap-4">
                  <a href="tel:6367065212" className="flex items-center gap-2 text-[15px] font-medium text-navy">
                    <PhoneIcon className="h-4 w-4 text-gold" />
                    (636) 706-5212
                  </a>
                  <a
                    href="[CALENDAR LINK]"
                    className="flex items-center justify-center gap-2 rounded-[10px] bg-gold px-5 py-3 text-[14px] font-bold tracking-wide text-navy transition-all hover:bg-gold-light"
                  >
                    Schedule a Meeting
                  </a>
                </div>
                <div className="border-t border-border pt-6">
                  <p className="mb-4 text-[13px] font-medium text-text-light">Or send us a message:</p>
                  <ContactForm />
                </div>
              </div>
            </section>

            {/* ───── FOOTER ───── */}
            <footer className="border-t border-border pt-10 text-xs leading-[1.9] text-text-light">
              <strong className="text-navy">Nurses &amp; Company</strong>
              <br />
              St. Louis, MO · Private-duty home care · Since 1992
              <br />
              <a href="tel:6367065212" className="font-medium text-gold no-underline">(636) 706-5212</a> · nursesandco.com
              <br /><br />
              <span className="text-[11px] text-text-light">
                &copy; 2026 Nurses &amp; Company. All rights reserved.
              </span>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
