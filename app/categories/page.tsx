// app/categories/page.tsx
'use client';

import Link from 'next/link';
import styles from '@/style/Categories.module.css';

export default function CategoriesPage() {
  const categories = [
    {
      id: 'electronics',
      name: 'Electronics',
      icon: '💻',
      description: 'Gadgets, devices, and tech accessories'
    },
    {
      id: 'fashion',
      name: 'Fashion',
      icon: '👕',
      description: 'Clothing, shoes, and accessories'
    },
    {
      id: 'food',
      name: 'Food',
      icon: '🍲',
      description: 'Groceries, meals, and food products'
    },
    {
      id: 'home',
      name: 'Home & Living',
      icon: '🏠',
      description: 'Furniture, decor, and household items'
    },
    {
      id: 'beauty',
      name: 'Beauty',
      icon: '💄',
      description: 'Cosmetics, skincare, and personal care'
    },
    {
      id: 'services',
      name: 'Services',
      icon: '🔧',
      description: 'Professional and personal services'
    }
  ];

  return (
    <div className={styles.categories}>
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionTitle}>Browse Categories</h1>
        <p>Find vendors by category</p>
      

        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <Link 
              href={`/vendors?category=${category.id}`} 
              key={category.id}
              className={styles.categoryCard}
            >
              <div className={styles.categoryIcon}>{category.icon}</div>
              <h2 className={styles.categoryName}>{category.name}</h2>
              <p className={styles.categoryCount}>{category.description}</p>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h2 className={styles.sectionTitle}>Can't find what you're looking for?</h2>
          <p style={{ marginBottom: '1.5rem' }}>Check out all our verified vendors or contact support for assistance.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link href="/vendors" className="btn btn-primary">All Vendors</Link>
            <Link href="/support" className="btn btn-secondary">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
}