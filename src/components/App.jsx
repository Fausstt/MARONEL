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
  // Корзина
  const [BasketList, setBasketList] = useState([])
  // добавить в корзину
  const BasketAdd = (Product) => setBasketList([...BasketList, Product])
  // console.log(BasketList.length);
  return (
    <>
      <>
        <Header
          pages={pages}
          setOpenMenu={() => setOpenMenu(true)}
          Basket={() => setIsBasket(true)}
          BasketList={BasketList}
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
            <Route path="/productions" element={<Productions BasketAdd={BasketAdd} />} />
            <Route path="/productions/:id" element={<Card BasketAdd={BasketAdd} />} />
          </Routes>
        </Container>

        <Footer />
      </>
      <Basket
        BasketList={BasketList}
        open={isBasket}
        onClose={() => setIsBasket(false)}
      />
      <DropMenu
        list={pages}
        openMenu={openMenu}
        closeMenu={() => setOpenMenu(false)}
      />
    </>
  );
}

export default App;
