import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { LayoutDashboard, Store, Star, Users, LogOut, Menu, X } from 'lucide-react';
import logo from '../../assets/thriftlink-logo-.png';

const AdminLayout = () => {
  const { logout, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => {
    return location.pathname === path || (path === '/admin' && location.pathname === '/admin');
  };

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
        top: 0
      }}>
        <div style={{ padding: '0 1.5rem 2rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '2rem' }}>
          <h2 style={{ color: '#3b82f6', fontSize: '1.5rem', fontWeight: 'bold' }}>ThriftLink Admin</h2>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <Link to="/admin" style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            color: isActive('/admin') ? '#60a5fa' : '#94a3b8',
            background: isActive('/admin') ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
            textDecoration: 'none',
            padding: '0.875rem 1.5rem',
            borderLeft: `3px solid ${isActive('/admin') ? '#3b82f6' : 'transparent'}`,
            transition: 'all 0.2s'
          }}>
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </Link>
          
          <Link to="/admin/vendors" style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            color: isActive('/admin/vendors') ? '#60a5fa' : '#94a3b8',
            background: isActive('/admin/vendors') ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
            textDecoration: 'none',
            padding: '0.875rem 1.5rem',
            borderLeft: `3px solid ${isActive('/admin/vendors') ? '#3b82f6' : 'transparent'}`,
            transition: 'all 0.2s'
          }}>
            <Store size={20} />
            <span>Vendors</span>
          </Link>
          
          <Link to="/admin/reviews" style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            color: isActive('/admin/reviews') ? '#60a5fa' : '#94a3b8',
            background: isActive('/admin/reviews') ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
            textDecoration: 'none',
            padding: '0.875rem 1.5rem',
            borderLeft: `3px solid ${isActive('/admin/reviews') ? '#3b82f6' : 'transparent'}`,
            transition: 'all 0.2s'
          }}>
            <Star size={20} />
            <span>Reviews</span>
          </Link>
          
          <Link to="/admin/users" style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            color: isActive('/admin/users') ? '#60a5fa' : '#94a3b8',
            background: isActive('/admin/users') ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
            textDecoration: 'none',
            padding: '0.875rem 1.5rem',
            borderLeft: `3px solid ${isActive('/admin/users') ? '#3b82f6' : 'transparent'}`,
            transition: 'all 0.2s'
          }}>
            <Users size={20} />
            <span>Users</span>
          </Link>
          
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
      <main style={{ 
        marginLeft: window.innerWidth > 768 ? '260px' : '0', 
        flex: 1, 
        padding: '2.5rem',
        width: '100%' 
      }}>
        <button 
          onClick={toggleSidebar}
          style={{
            display: window.innerWidth <= 768 ? 'flex' : 'none',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'white',
            border: '1px solid #e2e8f0',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            marginBottom: '1.5rem',
            cursor: 'pointer'
          }}
        >
          <Menu size={20} />
          <span>Menu</span>
        </button>
        <Outlet />
      </main>

      <style>{`
        @media (max-width: 768px) {
          main {
            margin-left: 0 !important;
            padding: 1.5rem !important;
          }
          aside {
            transform: translateX(-100%);
          }
          aside.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;
