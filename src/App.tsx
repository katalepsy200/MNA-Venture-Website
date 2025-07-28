import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import PopularProductsSection from './components/PopularProductsSection';
import PremiumChoiceSection from './components/PremiumChoiceSection';
import PortfolioSection from './components/PortfolioSection';
import ReadyToStartSection from './components/ReadyToStartSection';
import ComingSoon from './components/ComingSoon';
import Loader from './components/Loader';

import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import MissionVisionGoalsSection from './components/MissionVisionGoalsSection';
import MoreTradersSection from './components/MoreTradersSection';
import Navbar from './components/Navbar';
import NewNavbar from './components/NewNavbar';
import SimpleHeader from './components/SimpleHeader';
import Contact from './components/Contact';
import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Satoshi', 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  }
`;

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // const handleLoadingComplete = () => {
  //   setIsLoading(false);
  // };

  // if (isLoading) {
  //   return <Loader onLoadingComplete={handleLoadingComplete} />;
  // }

  return (
    <div className="App">
      <GlobalStyle />
      {/* <Header /> */}
      <SimpleHeader />
      <Routes>
        <Route path="/" element={
          <>
            <MainSection />
            <MissionVisionGoalsSection />
            <PopularProductsSection />
            <PremiumChoiceSection />
            <Testimonials />
            <PortfolioSection />
            <ReadyToStartSection />
          </>
        } />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
