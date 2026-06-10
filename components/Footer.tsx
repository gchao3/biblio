import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={18} />
          Biblio
        </div>
        <div className="footer-links">
          <a
            href="https://biblio.wonderly.info/docs/"
            target="_blank"
            rel="noreferrer"
          >
            Docs
          </a>
          <a
            href="https://github.com/wonderlydotcom/wonderly-biblio"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <Link href="/implementation">Implementation</Link>
          <Link href="/#waitlist">Waitlist</Link>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Wonderly
        </div>
      </div>
    </footer>
  );
}
