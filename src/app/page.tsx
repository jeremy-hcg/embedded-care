import FadeIn from "./components/FadeIn";
import FaqAccordion from "./components/FaqAccordion";
import ContactForm from "./components/ContactForm";

export default function EmbeddedCarePage() {
  return (
    <>
      {/* ───── NAV ───── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border-subtle">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Nurses & Company"
            width={140}
            height={28}
            className="h-6 w-auto"
            src="https://homevisit.nursesandco.com/images/logo-wordmark.png"
          />
          <div className="flex items-center gap-6">
            <a
              href="tel:6367065212"
              className="hidden sm:inline text-[14px] font-medium text-text-secondary hover:text-sage transition-colors"
            >
              (636) 706-5212
            </a>
            <a
              href="#contact"
              className="rounded-full bg-sage px-5 py-2.5 text-[14px] font-semibold text-white tracking-wide transition-all hover:bg-sage-light active:scale-[0.97]"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* ───── HERO ───── */}
      <section className="pt-40 pb-28 sm:pt-48 sm:pb-36 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-6 text-[13px] font-semibold tracking-[0.2em] uppercase text-sage">
              Embedded Care
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-[clamp(36px,5.5vw,64px)] font-medium leading-[1.08] tracking-tight text-text-primary">
              In-house care for your residents.{" "}
              <span className="text-sage">Zero cost to your facility.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-8 max-w-xl text-[19px] leading-[1.7] text-text-secondary">
              We place a trained, certified care team inside your senior community. Your residents get quality care without leaving home. You get a powerful amenity without the cost, staffing, or liability.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="rounded-full bg-sage px-8 py-4 text-[15px] font-semibold text-white tracking-wide transition-all hover:bg-sage-light active:scale-[0.97]"
              >
                Schedule a Conversation
              </a>
              <a
                href="tel:6367065212"
                className="text-[15px] font-medium text-text-secondary hover:text-sage transition-colors"
              >
                (636) 706-5212
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── DIVIDER ───── */}
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="h-px bg-border-light" />
      </div>

      {/* ───── THE PITCH — 3 ZERO STATEMENTS ───── */}
      <section className="py-28 sm:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-16 md:gap-20">
            {[
              {
                bold: "Zero cost to your facility.",
                text: "We pay you for office space. Residents pay us directly for the care they receive. There is no fee to your facility — ever.",
              },
              {
                bold: "Zero liability.",
                text: "We carry all insurance and handle all HR and employment. Our team members are our employees, not yours. Your exposure is zero.",
              },
              {
                bold: "Zero staffing burden.",
                text: "We recruit, hire, train, certify, schedule, and manage every caregiver. If someone calls out, we handle it. You never think about staffing.",
              },
            ].map((item, i) => (
              <FadeIn key={i}>
                <div>
                  <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.15] text-text-primary">
                    {item.bold}
                  </h2>
                  <p className="mt-4 max-w-lg text-[17px] leading-[1.7] text-text-secondary">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── HOW IT WORKS ───── */}
      <section className="bg-warm-white py-28 sm:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-[13px] font-semibold tracking-[0.2em] uppercase text-sage">How it works</p>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.15] text-text-primary">
              A care team that becomes part of your community.
            </h2>
          </FadeIn>
          <div className="mt-16 flex flex-col gap-12">
            {[
              {
                n: "01",
                title: "We embed a dedicated team inside your building.",
                text: "Not an outside agency that shows up when called. A consistent care team that's on-site, knows your residents, and knows your culture.",
              },
              {
                n: "02",
                title: "Caregivers are trained specifically for your community.",
                text: "They learn your building, your expectations, and your residents by name. For larger communities, a dedicated site lead serves as your single point of contact.",
              },
              {
                n: "03",
                title: "We build relationships with every resident.",
                text: "Through individual visits, new move-in welcomes, monthly events, and ongoing presence — so residents know who we are and how to get help.",
              },
              {
                n: "04",
                title: "Care coordination is handled by our HQ.",
                text: "Scheduling, care plans, family communication, quality oversight — all managed by our operations team. Your staff doesn't manage anything.",
              },
            ].map((step, i) => (
              <FadeIn key={i}>
                <div className="flex gap-6 sm:gap-8">
                  <span className="text-[14px] font-semibold text-sage/40 pt-1 flex-shrink-0 w-8">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-[19px] font-semibold leading-snug text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-[1.7] text-text-secondary">
                      {step.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SERVICES ───── */}
      <section className="py-28 sm:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-[13px] font-semibold tracking-[0.2em] uppercase text-sage">Services</p>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.15] text-text-primary">
              Non-medical personal care, on your schedule.
            </h2>
          </FadeIn>
          <FadeIn>
            <ul className="mt-12 flex flex-col gap-5">
              {[
                "Personal care — bathing, grooming, dressing, toileting",
                "Medication reminders",
                "Companion care — conversation, engagement, accompaniment",
                "Mobility assistance — transfers, walking support, fall prevention",
                "Scheduled and on-demand availability",
              ].map((svc, i) => (
                <li key={i} className="flex items-start gap-4 text-[17px] leading-[1.6] text-text-secondary">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage/50" />
                  {svc}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn>
            <p className="mt-10 text-[15px] text-text-tertiary border-l-2 border-sage/20 pl-5">
              All services are non-medical personal care. We do not provide skilled nursing or medical procedures. If a resident needs skilled nursing, we coordinate with the appropriate provider.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───── SERVICE TIERS ───── */}
      <section className="bg-warm-white py-28 sm:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-4 text-[13px] font-semibold tracking-[0.2em] uppercase text-sage">Flexible coverage</p>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.15] text-text-primary mb-16">
              Match the level of presence to your community.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                name: "Pre-Set Hours",
                desc: "Care team on-site during designated AM/PM blocks. Ideal for smaller communities or those just starting to offer in-house care.",
              },
              {
                name: "Extended Hours",
                desc: "Expanded on-site coverage with scheduled and on-demand availability throughout the day. Greater caregiver capacity.",
              },
              {
                name: "24/7 Coverage",
                desc: "Round-the-clock presence. Dedicated site lead. Full scheduled and on-demand services at any hour. For larger communities.",
              },
            ].map((tier, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-2xl border border-border-light bg-cream p-8 sm:p-10 h-full">
                  <h3 className="font-serif text-[22px] font-medium text-text-primary mb-4">
                    {tier.name}
                  </h3>
                  <p className="text-[15px] leading-[1.7] text-text-secondary">
                    {tier.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="mt-8 text-[15px] text-text-tertiary text-center">
              All tiers include on-demand services outside scheduled hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ───── WHAT YOUR FACILITY GETS ───── */}
      <section className="py-28 sm:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-[13px] font-semibold tracking-[0.2em] uppercase text-sage">The value</p>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.15] text-text-primary mb-16">
              What your facility gets.
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-14">
            {[
              {
                bold: "A resident amenity that sells itself.",
                text: "In-house care is the #1 question families ask. With Embedded Care, you can say yes — and mean it. Residents age in place. Families get peace of mind.",
              },
              {
                bold: "Higher resident retention.",
                text: "Residents stay in your community instead of moving to assisted living. Fewer move-outs means stronger occupancy and revenue.",
              },
              {
                bold: "Dedicated caregivers who know your building.",
                text: "Not rotating agency staff. A trained, consistent team that becomes part of your community. They know every resident by name.",
              },
              {
                bold: "Care coordination handled for you.",
                text: "Scheduling, care plans, family communication, quality oversight — all managed by our operations team at headquarters.",
              },
              {
                bold: "Families with peace of mind.",
                text: "When families know care is available on-site, everyone sleeps better. It's the reason they choose — and stay in — your community.",
              },
            ].map((item, i) => (
              <FadeIn key={i}>
                <div>
                  <h3 className="text-[20px] font-semibold leading-snug text-text-primary">
                    {item.bold}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.7] text-text-secondary max-w-xl">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── BUILDING PRESENCE ───── */}
      <section className="bg-warm-white py-28 sm:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-[13px] font-semibold tracking-[0.2em] uppercase text-sage">Community presence</p>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.15] text-text-primary">
              We don&apos;t wait for referrals.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-text-secondary max-w-xl">
              We proactively build relationships with every resident so they know who we are, what we offer, and how to get help.
            </p>
          </FadeIn>
          <FadeIn>
            <ul className="mt-12 flex flex-col gap-5">
              {[
                "Individual visits with every current resident",
                "Welcome visits with every new move-in",
                "Monthly awareness events — wellness workshops, care Q&A, socials",
                "In-facility marketing materials for common areas",
                "Communication plan developed with your leadership",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[17px] leading-[1.6] text-text-secondary">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage/50" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ───── HOW RESIDENTS PAY ───── */}
      <section className="py-28 sm:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-[13px] font-semibold tracking-[0.2em] uppercase text-sage">Simple billing</p>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.15] text-text-primary">
              Your facility is never involved in the transaction.
            </h2>
          </FadeIn>
          <FadeIn>
            <ul className="mt-12 flex flex-col gap-5">
              {[
                "Residents pay Nurses & Company directly",
                "We handle all billing, invoicing, and payment processing",
                "Your facility is never involved in the financial transaction",
                "Optional: offer resident credits or care subsidies as a value-add",
                "We help families discover and activate long-term care insurance benefits",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[17px] leading-[1.6] text-text-secondary">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage/50" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* ───── THE PARTNERSHIP ───── */}
      <section className="bg-warm-white py-28 sm:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <p className="mb-4 text-[13px] font-semibold tracking-[0.2em] uppercase text-sage">The partnership</p>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.15] text-text-primary mb-16">
              A straightforward arrangement.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <FadeIn>
              <div>
                <h3 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-text-tertiary mb-6">What we ask</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "Annual partnership commitment",
                    "Small office or workspace (preferred, not required — we pay rent)",
                    "An introduction to your resident community",
                    "Ongoing collaboration with your leadership team",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-[16px] leading-[1.6] text-text-secondary">
                      <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-tertiary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-[13px] font-semibold tracking-[0.2em] uppercase text-text-tertiary mb-6">What you get</h3>
                <ul className="flex flex-col gap-4">
                  {[
                    "Fully managed in-house care team at zero cost",
                    "Rent payments for office space",
                    "A differentiating resident amenity",
                    "Higher satisfaction, fewer move-outs",
                    "Peace of mind for residents' families",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-[16px] leading-[1.6] text-text-secondary">
                      <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sage/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="py-28 sm:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-[13px] font-semibold tracking-[0.2em] uppercase text-sage">From our partners</p>
          </FadeIn>
          <div className="flex flex-col gap-16 mt-12">
            {[
              {
                quote: "Since partnering with Nurses & Company, our residents have access to care without leaving the community they love. It\u2019s been a game-changer for resident satisfaction.",
                name: "S.M.",
                role: "Executive Director",
              },
              {
                quote: "The Embedded Care team feels like part of our staff. They know every resident by name. Families tell us it\u2019s one of the main reasons they chose our community.",
                name: "J.R.",
                role: "Operations Manager",
              },
              {
                quote: "We were worried about liability and staffing complexity. Nurses & Company handles everything. We get all the benefits with none of the headaches.",
                name: "D.K.",
                role: "Community Owner",
              },
            ].map((t, i) => (
              <FadeIn key={i}>
                <blockquote>
                  <p className="font-serif text-[clamp(22px,2.5vw,28px)] font-normal italic leading-[1.5] text-text-primary">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6 text-[15px] text-text-tertiary">
                    <span className="font-semibold text-text-secondary">{t.name}</span>
                    <span className="mx-2">&mdash;</span>
                    {t.role}
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ───── ABOUT ───── */}
      <section className="bg-warm-white py-28 sm:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-[13px] font-semibold tracking-[0.2em] uppercase text-sage">About</p>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.15] text-text-primary">
              Nurses &amp; Company
            </h2>
            <div className="mt-8 flex flex-col gap-5 text-[17px] leading-[1.7] text-text-secondary max-w-xl">
              <p>
                Private-duty home care agency based in St. Louis, Missouri. Providing quality personal care since 1992. A division of Homecare Group (HCG).
              </p>
              <p>
                Our Embedded Care model was developed through real partnerships with senior living communities in the St. Louis metro — where we&apos;ve seen firsthand how in-house care transforms resident satisfaction and community performance.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="py-28 sm:py-36 px-6 lg:px-10">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <p className="mb-4 text-[13px] font-semibold tracking-[0.2em] uppercase text-sage">FAQ</p>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.15] text-text-primary mb-12">
              Common questions.
            </h2>
          </FadeIn>
          <FadeIn>
            <FaqAccordion />
          </FadeIn>
        </div>
      </section>

      {/* ───── CTA / CONTACT ───── */}
      <section id="contact" className="bg-sage/[0.04] py-28 sm:py-36 px-6 lg:px-10 scroll-mt-16">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="font-serif text-[clamp(28px,3.5vw,42px)] font-medium leading-[1.15] text-text-primary">
              Bring Embedded Care to your community.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.7] text-text-secondary max-w-xl">
              We&apos;d love to learn about your facility. Schedule a conversation — no commitment, no pitch.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="mt-8 mb-12 flex flex-wrap items-center gap-5">
              <a
                href="[CALENDAR LINK]"
                className="rounded-full bg-sage px-8 py-4 text-[15px] font-semibold text-white tracking-wide transition-all hover:bg-sage-light active:scale-[0.97]"
              >
                Schedule a Meeting
              </a>
              <a
                href="tel:6367065212"
                className="text-[15px] font-medium text-text-secondary hover:text-sage transition-colors"
              >
                (636) 706-5212
              </a>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="border-t border-border-light pt-12">
              <p className="mb-8 text-[13px] font-semibold tracking-[0.2em] uppercase text-text-tertiary">
                Or send us a message
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ───── FOOTER ───── */}
      <footer className="border-t border-border-light py-16 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Nurses & Company"
              width={120}
              height={24}
              className="h-5 w-auto mb-3 opacity-70"
              src="https://homevisit.nursesandco.com/images/logo-wordmark.png"
            />
            <p className="text-[13px] text-text-tertiary leading-relaxed">
              St. Louis, MO · Private-duty home care · Since 1992
            </p>
          </div>
          <div className="text-right max-sm:text-left">
            <a href="tel:6367065212" className="text-[14px] font-medium text-text-secondary hover:text-sage transition-colors">
              (636) 706-5212
            </a>
            <p className="mt-1 text-[13px] text-text-tertiary">nursesandco.com</p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-10 pt-8 border-t border-border-subtle">
          <p className="text-[12px] text-text-tertiary">
            &copy; 2026 Nurses &amp; Company. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
