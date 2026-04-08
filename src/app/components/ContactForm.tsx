"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Contact form submission:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-sage/5 border border-sage/10 p-10 text-center">
        <p className="font-serif text-[22px] text-text-primary">
          Thank you for reaching out.
        </p>
        <p className="mt-3 text-[16px] text-text-secondary">
          We&apos;ll be in touch shortly to schedule your conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-[13px] font-medium text-text-tertiary mb-2 tracking-wide uppercase">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full border-b-2 border-border-light bg-transparent px-0 py-3 text-[16px] text-text-primary placeholder:text-text-tertiary/60 focus:border-sage focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="title" className="block text-[13px] font-medium text-text-tertiary mb-2 tracking-wide uppercase">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            className="w-full border-b-2 border-border-light bg-transparent px-0 py-3 text-[16px] text-text-primary placeholder:text-text-tertiary/60 focus:border-sage focus:outline-none transition-colors"
            placeholder="Your title"
          />
        </div>
      </div>
      <div>
        <label htmlFor="facility" className="block text-[13px] font-medium text-text-tertiary mb-2 tracking-wide uppercase">Facility</label>
        <input
          id="facility"
          type="text"
          name="facility"
          required
          className="w-full border-b-2 border-border-light bg-transparent px-0 py-3 text-[16px] text-text-primary placeholder:text-text-tertiary/60 focus:border-sage focus:outline-none transition-colors"
          placeholder="Facility name"
        />
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-[13px] font-medium text-text-tertiary mb-2 tracking-wide uppercase">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="w-full border-b-2 border-border-light bg-transparent px-0 py-3 text-[16px] text-text-primary placeholder:text-text-tertiary/60 focus:border-sage focus:outline-none transition-colors"
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-[13px] font-medium text-text-tertiary mb-2 tracking-wide uppercase">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full border-b-2 border-border-light bg-transparent px-0 py-3 text-[16px] text-text-primary placeholder:text-text-tertiary/60 focus:border-sage focus:outline-none transition-colors"
            placeholder="you@facility.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-[13px] font-medium text-text-tertiary mb-2 tracking-wide uppercase">Message</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full border-b-2 border-border-light bg-transparent px-0 py-3 text-[16px] text-text-primary placeholder:text-text-tertiary/60 focus:border-sage focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your community..."
        />
      </div>
      <button
        type="submit"
        className="mt-2 self-start rounded-full bg-sage px-8 py-4 text-[15px] font-semibold text-white tracking-wide transition-all hover:bg-sage-light active:scale-[0.98]"
      >
        Send Message
      </button>
    </form>
  );
}
