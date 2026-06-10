import Link from "next/link";
import Logo from "./Logo";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <Logo />
          Biblio <small>by Wonderly</small>
        </Link>
        <nav className="nav-links">
          <Link href="/#loop">How it works</Link>
          <Link href="/#features">Product</Link>
          <Link href="/#compare">Why Biblio</Link>
          <Link href="/implementation">Implementation</Link>
          <a
            href="https://biblio.wonderly.info/docs/"
            target="_blank"
            rel="noreferrer"
          >
            Docs
          </a>
        </nav>
        <div className="nav-cta">
          <a
            href="https://github.com/wonderlydotcom/wonderly-biblio"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            GitHub
          </a>
          <Link href="/#waitlist" className="btn btn-primary">
            Join the waitlist
          </Link>
        </div>
      </div>
    </header>
  );
}
