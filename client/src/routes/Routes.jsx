import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from '../components/Loader';
import NotFound from './Routes.lazy';
import Home from '../components/Home';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import App from '../container/App';

const AppRoutes = () => (
  <>
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
          <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />  
      </Suspense>
    </BrowserRouter>
  </>
);
export default AppRoutes;
