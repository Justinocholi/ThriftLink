import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Pages will be imported here
import Login from './pages/Login';
import Home from './pages/public/Home';
import Categories from './pages/public/Categories';
import ProductDetails from './pages/public/ProductDetails';
import VerifiedVendors from './pages/public/VerifiedVendors';
import HowItWorks from './pages/public/HowItWorks';
import Support from './pages/public/Support';

import AdminLayout from './pages/admin/AdminLayout';
import AdminOverview from './pages/admin/AdminOverview';
import AdminVendors from './pages/admin/AdminVendors';
import AdminReviews from './pages/admin/AdminReviews';
import AdminUsers from './pages/admin/AdminUsers';

import VendorLayout from './pages/vendor/VendorLayout';
import VendorDashboard from './pages/vendor/VendorDashboard';
import VendorProfile from './pages/vendor/VendorProfile';
import VendorProducts from './pages/vendor/VendorProducts';
import VendorAnalytics from './pages/vendor/VendorAnalytics';
import VendorOrders from './pages/vendor/VendorOrders';
import VendorMessages from './pages/vendor/VendorMessages';
import VendorSettings from './pages/vendor/VendorSettings';
import VendorSubscription from './pages/vendor/VendorSubscription';

import UserLayout from './pages/user/UserLayout';
import UserDashboard from './pages/user/UserDashboard';
import UserOrders from './pages/user/UserOrders';
import UserSaved from './pages/user/UserSaved';
import UserProfile from './pages/user/UserProfile';
import UserSupport from './pages/user/UserSupport';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/verified-vendors" element={<VerifiedVendors />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/support" element={<Support />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<AdminOverview />} />
            <Route path="vendors" element={<AdminVendors />} />
            <Route path="reviews" element={<AdminReviews />} />
            <Route path="users" element={<AdminUsers />} />
          </Route>

          {/* Vendor Routes */}
          <Route path="/vendor" element={
            <ProtectedRoute allowedRoles={['vendor']}>
              <VendorLayout />
            </ProtectedRoute>
          }>
            <Route index element={<VendorDashboard />} />
            <Route path="profile" element={<VendorProfile />} />
            <Route path="products" element={<VendorProducts />} />
            <Route path="analytics" element={<VendorAnalytics />} />
            <Route path="orders" element={<VendorOrders />} />
            <Route path="messages" element={<VendorMessages />} />
            <Route path="settings" element={<VendorSettings />} />
            <Route path="subscription" element={<VendorSubscription />} />
          </Route>

          {/* User Routes */}
          <Route path="/user" element={
            <ProtectedRoute allowedRoles={['user']}>
              <UserLayout />
            </ProtectedRoute>
          }>
            <Route index element={<UserDashboard />} />
            <Route path="orders" element={<UserOrders />} />
            <Route path="saved" element={<UserSaved />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="support" element={<UserSupport />} />
          </Route>
          
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
