import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <HeaderComponent />
      <main className="content">
        {children}
      </main>
      <FooterComponent />
    </div>
  );
};

export default MainLayout;
