import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Waitlist from "@/components/Waitlist";
import Tabs from "@/components/Tabs";

export const metadata: Metadata = {
  title: "Implementation — Biblio by Wonderly",
  description:
    "Deploy Biblio, connect your repos as knowledge partitions, point your coding agents at one MCP server, and turn on grounded code reviews — in an afternoon.",
};

const agentTabs = [
  {
    label: "Claude Code",
    filename: ".mcp.json",
    code: `{
  "mcpServers": {
    "biblio": {
      "type": "http",
      "url": "https://your.server.url/mcp",
      "headers": {
        "Authorization": "Bearer \${BIBLIO_ACCESS_TOKEN}"
      }
    }
  }
}`,
  },
  {
    label: "Codex",
    filename: ".codex/config.toml",
    code: `[mcp_servers.biblio]
enabled = true
url = "https://your.server.url/mcp"
bearer_token_env_var = "BIBLIO_ACCESS_TOKEN"`,
  },
  {
    label: "Cursor",
    filename: ".cursor/mcp.json",
    code: `{
  "mcpServers": {
    "biblio": {
      "url": "https://your.server.url/mcp",
      "headers": {
        "Authorization": "Bearer \${env:BIBLIO_ACCESS_TOKEN}"
      }
    }
  }
}`,
  },
  {
    label: "OpenCode",
    filename: "opencode.json",
    code: `{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "biblio": {
      "type": "remote",
      "url": "https://your.server.url/mcp",
      "enabled": true,
      "oauth": false,
      "headers": {
        "Authorization": "Bearer {env:BIBLIO_ACCESS_TOKEN}"
      }
    }
  }
}`,
  },
  {
    label: "VS Code",
    filename: ".vscode/mcp.json",
    code: `{
  "servers": {
    "biblio": {
      "type": "http",
      "url": "https://your.server.url/mcp",
      "headers": {
        "Authorization": "Bearer \${input:biblio_server_access_token}"
      }
    }
  }
}`,
  },
];

