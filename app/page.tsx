import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Waitlist from "@/components/Waitlist";
import LoopDiagram from "@/components/LoopDiagram";
import ReviewShowcase from "@/components/ReviewShowcase";
import CostSpotlight from "@/components/CostSpotlight";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="container">
            <div className="hero-badge">
              <span className="dot" />
              Universal knowledge base MCP — open core
            </div>
            <h1>
              Make every coding agent
              <br />
              write like your best engineer.
            </h1>
            <p className="hero-sub">
              Biblio grounds every agent — Claude Code, Codex, Cursor, Copilot
              — in your org&apos;s <strong>canonical standards</strong>,
              reviews every diff against the same knowledge, and turns every
              correction into <strong>shared team memory</strong>. Quality
              compounds with every cycle.
            </p>
            <div className="hero-actions">
              <Link href="/#waitlist" className="btn btn-primary btn-lg">
                Join the waitlist
              </Link>
              <a
                href="https://biblio.wonderly.info/docs/getting-started.html"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-lg"
              >
                Read the docs →
              </a>
            </div>
            <p className="hero-note">
              Self-hostable today from{" "}
              <a
                href="https://github.com/wonderlydotcom/wonderly-biblio"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              . No local installs. No repo restructuring.
            </p>
          </div>

          {/* ---- product mock ---- */}
          <div className="mock-wrap">
            <div className="mock">
              <div className="mock-titlebar">
                <span className="mock-dot" />
                <span className="mock-dot" />
                <span className="mock-dot" />
                <span className="mock-title">
                  biblio — knowledge base · code reviews · telemetry
                </span>
              </div>
              <div className="mock-body">
                <aside className="mock-side">
                  <div className="mock-side-label">Partitions</div>
                  <div className="mock-side-item active">
                    📚 backend-net-kb <span className="badge">142 docs</span>
                  </div>
                  <div className="mock-side-item">
                    ⚛️ frontend-react-kb <span className="badge">87 docs</span>
                  </div>
                  <div className="mock-side-item">
                    🔐 platform-security <span className="badge">31 docs</span>
                  </div>
                  <div className="mock-side-item">
                    ☁️ infra-kb <span className="badge">54 docs</span>
                  </div>
                  <div className="mock-side-label" style={{ marginTop: 16 }}>
                    Memories
                  </div>
                  <div className="mock-side-item">
                    🧠 1,284 indexed <span className="badge">graph</span>
                  </div>
                </aside>
                <div className="mock-main">
                  <div className="mock-search">
                    <span>search_kb_code_samples</span> &quot;logging and
                    telemetry&quot;
                  </div>
                  <div className="mock-result">
                    <div className="mock-result-head">
                      <span className="mock-chip">snippet · 0.94</span>
                      <span className="mock-result-path">
                        backend-net-kb / observability / structured-logging.md
                      </span>
                    </div>
                    <div className="mock-code">
                      <span className="cm">
                        {"// ## Telemetry / Spans / Hot paths"}
                      </span>
                      {"\n"}
                      <span className="kw">using var</span> activity ={" "}
                      <span className="fn">StartActivity</span>(
                      <span className="str">&quot;rollup.step3&quot;</span>);
                      {"\n"}activity?.
                      <span className="fn">SetTag</span>(
                      <span className="str">&quot;hotel.span&quot;</span>,
                      spanId);
                    </div>
                  </div>
                  <div className="mock-result">
                    <div className="mock-result-head">
                      <span className="mock-chip green">
                        review · 0 findings
                      </span>
                      <span className="mock-result-path">
                        PR #482 — grounded in 4 docs · 3 memories
                      </span>
                    </div>
                    <div className="mock-review-row">
                      <span>🧪 Test Quality</span>
                      <span style={{ color: "var(--green)" }}>LGTM 🚀</span>
                    </div>
                    <div className="mock-review-row">
                      <span>⚡ Performance</span>
                      <span style={{ color: "var(--green)" }}>LGTM 🚀</span>
                    </div>
                    <div className="mock-review-row">
                      <span>🔐 Security</span>
                      <span style={{ color: "var(--text-muted)" }}>
                        skipped — no matching files in diff
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ AGENT ROW ============ */}
        <section className="logos">
          <div className="container">
            <p>One knowledge base. Every agent your team already uses.</p>
            <div className="logo-row">
              <span>Claude Code</span>
              <span>OpenAI Codex</span>
              <span>Cursor</span>
              <span>GitHub Copilot</span>
              <span>OpenCode</span>
              <span>VS Code</span>
            </div>
          </div>
        </section>

        {/* ============ PROBLEM ============ */}
        <section className="section section-border" id="problem">
          <div className="container">
            <p className="kicker center">The problem</p>
            <h2 className="center">
              AI coding without guardrails
              <br />
              is a wild west.
            </h2>
            <p className="section-sub center">
              Same model, same codebase — wildly different outcomes. The
              variance in how your engineers prompt projects straight into
              your code.
            </p>
            <div className="grid-3">
              <div className="stat-card">
                <div className="stat">10 agents</div>
                <h3>Ten different baselines</h3>
                <p>
                  Every developer prompts differently, with a different agent
                  and different context. Your standards only apply when
                  someone remembers to paste them in.
                </p>
              </div>
              <div className="stat-card">
                <div className="stat">+20% cost</div>
                <h3>Context files don&apos;t scale</h3>
                <p>
                  Repo-level AGENTS.md files were found to{" "}
                  <em>reduce</em> task success while increasing inference cost
                  by over 20%{" "}
                  <a
                    href="https://arxiv.org/abs/2602.11988"
                    target="_blank"
                    rel="noreferrer"
                  >
                    (ETH Zürich, 2026)
                  </a>
                  . Always loaded, rarely followed, never enforced.
                </p>
              </div>
              <div className="stat-card">
                <div className="stat">∞ repeats</div>
                <h3>Corrections evaporate</h3>
                <p>
                  A reviewer catches an AI mistake today — and another copy of
                  it ships from a different agent next sprint. Nothing learns,
                  so nothing improves.
                </p>
              </div>
            </div>
            <p className="pivot-line">
              Inconsistent code you can&apos;t enforce.{" "}
              <strong>And spend you can&apos;t see.</strong>
            </p>
          </div>
        </section>

        {/* ============ COST SPOTLIGHT ============ */}
        <CostSpotlight />

        {/* ============ THE LOOP ============ */}
        <section className="section section-border" id="loop">
          <div className="container">
            <p className="kicker">How it works</p>
            <h2>One loop. Four stages. Quality that compounds.</h2>
            <p className="section-sub">
              Most teams have docs somewhere, reviews somewhere else, and
              lessons nowhere. Biblio wires them together behind a single MCP
              server.
            </p>
            <div className="loop-grid">
              <div className="steps">
                <div className="step">
                  <div className="step-num">01</div>
                  <div>
                    <h3>Ground — one canonical knowledge base</h3>
                    <p>
                      Compose <strong>partitions</strong> — virtual doc repos —
                      from any GitHub repository with include/exclude filters,
                      or author directly in the web UI. Org standards, service
                      docs, security guidelines: parsed, indexed, and served
                      fresh to every agent. No submodules, no syncing, no
                      copy-paste drift.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">02</div>
                  <div>
                    <h3>Retrieve — the right section, on demand</h3>
                    <p>
                      Full-text, vector, and graph search over{" "}
                      <strong>snippets and sections</strong> — agents pull
                      exactly the context a task needs instead of stuffing
                      every rule into every prompt.{" "}
                      <strong>Retrieval-led reasoning</strong>, not
                      pre-training-led guessing.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">03</div>
                  <div>
                    <h3>Review — the same knowledge checks the code</h3>
                    <p>
                      Focused review agents — your test expert, performance
                      expert, security expert — review every PR{" "}
                      <strong>and every local diff</strong> against the same
                      docs and memories, with citations to exactly what
                      grounded each finding.
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">04</div>
                  <div>
                    <h3>Remember — corrections become team memory</h3>
                    <p>
                      When an agent or developer catches a mistake, it&apos;s
                      stored — rules, routines, mistakes, domain knowledge —
                      with guards for when it applies and when it
                      doesn&apos;t. Every agent on the team recalls it.{" "}
                      <strong>
                        Stop reviewing the same AI mistake twice.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <LoopDiagram />
            </div>
          </div>
        </section>

        {/* ============ FEATURES ============ */}
        <section className="section section-border" id="features">
          <div className="container">
            <p className="kicker center">Product</p>
            <h2 className="center">Built like infrastructure, not a plugin.</h2>
            <p className="section-sub center">
              A remote MCP server your whole org connects to — nothing to
              install locally, nothing to change in your repos.
            </p>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">▦</div>
                <h3>Composable partitions</h3>
                <p>
                  Mix and match knowledge per project: backend + frontend +
                  infra for a monorepo, org-wide security guidelines
                  everywhere. Virtualized — no git juggling, always current.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⌕</div>
                <h3>Hybrid retrieval engine</h3>
                <p>
                  Full-text, vector, and graph search backed by Postgres (AGE +
                  pgvector). Token-dense indexes and snippet-first entry points
                  keep agent context lean.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🧠</div>
                <h3>Shared memory layer</h3>
                <p>
                  Six memory types with applies-when / does-not-apply guards
                  and confidence scores. Shared across every agent and
                  developer — even in CI/CD.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⇄</div>
                <h3>Code review, twice</h3>
                <p>
                  A GitHub App reviews every PR; the same reviewers run
                  locally via one MCP tool while agents code. Diffs upload via
                  signed URL, so large changes never bloat context.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📈</div>
                <h3>Telemetry for leaders</h3>
                <p>
                  OpenTelemetry traces, logs, and metrics out of the box: which
                  docs drive generation, which agents your team uses, where
                  documentation gaps are costing you.
                </p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🛡</div>
                <h3>Enterprise-grade</h3>
                <p>
                  OAuth and encrypted access tokens for MCP, HMAC-signed
                  GitHub webhooks, Kubernetes-ready deployment. Self-host it
                  inside your perimeter.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ COMPARISON ============ */}
        <section className="section section-border" id="compare">
          <div className="container">
            <p className="kicker center">Why Biblio</p>
            <h2 className="center">This is not another AGENTS.md.</h2>
            <p className="section-sub center">
              Static context files are loaded always, followed sometimes, and
              enforced never. Biblio is a system, not a file.
            </p>
            <div className="compare">
              <div className="compare-col">
                <h3>Static context files &amp; skills</h3>
                <ul>
                  <li>
                    <span className="mark x">✕</span>Loaded into every prompt —
                    relevant or not — polluting the agent&apos;s search space
                  </li>
                  <li>
                    <span className="mark x">✕</span>Copy-pasted across repos,
                    drifting further apart with every edit
                  </li>
                  <li>
                    <span className="mark x">✕</span>No way to know if any
                    agent actually read or followed them
                  </li>
                  <li>
                    <span className="mark x">✕</span>Forget every correction —
                    the same mistake ships again next sprint
                  </li>
                  <li>
                    <span className="mark x">✕</span>Per-developer, per-repo,
                    per-agent — no org-level leverage
                  </li>
                </ul>
              </div>
              <div className="compare-col highlight">
                <h3>
                  <span style={{ color: "var(--accent-2)" }}>◆</span> Biblio
                </h3>
                <ul>
                  <li>
                    <span className="mark check">✓</span>Retrieved on demand —
                    the right section of the right standard, per task
                  </li>
                  <li>
                    <span className="mark check">✓</span>One canonical source,
                    synced from GitHub, served to every repo and agent
                  </li>
                  <li>
                    <span className="mark check">✓</span>Reviews enforce the
                    standards; telemetry proves what was used, per document
                  </li>
                  <li>
                    <span className="mark check">✓</span>Every correction
                    becomes a recallable, team-wide memory
                  </li>
                  <li>
                    <span className="mark check">✓</span>Centrally managed and
                    governed — one floor of quality for the whole org
                  </li>
                </ul>
              </div>
            </div>
            <p className="footnote">
              The research agrees: repo-level context files tend to reduce task
              success while adding 20%+ inference cost (
              <a
                href="https://arxiv.org/abs/2602.11988"
                target="_blank"
                rel="noreferrer"
              >
                arXiv:2602.11988
              </a>
              ), and expert-curated guidance outperforms agent self-generated
              guidance (
              <a
                href="https://arxiv.org/abs/2602.12670"
                target="_blank"
                rel="noreferrer"
              >
                arXiv:2602.12670
              </a>
              ). The answer is curated knowledge, retrieved on demand — then
              enforced.
            </p>
          </div>
        </section>

        {/* ============ PROOF ============ */}
        <section className="section section-border" id="proof">
          <div className="container">
            <p className="kicker">For engineering leaders</p>
            <h2>Proof, not vibes.</h2>
            <p className="section-sub">
              You&apos;re accountable for what AI ships into production.
              Biblio gives you the receipts.
            </p>
            <div className="proof-grid">
              <div className="proof-card">
                <span className="metric">per-review citations</span>
                <h3>See what grounded every review</h3>
                <p>
                  Every code review lists the exact documents, memories, and
                  tool calls that shaped it — down to which partition was
                  searched and why. Edit a doc, watch reviews change.
                </p>
              </div>
              <div className="proof-card">
                <span className="metric">findings → 0</span>
                <h3>Watch quality converge</h3>
                <p>
                  Agents run the same reviewers locally before the PR exists.
                  Over cycles, PR findings trend toward zero — your quality
                  curve, measured, not asserted.
                </p>
              </div>
              <div className="proof-card">
                <span className="metric">org-wide telemetry</span>
                <h3>Know what your org actually uses</h3>
                <p>
                  Which agents and versions your team runs, which documents
                  influence generation, where the doc gaps are. OpenTelemetry
                  native — pipe it to Datadog or any backend.
                </p>
              </div>
            </div>

            <div style={{ marginTop: 64 }}>
              <ReviewShowcase />
            </div>
          </div>
        </section>

        {/* ============ OPEN CORE ============ */}
        <section className="section section-border" id="opencore">
          <div className="container">
            <p className="kicker center">Open core</p>
            <h2 className="center">Self-host it today. Or let us run it.</h2>
            <p className="section-sub center">
              Biblio is open core: deploy your own instance inside your
              perimeter now, or join the waitlist for the managed offering.
            </p>
            <div className="duo">
              <div className="duo-card">
                <h3>Self-hosted</h3>
                <p>
                  Clone the repo, point it at Postgres, connect your agents.
                  Kubernetes-ready, OAuth-secured, your data never leaves your
                  infrastructure.
                </p>
                <a
                  href="https://github.com/wonderlydotcom/wonderly-biblio"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  View on GitHub →
                </a>
              </div>
              <div className="duo-card">
                <h3>Managed by Wonderly</h3>
                <p>
                  The same closed loop without the ops: hosted Biblio with
                  onboarding support from the team that runs it in production
                  every day.
                </p>
                <Link href="/#waitlist" className="btn btn-primary">
                  Join the waitlist
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <section className="cta-final section-border" id="waitlist">
          <div className="container">
            <h2>
              Set the floor.
              <br />
              Raise it every week.
            </h2>
            <p>
              Baseline every engineer and every agent to your standards — and
              let the loop make them better from there.
            </p>
            <Waitlist />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
