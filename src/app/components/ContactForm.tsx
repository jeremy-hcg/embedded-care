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
      <div className="bg-surface-container-lowest p-12 rounded-xl text-center">
        <span className="material-symbols-outlined text-5xl text-secondary mb-4">
          check_circle
        </span>
        <p className="text-2xl font-serif text-primary mb-2">
          Thank you for your interest.
        </p>
        <p className="text-on-surface-variant">
          We&apos;ll be in touch shortly to schedule your consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full bg-surface-container-lowest border-b-2 border-outline-variant/20 px-4 py-3 text-primary rounded-t focus:border-secondary focus:outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="title"
            className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            className="w-full bg-surface-container-lowest border-b-2 border-outline-variant/20 px-4 py-3 text-primary rounded-t focus:border-secondary focus:outline-none transition-colors"
            placeholder="Your title"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="facility"
          className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2"
        >
          Facility Name
        </label>
        <input
          id="facility"
          type="text"
          name="facility"
          required
          className="w-full bg-surface-container-lowest border-b-2 border-outline-variant/20 px-4 py-3 text-primary rounded-t focus:border-secondary focus:outline-none transition-colors"
          placeholder="Facility name"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="w-full bg-surface-container-lowest border-b-2 border-outline-variant/20 px-4 py-3 text-primary rounded-t focus:border-secondary focus:outline-none transition-colors"
            placeholder="(555) 555-5555"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full bg-surface-container-lowest border-b-2 border-outline-variant/20 px-4 py-3 text-primary rounded-t focus:border-secondary focus:outline-none transition-colors"
            placeholder="you@facility.com"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold tracking-widest uppercase text-on-surface-variant mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full bg-surface-container-lowest border-b-2 border-outline-variant/20 px-4 py-3 text-primary rounded-t focus:border-secondary focus:outline-none transition-colors resize-none"
          placeholder="Tell us about your community and what you're looking for..."
        />
      </div>
      <button
        type="submit"
        className="btn-primary-gradient text-on-primary px-10 py-4 rounded-lg font-bold tracking-wide shadow-lg hover:shadow-xl transition-all active:opacity-70"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
