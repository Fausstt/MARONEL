import React from 'react';
import { Route, Routes } from 'react-router';
import { useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import Home from '../pages/Home';
import ErrorPages from '../pages/ErrorPages';
import Productions from '../pages/Productions';

import { previewSlider, previewList } from '../data/data';
import '../styles/App.scss';
import { Container } from '@mui/material';
import Basket from './Basket';
import Card from '../pages/Card';

function App(props) {
  const [isBasket, setIsBascet] = useState(false);
  return (
    <>
      <>
        <Header Basket={() => setIsBascet(true)} />

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
            <Route
              path='/productions/id'
              element={<Card />}
            />
          </Routes>
        </Container>

        <Footer />
      </>
      <Basket
        open={isBasket}
        onClose={() => setIsBascet(false)}
      />
    </>
  );
}

export default App;
