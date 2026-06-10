"use client";

import { useState } from "react";

export type Tab = {
  label: string;
  filename: string;
  code: React.ReactNode;
};

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div className="tabs">
      <div className="tab-row" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={i === active}
            className={`tab-btn${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="codeblock">
        <div className="codeblock-head">{tab.filename}</div>
        <pre>{tab.code}</pre>
      </div>
    </div>
  );
}
