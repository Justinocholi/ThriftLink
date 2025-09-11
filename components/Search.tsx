export default function Search() {
  return (
    <section className="search-section">
      <div className="search-container">
        <h2 className="search-title">Find Trusted WhatsApp Vendors Near You</h2>
        <div className="main-search">
          <input
            type="text"
            className="search-input"
            placeholder="What are you looking for? (e.g. iPhone, fashion, food)"
          />
          <input
            type="text"
            className="location-input"
            placeholder="Lagos, NG"
            defaultValue="Lagos, NG"
          />
          <button className="search-btn">🔍 Search</button>
        </div>
        <div className="quick-filters">
          <a href="#" className="filter-chip">📱 Electronics</a>
          <a href="#" className="filter-chip">👗 Fashion</a>
          <a href="#" className="filter-chip">🍕 Food</a>
          <a href="#" className="filter-chip">🏠 Home & Living</a>
          <a href="#" className="filter-chip">💄 Beauty</a>
          <a href="#" className="filter-chip">🔧 Services</a>
        </div>
      </div>
    </section>
  );
}
