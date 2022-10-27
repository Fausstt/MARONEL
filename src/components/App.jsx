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
import Basket from "./Basket/Basket";
import DropMenu from "./UI/DropMenu";

import "../styles/App.scss";

import { previewSlider, previewList } from "../data/data";
import { pages } from "../data/data";

function App(props) {
    const [isBasket, setIsBasket] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    // Корзина
    const [BasketList, setBasketList] = useState([]);
    // добавить в корзину
    const BasketAdd = (Product) => {
        for (let i of BasketList) {
            if (i.id === Product.id) {
                setBasketList(
                    BasketList.filter((item) => item.id !== Product.id)
                );
                return;
            }
        }
        setBasketList([...BasketList, { ...Product, Quantity: 1 }]);
    };
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
                        {/* <Route path="*" element={<ErrorPages />} /> */}
                        <Route
                            path="*"
                            element={
                                <Home
                                    previewImg={previewSlider}
                                    previewList={previewList}
                                />
                            }
                        />
                        <Route
                            path="/productions"
                            element={
                                <Productions
                                    BasketAdd={BasketAdd}
                                    BasketList={BasketList}
                                />
                            }
                        />
                        <Route
                            path="/productions/:id"
                            element={
                                <Card
                                    BasketAdd={BasketAdd}
                                    Basket={Basket}
                                    BasketList={BasketList}
                                />
                            }
                        />
                    </Routes>
                </Container>

                <Footer />
            </>
            <Basket
                BasketAdd={BasketAdd}
                BasketList={BasketList}
                setBasketList={setBasketList}
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
