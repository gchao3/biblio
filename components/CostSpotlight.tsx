export default function CostSpotlight() {
  return (
    <section className="section section-border" id="cost">
      <div className="container">
        <div className="cost-grid">
          <div className="cost-text">
            <p className="kicker">Cost visibility</p>
            <h2>
              What did that feature
              <br />
              actually cost to build?
            </h2>
            <p className="cost-lede">
              AI coding spend is a black box. Agents write code across different
              engineers, models, and tools, and almost no one can say what a
              feature, a PR, or a single engineer actually cost to ship.
            </p>
            <p className="cost-lede">
              Because every agent runs through Biblio, it attributes the spend
              for you — down to fresh versus cached tokens, and the savings from
              reuse.
            </p>
            <div className="cost-chips">
              <div className="cost-chip">
                <span className="cost-chip-label">Per conversation</span>
                <span className="cost-chip-val">Total &amp; cost / event</span>
              </div>
              <div className="cost-chip">
                <span className="cost-chip-label">Per engineer</span>
                <span className="cost-chip-val">Attributed by user</span>
              </div>
              <div className="cost-chip">
                <span className="cost-chip-label">Per model</span>
                <span className="cost-chip-val">Fresh vs. cached spend</span>
              </div>
            </div>
          </div>

          <div className="cost-visual">
            <div className="cost-frame">
              <div className="mock-titlebar">
                <span className="mock-dot" />
                <span className="mock-dot" />
                <span className="mock-dot" />
                <span className="mock-title">biblio — telemetry · cost</span>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/per-feature-cost.png"
                alt="Biblio telemetry showing the full cost breakdown for a single conversation: total cost, cost per event, fresh and cached input cost, output cost, and cache savings."
                className="cost-img"
              />
            </div>
            <p className="cost-caption">
              Real spend for one conversation — total, per event, and the cache
              savings from shared context.
            </p>
          </div>
        </div>

        <p className="pivot-line">
          A bigger AGENTS.md fixes none of this.{" "}
          <strong>One closed loop fixes all of it.</strong>
        </p>
      </div>
    </section>
  );
}
