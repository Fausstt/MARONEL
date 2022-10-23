import { AppBar, Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import CarouselBox from "../components/CarouselBox";
import { product } from "../data/product";

import styles from "../styles/Card.styles";

function Card({ BasketAdd, BasketList }) {
    const { id } = useParams();
    const [ProductList, setProductList] = useState(product);
    const [Product, setProduct] = useState({ img: [] });
    const [AddedBasket, setAddedBasket] = useState(false);

    const [value, setValue] = useState(0);

    function addProduct() {
        for (let i of ProductList) {
            if (i.id === id) {
                setProduct(i);
            }
        }
    }
    function ddedBasket() {
        if (BasketList.length) {
            for (let i of BasketList) {
                if (i.id === Product.id) {
                    setAddedBasket(true);
                    break;
                } else setAddedBasket(false);
            }
        } else setAddedBasket(false);
    }

    useEffect(() => {
        addProduct();
        ddedBasket();
    }, [BasketList, id, Product]);

    return (
        <Box sx={styles.container}>
            <Typography
                variant="h4"
                sx={styles.title}
                children={Product.title}
            />

            <Box sx={styles.Box}>
                <Box sx={styles.Box__Img}>
                    <CarouselBox
                        previewImg={Product.img}
                        w={{ xs: "500px", md: "800px" }}
                        h={{ xs: "350px", md: "500px" }}
                        interval={null}
                    />
                </Box>

                <Box sx={styles.Box__body}>
                    <AppBar position="static" color="default">
                        <Tabs value={value}>
                            <Tab label="Описание" onClick={() => setValue(0)} />
                            <Tab label="Состав" onClick={() => setValue(1)} />
                        </Tabs>
                    </AppBar>

                    {value ? (
                        <div>{Product.composition}</div>
                    ) : (
                        <div>
                            <div>{Product.description}</div>
                            <br />
                            <div>
                                <u>Вага:</u> {Product.weight} г
                                <br />
                                <u>Термин придатности:</u> {Product.shelfLife}{" "}
                                днів
                            </div>
                        </div>
                    )}

                    <Box sx={styles.Box__footer}>
                        <div style={styles.Box__footer__1}>
                            <div>
                                Цена: <b>{Product.prise}</b> грн
                            </div>
                        </div>

                        <div>
                            {AddedBasket ? (
                                <Button
                                    onClick={() => BasketAdd(Product)}
                                    variant="contained"
                                    color={"BasketButton"}
                                    children={"Вже в кошику"}
                                />
                            ) : (
                                <Button
                                    onClick={() => BasketAdd(Product)}
                                    variant="contained"
                                    color={"primary"}
                                    children={"додати в кошик"}
                                />
                            )}
                        </div>
                        <div>Замовити за телефоном +38 (66) 000 33 88</div>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Card;
