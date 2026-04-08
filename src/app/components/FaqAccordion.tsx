"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Embedded Care?",
    a: "Embedded Care is our model for placing a dedicated, trained care team inside your senior community. We operate as your in-house care provider — our caregivers are on-site, know your residents by name, and are available for both scheduled and on-demand care.",
  },
  {
    q: "What does it cost my facility?",
    a: "Nothing. There is no cost to your facility. We pay you for any office space we use. Residents pay us directly for the care they receive.",
  },
  {
    q: "Who pays for the care?",
    a: "Residents pay Nurses & Company directly. We handle all billing and invoicing. If a resident has long-term care insurance, we help them activate and use their benefits to cover care costs.",
  },
  {
    q: "Can my facility offer care credits or subsidize care?",
    a: "Yes. Some facilities choose to offer care credits or subsidize care as part of their value proposition to residents. This is entirely optional and up to you.",
  },
  {
    q: "What services do you provide?",
    a: "Personal care (bathing, dressing, grooming, toileting), medication reminders, companion care, and mobility assistance. All services are non-medical.",
  },
  {
    q: "Do you provide skilled nursing?",
    a: "No. Our services are non-medical personal care and companion care. If a resident needs skilled nursing, we'll help coordinate with the appropriate provider.",
  },
  {
    q: "Who are the caregivers?",
    a: "Our caregivers are Nurses & Company employees. We recruit, hire, train, and certify them specifically for your facility. They are not temporary or rotating agency staff — they are a dedicated team assigned to your community.",
  },
  {
    q: "What if a caregiver calls out?",
    a: "We handle all scheduling and replacement staffing. If a caregiver is unavailable, we provide a replacement from our trained team. Your facility never needs to manage staffing.",
  },
  {
    q: "Who handles liability and insurance?",
    a: "Nurses & Company carries all insurance and handles all HR and employment. Your facility has zero liability exposure related to our care team.",
  },
  {
    q: "Do you need office space in my building?",
    a: "We prefer a small dedicated office inside your building, but it's not required. If space isn't available, we'll work around it.",
  },
  {
    q: "How do residents sign up for care?",
    a: "We proactively visit every resident to introduce ourselves and explain available services. Residents or their families can request care at any time. We also welcome referrals from your facility staff.",
  },
  {
    q: "How do you build awareness with residents?",
    a: "We conduct individual visits with every resident, welcome visits with every new move-in, and host monthly awareness events in your community. We also provide in-facility marketing materials for common areas.",
  },
  {
    q: "What's the contract term?",
    a: "We ask for an annual partnership commitment. This gives us the stability to invest in training caregivers for your facility and building meaningful relationships with your residents.",
  },
  {
    q: "What if a resident's needs exceed what you offer?",
    a: "If a resident's needs escalate beyond non-medical personal care, we'll work with the resident, their family, and your team to coordinate the appropriate next step — whether that's skilled nursing, hospice, or a transition to a higher level of care.",
  },
  {
    q: "How is this different from an outside agency?",
    a: "Outside agencies send different caregivers who don't know your residents or your community. Embedded Care gives you a consistent, dedicated team that's trained for your facility, on-site during set hours, and available on-demand. They become part of your community.",
  },
  {
    q: "How do I get started?",
    a: "Contact us to schedule an introductory conversation. We'll learn about your facility, understand your residents' needs, and develop a customized Embedded Care plan for your community.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className="border-b border-border-light">
          <button
            type="button"
            className="flex w-full items-start justify-between gap-6 py-6 text-left"
            aria-expanded={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-[17px] font-medium leading-snug text-text-primary">
              {faq.q}
            </span>
            <span className="mt-1 flex-shrink-0 text-sage transition-transform duration-200" style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              openIndex === i ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[16px] leading-relaxed text-text-secondary pr-12">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
