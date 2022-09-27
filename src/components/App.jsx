import React from 'react';
import { Route, Routes } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import Home from '../pages/Home';
import ErrorPages from '../pages/ErrorPages';
import Productions from '../pages/Productions';

import { previewSlider, previewList } from '../data/data';
import '../styles/App.scss';
import { Container } from '@mui/material';

function App(props) {
  return (
    <>
      <Header />

      <Container maxWidth='xl'>
        <Routes>
          <Route
            path='*'
            element={<ErrorPages />}
          />
          <Route
            path='/'
            element={
              <Home
                previewImg={previewSlider}
                previewList={previewList}
              />
            }
          />
          <Route
            path='/productions'
            element={<Productions />}
          />
        </Routes>
      </Container>
      
      <Footer />
    </>
  );
}

export default App;
