import FaqAccordion from "./components/FaqAccordion";
import ContactForm from "./components/ContactForm";

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>{name}</span>
  );
}

export default function EmbeddedCarePage() {
  return (
    <>
      {/* ───── Navigation ───── */}
      <nav className="fixed top-0 w-full z-50 bg-[#fcf9f2]/80 backdrop-blur-xl shadow-[0_24px_40px_-15px_rgba(28,28,24,0.04)]">
        <div className="flex justify-between items-center w-full px-8 py-6 max-w-7xl mx-auto">
          <div className="text-2xl font-serif italic text-primary">
            Nurses &amp; Company
          </div>
          <div className="hidden md:flex items-center gap-10">
            <a
              className="text-sm font-semibold tracking-wide text-primary opacity-80 hover:text-secondary transition-colors duration-300"
              href="#how-it-works"
            >
              How It Works
            </a>
            <a
              className="text-sm font-semibold tracking-wide text-primary opacity-80 hover:text-secondary transition-colors duration-300"
              href="#service-tiers"
            >
              Service Tiers
            </a>
            <a
              className="text-sm font-semibold tracking-wide text-primary opacity-80 hover:text-secondary transition-colors duration-300"
              href="#benefits"
            >
              Benefits
            </a>
            <a
              className="text-sm font-semibold tracking-wide text-primary opacity-80 hover:text-secondary transition-colors duration-300"
              href="#faq"
            >
              FAQ
            </a>
          </div>
          <a
            href="#contact"
            className="btn-primary-gradient text-on-primary px-6 py-3 rounded-lg text-sm font-bold tracking-wide shadow-lg hover:shadow-xl transition-all active:opacity-70"
          >
            Schedule a Meeting
          </a>
        </div>
      </nav>

      {/* ───── Hero Section ───── */}
      <header className="relative pt-44 pb-32 px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <span className="inline-block text-secondary font-bold tracking-[0.2em] text-xs mb-6 uppercase">
              Institutional Partnership Program
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-medium leading-[1.1] text-primary mb-8">
              Embedded Care by <br />
              <span className="italic">Nurses and Company</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-xl mb-12">
              In-House Care for Your Residents. <br />
              <span className="font-bold text-primary">
                Zero Cost to Your Facility.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="btn-primary-gradient text-on-primary px-10 py-5 rounded-lg font-bold shadow-2xl hover:scale-[1.02] transition-transform text-center"
              >
                Schedule a Consultation
              </a>
              <a
                href="#service-tiers"
                className="border border-outline-variant/30 text-secondary px-10 py-5 rounded-lg font-bold hover:bg-surface-container transition-colors text-center"
              >
                Explore Tiered Services
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                alt="A professional, compassionate nurse in modern scrubs smiling warmly while talking to an elderly woman in a bright, upscale senior living common area"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn9t7aPozvUzrSQT8NASZu2Uha55iv_Ztu5CuJuwKlMluv6Aam1Q_KP88orbHolpQIc32Yqh1OxLvridH_j8kR-zHEMvd356IZ18yxflFGFxBsP19CijF96mhDyzPGVRaRvkW27A00307QfViQZGpyzDSxGGWW8RWjZ5_S4imuyTAmSGeomhtVnr8KZoMasqlveVt1daFQG5MVzDgtQf7mMDHiKOlmnPOCqJ0hu-eQVSimvRZINmE_t-nSOC5RY5Shd9okeN59qTo"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-8 rounded-lg shadow-xl max-w-[240px] transform -rotate-3 hidden sm:block">
              <p className="text-primary font-serif italic text-lg mb-2">
                &ldquo;A seamless extension of our team.&rdquo;
              </p>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                — Facility Director
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ───── How It Works ───── */}
      <section
        className="py-32 px-8 bg-surface-container-low"
        id="how-it-works"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-4xl font-serif text-primary mb-6 italic">
              The Embedded Care Model
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              We provide a turnkey, in-house care solution that operates as a
              dedicated department within your facility, alleviating operational
              stress while enhancing resident value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon name="groups" className="text-4xl text-secondary mb-6" />
              <h3 className="text-xl font-serif text-primary mb-4">
                Dedicated Teams
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Unlike agency staffing, our caregivers are assigned specifically
                to your community, building deep trust and familiarity with
                residents.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon
                name="handshake"
                className="text-4xl text-secondary mb-6"
              />
              <h3 className="text-xl font-serif text-primary mb-4">
                Leadership Collaboration
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Our clinical directors work hand-in-hand with your executive
                team to ensure care standards exceed institutional expectations.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Icon
                name="clinical_notes"
                className="text-4xl text-secondary mb-6"
              />
              <h3 className="text-xl font-serif text-primary mb-4">
                Integrated Reporting
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                Regular updates and seamless communication channels keep your
                facility informed about resident status without adding to your
                workload.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Service Tiers ───── */}
      <section className="py-32 px-8 bg-surface" id="service-tiers">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-serif text-primary mb-4 italic">
            Tailored Support Frameworks
          </h2>
          <p className="text-on-surface-variant">
            Choose the depth of integration that fits your facility&apos;s
            unique needs.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-end">
          {/* Tier 1 */}
          <div className="bg-surface-container-low p-8 rounded-xl border-t-4 border-secondary/20">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-secondary mb-2">
              Tier 1
            </h3>
            <h4 className="text-2xl font-serif text-primary mb-6">
              Pre-Set Core
            </h4>
            <ul className="space-y-4 mb-8">
              {[
                "Care team on-site during designated AM/PM blocks",
                "Personal care, medication reminders, companion care",
                "Ideal for smaller communities starting in-house care",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Icon
                    name="check_circle"
                    className="text-secondary text-lg flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Tier 3 (Featured) */}
          <div className="bg-primary text-on-primary p-10 rounded-2xl shadow-2xl transform lg:scale-105 relative z-10">
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Full Presence
              </span>
            </div>
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-on-primary-container mb-2">
              Tier 3
            </h3>
            <h4 className="text-3xl font-serif mb-8 italic">
              24/7 Total Care
            </h4>
            <ul className="space-y-6 mb-10">
              {[
                "Round-the-clock care team presence within the facility",
                "Dedicated site lead managing day-to-day operations",
                "Full scheduled and on-demand services at any hour",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <Icon
                    name="verified_user"
                    className="text-secondary-container flex-shrink-0"
                  />
                  <span className="text-sm opacity-90 leading-relaxed font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full bg-secondary text-white py-4 rounded-lg font-bold hover:bg-on-secondary-container transition-colors text-center"
            >
              Get Started
            </a>
          </div>
          {/* Tier 2 */}
          <div className="bg-surface-container-low p-8 rounded-xl border-t-4 border-secondary/20">
            <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-secondary mb-2">
              Tier 2
            </h3>
            <h4 className="text-2xl font-serif text-primary mb-6">
              Extended Support
            </h4>
            <ul className="space-y-4 mb-8">
              {[
                "Expanded on-site coverage throughout the day",
                "Scheduled and on-demand availability",
                "Greater caregiver capacity and service hours",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <Icon
                    name="check_circle"
                    className="text-secondary text-lg flex-shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-center text-sm text-on-surface-variant mt-10 max-w-2xl mx-auto">
          All tiers include on-demand services — if a resident needs help
          outside of scheduled hours, we respond.
        </p>
      </section>

      {/* ───── Facility Benefits ───── */}
      <section className="py-32 px-8 bg-surface-container-low" id="benefits">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-primary mb-16 text-center italic">
            Institutional Competitive Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "diamond",
                title: "Powerful Amenity",
                desc: "In-house care is the #1 question families ask. With Embedded Care, you can answer yes — and mean it. Residents age in place.",
              },
              {
                icon: "payments",
                title: "Zero Cost",
                desc: "No overhead, no implementation fees, and no salary burdens. We pay you for office space. Residents pay only for services they use.",
              },
              {
                icon: "shield_with_heart",
                title: "Zero Liability",
                desc: "Nurses & Company carries all insurance, handles all HR and employment. Your facility has zero liability exposure.",
              },
              {
                icon: "person_off",
                title: "Zero Staffing Burden",
                desc: "We recruit, hire, train, certify, schedule, and manage every caregiver. If someone calls out, we handle the replacement.",
              },
              {
                icon: "badge",
                title: "Dedicated Caregivers",
                desc: "Not random rotating agency staff. A team trained specifically for your facility who knows your residents by name.",
              },
              {
                icon: "hub",
                title: "Care Coordination",
                desc: "All scheduling, care plans, family communication, and quality oversight handled by our operations team at headquarters.",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="group bg-surface-container-lowest p-8 rounded-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg mb-6 group-hover:bg-secondary/20 transition-colors">
                  <Icon name={b.icon} className="text-secondary" />
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">
                  {b.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Services Provided ───── */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif text-primary mb-8 italic">
              Services We Provide
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              All services are non-medical personal care and companion care. We
              do not provide skilled nursing or medical procedures.
            </p>
            <p className="text-sm text-on-surface-variant italic">
              If a resident needs skilled nursing, we&apos;ll help coordinate
              with the appropriate provider.
            </p>
          </div>
          <div className="md:w-2/3 space-y-4">
            {[
              {
                title: "Personal Care",
                desc: "Bathing, grooming, dressing, toileting, and hygiene assistance",
              },
              {
                title: "Medication Reminders",
                desc: "Ensuring residents take medications on schedule",
              },
              {
                title: "Companion Care",
                desc: "Conversation, engagement, accompaniment to meals and activities",
              },
              {
                title: "Mobility Assistance",
                desc: "Transfers, walking support, fall prevention, and positioning",
              },
              {
                title: "Scheduled & On-Demand",
                desc: "Available when residents need care — regular daily schedule or unexpected needs",
              },
            ].map((svc, i) => (
              <div
                key={i}
                className={`${
                  i % 2 === 0
                    ? "bg-surface-container"
                    : "bg-surface-container-low"
                } p-6 rounded-lg flex items-center gap-6`}
              >
                <Icon
                  name="check_circle"
                  className="text-secondary text-xl flex-shrink-0"
                />
                <div>
                  <h4 className="font-bold text-primary">{svc.title}</h4>
                  <p className="text-sm text-on-surface-variant">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Ongoing Presence Plan ───── */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-serif text-primary mb-8 italic">
              The Ongoing Presence Plan
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              We don&apos;t just staff; we integrate. Our presence plan ensures
              we are a visible, valuable asset to your community from day one.
            </p>
            <div className="mt-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="rounded-xl shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
                alt="A professional care coordinator talking to a resident's family"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAonkO2XBWdxoGtiCTYbcL8uXOXL4BWumHr_3YicLtGtzr3-gysHMySy2JWeDkU4vrzjiHF7xqh5eqi4rymIdiYakQIUsuABWNb8jfNPt6klB2G44gnkT33w_owP-NTT9S-TaPg9N4mTzZ1O-B2yhVsreB7cjTM_XED0uc6iVgC5_XdUiUSBWjtKrrmFF6LJ6JTX-yEzLTzINNxHrfvJQQ7CjxOHddSOCX8xjd_TxIy5hT-tkQH1d25930MKHswk9Y6L3x5H4AWf70"
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-4">
            {[
              {
                n: "01",
                title: "Individual Resident Visits",
                desc: "Personalized introductions with every resident to understand their needs and let them know care is available.",
              },
              {
                n: "02",
                title: "New Resident Welcome Visits",
                desc: "Every new move-in receives a personal visit so they know about in-house care from day one.",
              },
              {
                n: "03",
                title: "Monthly Awareness Events",
                desc: "Wellness workshops, care Q&A sessions, and meet-the-team socials to build trust with residents and families.",
              },
              {
                n: "04",
                title: "In-Facility Marketing Materials",
                desc: "Professional brochures, flyers, and signage for common areas so families always know how to access care.",
              },
              {
                n: "05",
                title: "Ongoing Communication Plan",
                desc: "Regular executive briefs on care activity, resident feedback, and emerging community needs.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`${
                  i % 2 === 0
                    ? "bg-surface-container"
                    : "bg-surface-container-low"
                } p-6 rounded-lg flex items-center gap-6`}
              >
                <span className="text-secondary font-serif text-2xl font-bold flex-shrink-0">
                  {step.n}
                </span>
                <div>
                  <h4 className="font-bold text-primary">{step.title}</h4>
                  <p className="text-sm text-on-surface-variant">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── How Residents Pay ───── */}
      <section className="py-32 px-8 bg-primary-container text-on-primary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif italic mb-8">
              Transparent Financials for Residents
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <Icon
                  name="account_balance_wallet"
                  className="text-secondary-container flex-shrink-0"
                />
                <p className="text-lg opacity-90">
                  Residents are billed directly for the services they utilize.
                  Your facility is never involved in the financial transaction.
                </p>
              </div>
              <div className="flex gap-4">
                <Icon
                  name="volunteer_activism"
                  className="text-secondary-container flex-shrink-0"
                />
                <p className="text-lg opacity-90">
                  We provide expert LTCI assistance, helping families discover,
                  activate, and use existing long-term care insurance policies to
                  cover the cost of care.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-surface p-12 rounded-2xl">
            <h3 className="text-2xl font-serif text-primary mb-6">
              Payment Options
            </h3>
            <div className="space-y-4">
              {[
                "LTCI Reimbursement",
                "Direct Private Pay",
                "Benefit Claims Support",
                "Optional Facility Care Credits",
              ].map((opt, i) => (
                <div
                  key={i}
                  className="p-4 bg-surface-container-low rounded flex justify-between items-center"
                >
                  <span className="text-on-surface font-semibold">{opt}</span>
                  <Icon name="check" className="text-secondary" />
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-on-surface-variant italic">
              Note: Facility management is never involved in financial
              transactions between residents and Nurses &amp; Company.
            </p>
          </div>
        </div>
      </section>

      {/* ───── The Partnership ───── */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-primary mb-16 text-center">
            The Partnership Balance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/20 rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-white p-12 sm:p-16">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-secondary mb-8">
                What We Ask
              </h3>
              <ul className="space-y-6">
                {[
                  "Annual partnership commitment",
                  "Designated workspace within the facility (we pay rent)",
                  "Introduction to your resident community",
                  "Regular leadership check-in participation",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                    <span className="text-primary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary p-12 sm:p-16 text-on-primary">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-on-primary-container mb-8">
                What You Get
              </h3>
              <ul className="space-y-6">
                {[
                  {
                    icon: "trending_up",
                    text: "Increased resident satisfaction & retention",
                  },
                  {
                    icon: "verified",
                    text: "Fully managed in-house care at zero cost",
                  },
                  {
                    icon: "remove_circle",
                    text: "Eliminated operational overhead for care services",
                  },
                  {
                    icon: "family_restroom",
                    text: "Peace of mind for residents' families",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-center">
                    <Icon
                      name={item.icon}
                      className="text-secondary-container flex-shrink-0"
                    />
                    <span className="font-medium">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="py-32 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-primary mb-16 text-center italic">
            What Our Partners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Since partnering with Nurses & Company, our residents have access to care without leaving the community they love. It\u2019s been a game-changer for resident satisfaction and family peace of mind.",
                name: "S.M.",
                role: "Executive Director",
              },
              {
                quote:
                  "The Embedded Care team feels like part of our staff. They know every resident by name, they\u2019re here every day, and families tell us it\u2019s one of the main reasons they chose our community.",
                name: "J.R.",
                role: "Operations Manager",
              },
              {
                quote:
                  "We were worried about liability and staffing complexity. Nurses & Company handles everything \u2014 insurance, HR, scheduling. We get all the benefits of in-house care with none of the headaches.",
                name: "D.K.",
                role: "Community Owner",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-surface-container-lowest p-10 rounded-xl"
              >
                <Icon
                  name="format_quote"
                  className="text-4xl text-secondary/30 mb-4"
                />
                <p className="font-serif italic text-primary leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-primary text-sm">{t.name}</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── About ───── */}
      <section className="py-32 px-8 bg-surface">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-2xl shadow-2xl"
              alt="Heritage of professional care — nurses and facility"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoqGfSyj2drXWaevTKHGEeJi9T_HV3eKIDS2MQqIOqInH-cpSC3UVq00qLpkt414DSMEfNFM8BDgxHRPDUf0KveSTlSe9PcgXkJPpdbjp_2SOOIZH1c53e7Hs4sMAXtl-xfPlsSEw38UwLk8sT_eFN3LOQwLsRAieMEQGdIiZGnF0s6LOQrNXBe-mwnt5jDRrYfM6A4JCGK32r7eCC49B1otRMj69Hoojfs8EflwY4TP6mXHP26KdYmv3f0doZ_XYogGanxQnO_VE"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-serif text-primary mb-8 italic">
              A Heritage of Professional Care
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
              Established in 1992, Nurses &amp; Company is a private-duty home
              care agency based in St. Louis, Missouri. As a division of
              Homecare Group (HCG), we bring the stability of a large
              organization with the personalized touch of a local provider. Our
              Embedded Care model was developed through real partnerships with
              senior living communities in the STL metro.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-serif text-secondary font-bold">
                  1992
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mt-2">
                  Established
                </p>
              </div>
              <div>
                <p className="text-4xl font-serif text-secondary font-bold">
                  30+
                </p>
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mt-2">
                  Years of Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-32 px-8 bg-surface-container-low" id="faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif text-primary mb-12 text-center italic">
            Frequently Asked Questions
          </h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ───── Contact / CTA ───── */}
      <section className="py-32 px-8 bg-surface" id="contact">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 italic">
              Bring Embedded Care to Your Community
            </h2>
            <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
              Schedule a consultation — we&apos;ll tour your facility,
              understand your residents&apos; needs, and develop a customized
              Embedded Care plan.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="[CALENDAR LINK]"
                className="btn-primary-gradient text-on-primary px-10 py-5 rounded-lg font-bold shadow-2xl hover:scale-[1.02] transition-transform"
              >
                Schedule a Meeting
              </a>
              <a
                href="tel:6367065212"
                className="text-secondary font-bold text-lg hover:text-on-secondary-container transition-colors"
              >
                (636) 706-5212
              </a>
            </div>
          </div>
          <div className="bg-surface-container-low p-10 sm:p-16 rounded-2xl">
            <h3 className="text-2xl font-serif text-primary mb-8">
              Or send us a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="w-full bg-surface-container-low rounded-t-lg">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full px-12 py-20 max-w-7xl mx-auto">
          <div className="space-y-6 max-w-sm">
            <div className="text-xl font-serif text-primary">
              Nurses &amp; Company
            </div>
            <p className="text-sm font-serif italic text-on-surface-variant">
              Providing high-end hospitality and clinical excellence for senior
              living partners since 1992.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="btn-primary-gradient text-on-primary px-8 py-4 rounded-lg font-bold text-sm tracking-wide shadow-lg transition-all duration-300 inline-block"
              >
                Schedule a Meeting
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-4">
              <h5 className="font-bold text-primary">Partnership</h5>
              <nav className="flex flex-col gap-2">
                <a
                  className="text-sm text-on-surface-variant hover:text-secondary transition-colors"
                  href="#how-it-works"
                >
                  How It Works
                </a>
                <a
                  className="text-sm text-on-surface-variant hover:text-secondary transition-colors"
                  href="#service-tiers"
                >
                  Service Tiers
                </a>
                <a
                  className="text-sm text-on-surface-variant hover:text-secondary transition-colors"
                  href="#benefits"
                >
                  Benefits
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-primary">Contact</h5>
              <nav className="flex flex-col gap-2">
                <a
                  className="text-sm text-on-surface-variant hover:text-secondary transition-colors"
                  href="tel:6367065212"
                >
                  (636) 706-5212
                </a>
                <span className="text-sm text-on-surface-variant">
                  nursesandco.com
                </span>
                <span className="text-sm text-on-surface-variant">
                  St. Louis, MO
                </span>
              </nav>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-12 py-8 border-t border-outline-variant/10">
          <p className="text-xs text-on-surface-variant text-center md:text-left">
            &copy; 2026 Nurses &amp; Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
