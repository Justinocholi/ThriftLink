import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Home, ShoppingBag, Heart, User, LifeBuoy, LogOut } from 'lucide-react';

const UserLayout = () => {
  const { logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path || (path === '/user' && location.pathname === '/user');
  };

  const navItems = [
    { path: '/user', icon: <Home size={20} />, label: 'Dashboard' },
    { path: '/user/orders', icon: <ShoppingBag size={20} />, label: 'My Orders' },
    { path: '/user/saved', icon: <Heart size={20} />, label: 'Saved Items' },
    { path: '/user/profile', icon: <User size={20} />, label: 'Profile' },
    { path: '/user/support', icon: <LifeBuoy size={20} />, label: 'Support' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', fontFamily: "'Inter', sans-serif" }}>
      {/* Sidebar */}
      <aside style={{
        width: '260px',
        background: 'white',
        borderRight: '1px solid #e2e8f0',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 0',
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0,
        zIndex: 10
      }}>
        <div style={{ padding: '0 1.5rem 2rem', borderBottom: '1px solid #f1f5f9', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/images/thriftlink-logo-.png" alt="Logo" style={{ height: '40px' }} />
          <h2 style={{ color: '#0f172a', fontSize: '1.25rem', fontWeight: 'bold' }}>ThriftLink</h2>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              color: isActive(item.path) ? '#3b82f6' : '#64748b',
              background: isActive(item.path) ? '#eff6ff' : 'transparent',
              textDecoration: 'none',
              padding: '0.875rem 1.5rem',
              borderRight: `3px solid ${isActive(item.path) ? '#3b82f6' : 'transparent'}`,
              transition: 'all 0.2s',
              fontWeight: isActive(item.path) ? '600' : '500'
            }}>
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
          
          <button onClick={handleLogout} style={{
            marginTop: 'auto',
            display: 'flex', alignItems: 'center', gap: '10px',
            color: '#ef4444',
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
        }}>
          <div>
            <h1 style={{ fontSize: '1.75rem', color: '#0f172a', fontWeight: '700', marginBottom: '0.25rem' }}>
              Welcome back, User! 👋
            </h1>
            <p style={{ color: '#64748b' }}>Here's what's happening with your account.</p>
          </div>
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
          }}>Start Shopping</Link>
        </header>

        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;
