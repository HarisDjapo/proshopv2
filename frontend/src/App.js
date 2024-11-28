import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Outlet /> {/* This renders the content based on the route */}
      </main>
      <Footer />
    </>
  );
};

export default App;
