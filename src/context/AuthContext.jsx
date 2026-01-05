import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persisted session
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    // Hardcoded credentials as requested
    if (username === 'admin' && password === 'admin') {
      const userData = { name: 'Admin User', type: 'admin', username: 'admin' };
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return { success: true, type: 'admin' };
    }
    
    if (username === 'vendor' && password === 'vendor') {
      const userData = { name: 'Zara Thrift Store', type: 'vendor', username: 'vendor' };
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return { success: true, type: 'vendor' };
    }

    if (username === 'user' && password === 'user') {
      const userData = { name: 'Chioma Okeke', type: 'user', username: 'user' };
      setUser(userData);
      localStorage.setItem('currentUser', JSON.stringify(userData));
      return { success: true, type: 'user' };
    }

    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
