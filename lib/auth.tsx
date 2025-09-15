// lib/auth.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, firebaseSignOut, onAuthStateChanged, FirebaseUser, googleProvider, facebookProvider, signInWithPopup } from './firebase';

// Define User type
type User = {
  id: string;
  email: string;
  full_name?: string;
  role?: 'user' | 'vendor';
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, fullName: string) => Promise<{ error: any, user: any }>;
  signInWithGoogle: () => Promise<{ error: any }>;
  signInWithFacebook: () => Promise<{ error: any }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Listen for Firebase auth state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in
        const userData: User = {
          id: firebaseUser.uid,
          email: firebaseUser.email || '',
          full_name: firebaseUser.displayName || undefined,
          role: 'user' // Default role, can be updated later
        };
        
        setUser(userData);
      } else {
        // User is signed out
        setUser(null);
      }
      
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Sign in with email and password
  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  // Sign up with email and password
  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Create a user object
      const userData = {
        id: userCredential.user.uid,
        email,
        full_name: fullName,
        role: 'user'
      };
      
      // Here you would typically store additional user data in Firestore
      // For now, we'll just return the user data
      
      return { error: null, user: userData };
    } catch (error) {
      return { error, user: null };
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  // Sign in with Facebook
  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
      return { error: null };
    } catch (error) {
      return { error };
    }
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signInWithGoogle,
    signInWithFacebook,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}