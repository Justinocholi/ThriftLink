// app/products/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  in_stock: boolean;
  vendor_id: string;
  vendor: {
    business_name: string;
    verified: boolean;
  };
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [inStockOnly, setInStockOnly] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let query = supabase
          .from('products')
          .select(`
            *,
            vendor:vendors(business_name, verified)
          `);

        const { data, error } = await query;

        if (error) throw error;

        // Transform the data to match our Product type
        const formattedProducts = data.map((item: any) => ({
          ...item,
          vendor: item.vendor,
        }));

        setProducts(formattedProducts || []);
      } catch (err: any) {
        console.error('Error fetching products:', err);
        setError(err.message || 'Failed to load products');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterProducts();
  };

  const filterProducts = async () => {
    setIsLoading(true);
    try {
      let query = supabase
        .from('products')
        .select(`
          *,
          vendor:vendors(business_name, verified)
        `);

      // Apply filters
      if (inStockOnly) {
        query = query.eq('in_stock', true);
      }

      if (categoryFilter) {
        query = query.eq('category_id', categoryFilter);
      }

      if (priceRange.min) {
        query = query.gte('price', parseFloat(priceRange.min));
      }

      if (priceRange.max) {
        query = query.lte('price', parseFloat(priceRange.max));
      }

      const { data, error } = await query;

      if (error) throw error;

      // Transform and filter by search term
      let formattedProducts = data.map((item: any) => ({
        ...item,
        vendor: item.vendor,
      }));

      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        formattedProducts = formattedProducts.filter(
          (product) =>
            product.name.toLowerCase().includes(term) ||
            product.description.toLowerCase().includes(term)
        );
      }

      setProducts(formattedProducts || []);
    } catch (err: any) {
      console.error('Error filtering products:', err);
      setError(err.message || 'Failed to filter products');
    } finally {
      setIsLoading(false);
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('');
    setPriceRange({ min: '', max: '' });
    setInStockOnly(false);
    // Re-fetch all products
    setIsLoading(true);
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select(`
            *,
            vendor:vendors(business_name, verified)
          `);

        if (error) throw error;

        const formattedProducts = data.map((item: any) => ({
          ...item,
          vendor: item.vendor,
        }));

        setProducts(formattedProducts || []);
      } catch (err: any) {
        console.error('Error fetching products:', err);
        setError(err.message || 'Failed to load products');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  };

  return (
    <div className="products-page-container">
      <div className="products-header">
        <h1>Explore Products</h1>
        <p>Find the perfect items from our verified WhatsApp vendors</p>
      </div>

      <div className="products-filter-container">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-input-container">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              Search
            </button>
          </div>

          <div className="filters">
            <div className="filter-group">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="fashion">Fashion & Clothing</option>
                <option value="electronics">Electronics & Gadgets</option>
                <option value="beauty">Beauty & Personal Care</option>
                <option value="home">Home & Kitchen</option>
                <option value="food">Food & Groceries</option>
                <option value="health">Health & Wellness</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="filter-group price-range">
              <label>Price Range (₦)</label>
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, min: e.target.value })
                  }
                  min="0"
                />
                <span>to</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) =>
                    setPriceRange({ ...priceRange, max: e.target.value })
                  }
                  min="0"
                />
              </div>
            </div>

            <div className="filter-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                />
                <span>In Stock Only</span>
              </label>
            </div>

            <div className="filter-actions">
              <button
                type="button"
                onClick={filterProducts}
                className="filter-button"
              >
                Apply Filters
              </button>
              <button
                type="button"
                onClick={resetFilters}
                className="reset-button"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>

      {error && <div className="error-message">{error}</div>}

      {isLoading ? (
        <div className="loading">Loading products...</div>
      ) : products.length === 0 ? (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>
            We couldn't find any products matching your criteria. Try adjusting your
            filters or search term.
          </p>
          <button onClick={resetFilters} className="reset-button">
            Clear All Filters
          </button>
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image_url || '/placeholder-product.jpg'}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">₦{product.price.toLocaleString()}</div>
                <div className="product-vendor">
                  <span>Sold by: {product.vendor.business_name}</span>
                  {product.vendor.verified && (
                    <span className="verified-badge" title="Verified Vendor">
                      ✓
                    </span>
                  )}
                </div>
                <p className="product-description">{product.description}</p>
                <a
                  href={`https://wa.me/?text=Hi! I'm interested in your product: ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}