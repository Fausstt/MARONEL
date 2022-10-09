import React from "react";
import { Route, Routes } from "react-router";
import { useState } from "react";
import { Container } from "@mui/material";

import Footer from "./Footer";
import Header from "./Header";
import Home from "../pages/Home";
import ErrorPages from "../pages/ErrorPages";
import Productions from "../pages/Productions";
import Card from "../pages/Card";
import Basket from "./Basket";
import DropMenu from "./UI/DropMenu";

import "../styles/App.scss";

import { previewSlider, previewList } from "../data/data";
import { pages } from "../data/data";

function App(props) {
  const [isBasket, setIsBasket] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <>
        <Header
          pages={pages}
          setOpenMenu={() => setOpenMenu(true)}
          Basket={() => setIsBasket(true)}
        />

        <Container maxWidth="xl">
          <Routes>
            <Route path="*" element={<ErrorPages />} />
            <Route
              path="/"
              element={
                <Home previewImg={previewSlider} previewList={previewList} />
              }
            />
            <Route path="/productions" element={<Productions />} />
            <Route path="/productions/:id" element={<Card />} />
          </Routes>
        </Container>

        <Footer />
      </>
      <Basket open={isBasket} onClose={() => setIsBasket(false)} />
      <DropMenu
        list={pages}
        openMenu={openMenu}
        closeMenu={() => setOpenMenu(false)}
      />
    </>
  );
}

export default App;
