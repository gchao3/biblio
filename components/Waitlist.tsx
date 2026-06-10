"use client";

import { useState } from "react";

/**
 * Waitlist capture. Swap the mailto: handoff for your real endpoint
 * (e.g. a POST to /api/waitlist wired to your CRM) when ready.
 */
export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    window.location.href = `mailto:engineering@wonderly.info?subject=${encodeURIComponent(
      "Biblio waitlist"
    )}&body=${encodeURIComponent(
      `Please add ${email} to the Biblio waitlist.`
    )}`;
    setDone(true);
  }

  if (done) {
    return (
      <p className="waitlist-done">
        ✓ Thanks — we&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form className="waitlist-form" onSubmit={submit}>
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Work email"
      />
      <button type="submit" className="btn btn-primary btn-lg">
        Join the waitlist
      </button>
    </form>
  );
}
