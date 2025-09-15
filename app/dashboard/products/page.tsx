// app/dashboard/products/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  in_stock: boolean;
  created_at: string;
};

export default function Products() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Redirect if not logged in or not a vendor
  if (!loading && (!user || user.role !== 'vendor')) {
    router.push('/dashboard');
    return null;
  }

  useEffect(() => {
    const fetchProducts = async () => {
      if (!user) return;

      try {
        // Get vendor ID
        const { data: vendorData, error: vendorError } = await supabase
          .from('vendors')
          .select('id')
          .eq('user_id', user.id)
          .single();

        if (vendorError || !vendorData) {
          throw new Error('Vendor profile not found');
        }

        // Get products for this vendor
        const { data: productsData, error: productsError } = await supabase
          .from('products')
          .select('*')
          .eq('vendor_id', vendorData.id)
          .order('created_at', { ascending: false });

        if (productsError) throw productsError;

        setProducts(productsData || []);
      } catch (err: any) {
        console.error('Error fetching products:', err);
        setError(err.message || 'Failed to load products');
      } finally {
        setIsLoading(false);
      }
    };

    if (user && !loading) {
      fetchProducts();
    }
  }, [user, loading]);

  const handleDeleteProduct = async (productId: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', productId);

      if (error) throw error;

      // Update the products list
      setProducts(products.filter(product => product.id !== productId));
    } catch (err: any) {
      console.error('Error deleting product:', err);
      alert('Failed to delete product: ' + err.message);
    }
  };

  if (loading || isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1>Your Products</h1>
        <p>Manage your product listings</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="product-list-actions">
        <Link href="/dashboard/add-product" className="btn btn-primary">
          Add New Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="empty-state">
          <h3>No products yet</h3>
          <p>Start adding products to your store to attract customers.</p>
          <Link href="/dashboard/add-product" className="add-first-product">
            Add Your First Product
          </Link>
        </div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img 
                src={product.image_url || '/placeholder-product.jpg'} 
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <div className={`stock-badge ${product.in_stock ? 'in-stock' : 'out-of-stock'}`}>
                  {product.in_stock ? 'In Stock' : 'Out of Stock'}
                </div>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">₦{product.price.toLocaleString()}</div>
                <p className="product-description">{product.description}</p>
                <div className="product-actions">
                  <button 
                    className="edit-button"
                    onClick={() => router.push(`/dashboard/edit-product/${product.id}`)}
                  >
                    Edit
                  </button>
                  <button 
                    className="delete-button"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}