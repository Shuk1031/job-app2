import React from 'react';
import Header from '../../components/Header'; 
import './globals.css';

export const metadata = {
  title: '求人検索アプリ',
  description: 'Next.jsとSupabaseを使用した求人検索アプリケーション',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-gray-100">
        <Header /> {/* Headerコンポーネントを使用 */}

        <main className="max-w-7xl mx-auto py-8 px-4">
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;