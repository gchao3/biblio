"use client";

import { useState } from "react";

type Shot = {
  src: string;
  step: string;
  title: string;
  caption: string;
};

const shots: Shot[] = [
  {
    src: "/screenshots/review-1-facets.png",
    step: "Reviewed",
    title: "Every PR, reviewed by facet",
    caption:
      "One managed comment, broken out by the review agents you configured — logic, tests, technique, performance, app-specific, structure. Each is a focused expert, not a generic linter.",
  },
  {
    src: "/screenshots/review-2-finding.png",
    step: "Grounded",
    title: "Findings cite the exact file, line, and fix",
    caption:
      "Every finding points to the precise location and proposes a concrete change — grounded in your canonical standards, not the model's priors.",
  },
  {
    src: "/screenshots/review-3-summary-tools.png",
    step: "Summarized",
    title: "A severity table — and the work behind it",
    caption:
      "A glanceable summary by facet and severity, plus the tools the agents actually ran: section searches, memory recalls, code-sample searches. Reviewers with zero findings are hidden to cut noise.",
  },
  {
    src: "/screenshots/review-4-sources.png",
    step: "Proven",
    title: "Every doc and memory that grounded the review",
    caption:
      "The receipts: each source document and recalled memory, its partition, the facets it informed, and how it was used. Edit a doc, watch the next review change. This is the closed loop, visible.",
  },
];

export default function ReviewShowcase() {
  const [active, setActive] = useState(0);
  const shot = shots[active];

  return (
    <div className="showcase">
      <div className="showcase-steps">
        {shots.map((s, i) => (
          <button
            key={s.src}
            className={`showcase-step${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            <span className="showcase-step-idx">{String(i + 1).padStart(2, "0")}</span>
            <span className="showcase-step-text">
              <strong>{s.step}</strong>
              <em>{s.title}</em>
            </span>
          </button>
        ))}
      </div>

      <div className="showcase-frame">
        <div className="mock-titlebar">
          <span className="mock-dot" />
          <span className="mock-dot" />
          <span className="mock-dot" />
          <span className="mock-title">
            github.com — feat(wonderly-app): Add live region devtools #7397
          </span>
        </div>
        <div className="showcase-img-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shot.src} alt={shot.title} className="showcase-img" />
        </div>
        <p className="showcase-caption">{shot.caption}</p>
      </div>
    </div>
  );
}
