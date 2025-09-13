// app/dashboard/page.tsx
'use client';

import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!user) {
    return null; // Will redirect in the useEffect
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <div className="user-info">
          <span>Welcome, {user.full_name}</span>
          <button onClick={signOut} className="btn btn-outline">
            Sign Out
          </button>
        </div>
      </div>

      <div className="dashboard-tabs">
        <button
          className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        {user.role === 'vendor' && (
          <button
            className={`tab ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            My Products
          </button>
        )}
        {user.role === 'vendor' && (
          <button
            className={`tab ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
        )}
        <button
          className={`tab ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-tab">
            <div className="welcome-card">
              <h2>Welcome to Thrift Link!</h2>
              <p>
                {user.role === 'user'
                  ? 'Browse verified WhatsApp vendors and connect with them directly.'
                  : 'Manage your vendor profile, products, and orders.'}
              </p>
              {user.role === 'user' && (
                <div className="become-vendor">
                  <h3>Are you a WhatsApp vendor?</h3>
                  <p>Create your vendor profile and start selling today!</p>
                  <Link href="/become-vendor" className="btn btn-primary">
                    Become a Vendor
                  </Link>
                </div>
              )}
            </div>

            <div className="stats-cards">
              {user.role === 'vendor' ? (
                <>
                  <div className="stat-card">
                    <h3>Products</h3>
                    <p className="stat-number">0</p>
                  </div>
                  <div className="stat-card">
                    <h3>Orders</h3>
                    <p className="stat-number">0</p>
                  </div>
                  <div className="stat-card">
                    <h3>Reviews</h3>
                    <p className="stat-number">0</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="stat-card">
                    <h3>Saved Vendors</h3>
                    <p className="stat-number">0</p>
                  </div>
                  <div className="stat-card">
                    <h3>Recent Orders</h3>
                    <p className="stat-number">0</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {activeTab === 'products' && user.role === 'vendor' && (
          <div className="products-tab">
            <div className="tab-header">
              <h2>My Products</h2>
              <Link href="/dashboard/add-product" className="btn btn-primary">
                Add New Product
              </Link>
            </div>

            <div className="empty-state">
              <p>You haven&apos;t added any products yet.</p>
              <Link href="/dashboard/add-product" className="btn btn-outline">
                Add Your First Product
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'orders' && user.role === 'vendor' && (
          <div className="orders-tab">
            <h2>Orders</h2>
            <div className="empty-state">
              <p>You don&apos;t have any orders yet.</p>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="profile-tab">
            <h2>Profile Information</h2>
            <div className="profile-info">
              <div className="info-group">
                <label>Full Name</label>
                <p>{user.full_name}</p>
              </div>
              <div className="info-group">
                <label>Email</label>
                <p>{user.email}</p>
              </div>
              <div className="info-group">
                <label>Role</label>
                <p className="role-badge">{user.role}</p>
              </div>
              {user.phone_number && (
                <div className="info-group">
                  <label>Phone Number</label>
                  <p>{user.phone_number}</p>
                </div>
              )}
              {user.location && (
                <div className="info-group">
                  <label>Location</label>
                  <p>{user.location}</p>
                </div>
              )}
            </div>

            <div className="profile-actions">
              <Link href="/dashboard/edit-profile" className="btn btn-outline">
                Edit Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}