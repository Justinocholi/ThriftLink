import Link from "next/link";

export default function Navbar() {
  return (
    <header className="header">
      <div className="nav-container">
        <Link href="/" className="logo">Thrift Link</Link>
        <nav>
          <ul className="nav-links">
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/verifiedvendors">Verified Vendors</Link></li>
            <li><Link href="/howitworks">How It Works</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <div className="location-selector">📍 Lagos, NG</div>
          <Link href="/signin" className="btn btn-outline">Sign In</Link>
          <Link href="/post-ad" className="btn post-ad-btn">📢 Post Free Ad</Link>
        </div>
      </div>
    </header>
  );
}


