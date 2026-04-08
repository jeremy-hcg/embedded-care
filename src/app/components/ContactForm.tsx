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
      <div className="rounded-2xl border border-gold/35 bg-gradient-to-br from-[#fff8ee] to-[#fff3e0] p-8 text-center">
        <p className="text-[18px] font-medium text-navy">
          Thank you for your interest.
        </p>
        <p className="mt-2 text-[15px] font-light text-text-mid">
          We&apos;ll be in touch shortly to schedule your introductory meeting.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="rounded-[10px] border border-border bg-card px-4 py-3.5 text-[14px] font-light text-text-dark placeholder:text-text-light focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
        <input
          type="text"
          name="title"
          placeholder="Your Title"
          className="rounded-[10px] border border-border bg-card px-4 py-3.5 text-[14px] font-light text-text-dark placeholder:text-text-light focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <input
        type="text"
        name="facility"
        placeholder="Facility Name"
        required
        className="rounded-[10px] border border-border bg-card px-4 py-3.5 text-[14px] font-light text-text-dark placeholder:text-text-light focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="rounded-[10px] border border-border bg-card px-4 py-3.5 text-[14px] font-light text-text-dark placeholder:text-text-light focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="rounded-[10px] border border-border bg-card px-4 py-3.5 text-[14px] font-light text-text-dark placeholder:text-text-light focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <textarea
        name="message"
        placeholder="Tell us about your community and what you're looking for..."
        rows={4}
        className="rounded-[10px] border border-border bg-card px-4 py-3.5 text-[14px] font-light text-text-dark placeholder:text-text-light focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold resize-none"
      />
      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-[10px] bg-gold px-6 py-4 text-[15px] font-bold tracking-wide text-navy transition-all hover:bg-gold-light"
      >
        Schedule a Meeting
      </button>
    </form>
  );
}
