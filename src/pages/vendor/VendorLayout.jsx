import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, User, Package, BarChart2, ShoppingCart, MessageCircle, Settings, Crown, LogOut } from 'lucide-react';

const VendorLayout = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path || (path === '/vendor' && location.pathname === '/vendor');
  };

  const navItems = [
    { path: '/vendor', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/vendor/profile', icon: <User size={20} />, label: 'Vendor Profile' },
    { path: '/vendor/products', icon: <Package size={20} />, label: 'Product Listing' },
    { path: '/vendor/analytics', icon: <BarChart2 size={20} />, label: 'Click Analytics' },
    { path: '/vendor/orders', icon: <ShoppingCart size={20} />, label: 'Orders Received' },
    { path: '/vendor/messages', icon: <MessageCircle size={20} />, label: 'Messages' },
    { path: '/vendor/settings', icon: <Settings size={20} />, label: 'Settings' },
    { path: '/vendor/subscription', icon: <Crown size={20} />, label: 'Subscription' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f5f7fa', fontFamily: "'Inter', sans-serif" }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        background: '#0f172a',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 0',
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0,
        zIndex: 10
      }}>
        <div style={{ padding: '0 1.5rem 2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/images/thriftlink-logo-.png" alt="Logo" style={{ height: '40px', background: 'white', borderRadius: '4px' }} />
          <h2 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 'bold' }}>ThriftLink</h2>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', flex: 1, overflowY: 'auto' }}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              color: isActive(item.path) ? '#60a5fa' : '#94a3b8',
              background: isActive(item.path) ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
              textDecoration: 'none',
              padding: '0.875rem 1.5rem',
              borderLeft: `3px solid ${isActive(item.path) ? '#3b82f6' : 'transparent'}`,
              transition: 'all 0.2s'
            }}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
          
          <button onClick={handleLogout} style={{
            marginTop: 'auto',
            display: 'flex', alignItems: 'center', gap: '10px',
            color: '#f87171',
            background: 'transparent',
            border: 'none',
            padding: '0.875rem 1.5rem',
            cursor: 'pointer',
            fontSize: '0.95rem',
            fontWeight: '500',
            width: '100%',
            textAlign: 'left'
          }}>
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ marginLeft: '260px', flex: 1, padding: '2rem' }}>
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem',
          background: 'white',
          padding: '1.5rem 2rem',
          borderRadius: '16px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{ fontSize: '1.75rem', color: '#0f172a', fontWeight: '700' }}>
            {navItems.find(i => isActive(i.path))?.label || 'Vendor Dashboard'}
          </h3>
          <Link to="/" className="view-page-btn" style={{
            padding: '0.75rem 1.5rem',
            background: '#3b82f6',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '0.95rem',
            transition: 'all 0.2s',
            boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
          }}>View Public Page</Link>
        </header>

        <Outlet />
      </main>
    </div>
  );
};

export default VendorLayout;