export default function Implementation() {
  return (
    <>
      <Nav />
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="kicker">Implementation</p>
            <h1>Up and running in an afternoon.</h1>
            <p>
              No local installs for your developers. No repo restructuring. No
              workflow changes. Biblio is a remote MCP server — connect your
              agents to it, point it at your docs, and turn the loop on.
            </p>
          </div>
        </section>

        <div className="container">
          {/* STEP 1 */}
          <div className="impl-step">
            <div className="impl-num">01</div>
            <div className="impl-body">
              <h2>Deploy the server</h2>
              <p>
                Self-host from{" "}
                <a
                  className="inline-link"
                  href="https://github.com/wonderlydotcom/wonderly-biblio"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                inside your own perimeter — Kubernetes-ready, with guidance for
                secrets management and reverse proxies. Bring{" "}
                <strong>Postgres</strong> for the full loop (the AGE, pgvector,
                and fuzzystrmatch extensions are initialized automatically) or{" "}
                <strong>SQLite</strong> for a lightweight trial. An OpenAI API
                key powers embeddings for semantic search and graph memory.
              </p>
              <div className="cap-table">
                <table>
                  <thead>
                    <tr>
                      <th>Capability</th>
                      <th>Postgres</th>
                      <th>SQLite</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Full-text search over docs &amp; snippets</td>
                      <td className="yes">✓</td>
                      <td className="yes">✓</td>
                    </tr>
                    <tr>
                      <td>Vector search (sections &amp; code samples)</td>
                      <td className="yes">✓</td>
                      <td className="no">—</td>
                    </tr>
                    <tr>
                      <td>Graph-indexed team memory</td>
                      <td className="yes">✓</td>
                      <td className="no">—</td>
                    </tr>
                    <tr>
                      <td>Best for</td>
                      <td>Production</td>
                      <td>Evaluation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="impl-step">
            <div className="impl-num">02</div>
            <div className="impl-body">
              <h2>Compose your knowledge into partitions</h2>
              <p>
                A <strong>partition</strong> is a virtual documentation
                repository. Point one at any GitHub repo and branch with
                inclusion/exclusion filters, or author documents directly in
                Biblio&apos;s web editor. Content syncs on a schedule (8 hours
                by default) or on demand — your agents always read the latest,
                with zero developer-side syncing.
              </p>
              <ul className="impl-list">
                <li>
                  <span>
                    <strong>Split by context:</strong> backend, frontend,
                    infra, security — agents query a focused partition instead
                    of one giant doc pile.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Compose per project:</strong> a monorepo can pull
                    backend + frontend + infra partitions together — no git
                    submodules.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Reuse everywhere:</strong> org-wide guidelines
                    (e.g. security) get included in every project without
                    duplication.
                  </span>
                </li>
              </ul>
              <div className="codeblock">
                <div className="codeblock-head">
                  partition config — illustrative; see docs for full schema
                </div>
                <pre>{`{
  "Name": "backend-net-kb",
  "Description": "C# / .NET backend standards, written for the LLM",
  "Url": "https://github.com/your-org/engineering-standards",
  "Branch": "main",
  "DocPrefix": "kb/backend",
  "InclusionFilter": "kb/*.md"
}`}</pre>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="impl-step">
            <div className="impl-num">03</div>
            <div className="impl-body">
              <h2>Connect your agents</h2>
              <p>
                Every agent connects to the same server — so every agent reads
                the same canonical knowledge. Authentication uses OAuth with
                pre-registered clients or encrypted access tokens, generated in
                the Biblio UI.
              </p>
              <Tabs tabs={agentTabs} />
            </div>
          </div>

          {/* STEP 4 */}
          <div className="impl-step">
            <div className="impl-num">04</div>
            <div className="impl-body">
              <h2>Teach agents retrieval-led reasoning</h2>
              <p>
                Add a short block to <strong>AGENTS.md</strong> or{" "}
                <strong>CLAUDE.md</strong> instructing agents to prefer the
                knowledge base over their priors. Keep it brief — the knowledge
                lives in Biblio, not in your context window.
              </p>
              <div className="codeblock">
                <div className="codeblock-head">AGENTS.md</div>
                <pre>{`## Retrieval-Led Reasoning Using \`biblio\` Knowledge Base

**IMPORTANT**: Prefer retrieval-led reasoning using the \`biblio\`
KB MCP tool over pre-training-led reasoning in this workspace.

1. Use \`list_kb_documents\` to get an index of available documents.
2. Use \`read_kb_document_by_keywords\` to search topics per task.
3. Use \`search_kb_code_samples\` / \`search_kb_sections\` for
   focused snippets before reading full documents.

## Knowledge Base Partitions

- C#, *.cs, src/backend-net: backend-net-kb
- React, *.tsx, src/frontend: frontend-react-kb`}</pre>
              </div>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="impl-step">
            <div className="impl-num">05</div>
            <div className="impl-body">
              <h2>Turn on grounded code reviews</h2>
              <p>
                Install the Biblio GitHub App and every PR gets reviewed by
                your configured agent team — grounded in the same docs and
                memories that powered generation, in one managed comment that
                updates in place.
              </p>
              <ul className="impl-list">
                <li>
                  <span>
                    <strong>Define focused reviewers:</strong> a persona
                    (&quot;Performance Engineering&quot;), a review facet, a{" "}
                    <code>fast</code> or <code>high</code> model preference,
                    and a prompt that cross-references your KB.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Activate by path:</strong> reviewers only run when
                    the diff touches matching files — no wasted reviews.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Run them locally too:</strong> the{" "}
                    <code>expert_code_reviews</code> MCP tool lets coding
                    agents request the same review while they work — the diff
                    uploads to a signed URL, so it never bloats context.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>No reviewers configured?</strong> A built-in
                    default runs: an L8 principal engineer persona covering
                    correctness, performance, security, and testing.
                  </span>
                </li>
              </ul>
              <div className="codeblock">
                <div className="codeblock-head">
                  local review flow — what the agent does
                </div>
                <pre>{`$ git diff main...HEAD > /tmp/changes.diff
$ curl -X PUT --upload-file /tmp/changes.diff "<signed-url>"
# → returns job ID; agent hands it back to expert_code_reviews
# → all review agents run in parallel against your docs + memories
# → agent fixes findings, repeats until clean — before the PR exists`}</pre>
              </div>
            </div>
          </div>

          {/* STEP 6 */}
          <div className="impl-step">
            <div className="impl-num">06</div>
            <div className="impl-body">
              <h2>Watch the loop close</h2>
              <p>
                Biblio emits OpenTelemetry traces, logs, and metrics from day
                one — pipe them to Datadog or any OTel backend. Each review
                run is a single trace with a span per reviewer, including
                inputs and outputs.
              </p>
              <ul className="impl-list">
                <li>
                  <span>
                    <code>biblio_read_document_by_*</code> — which documents
                    actually influence generation, per partition.
                  </span>
                </li>
                <li>
                  <span>
                    <code>biblio_user_agent_counter</code> — which agents and
                    versions your org really uses.
                  </span>
                </li>
                <li>
                  <span>
                    <code>biblio_tool_call_counter</code> +{" "}
                    <code>search_*</code> metrics — whether agents retrieve
                    lean snippets or fall back to full documents.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Review findings over time</strong> — local and PR
                    reviews converge as memories accumulate. That curve is your
                    ROI.
                  </span>
                </li>
              </ul>
              <div className="callout">
                <strong>The result:</strong> developers keep their agents and
                their workflows. You get one floor of quality, enforced in
                review, improving every week — with the telemetry to prove it.
              </div>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <section className="cta-final section-border" id="waitlist">
          <div className="container">
            <h2>Ready to close the loop?</h2>
            <p>
              Self-host from GitHub today, or join the waitlist for managed
              Biblio.
            </p>
            <Waitlist />
            <p className="hero-note" style={{ marginTop: 18 }}>
              Prefer to dig in first?{" "}
              <a
                href="https://biblio.wonderly.info/docs/getting-started.html"
                target="_blank"
                rel="noreferrer"
              >
                Read the getting-started guide
              </a>{" "}
              or <Link href="/">go back to the overview</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
