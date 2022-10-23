import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import ProductMenu from "../components/ProductMenu";
import Validation from "../components/Validation";

import { product } from "../data/product";

const styles = {
    BoxText: {
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        height: "250px",

        Text: {
            fontSize: "150px",
            mr: 2,
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "rgba(255,255,255,0.5)",
        },
    },
    List: {
        bgcolor: "white",
        borderRadius: 1,
    },
    Divider: {
        bgcolor: "black",
        margin: "20px 0",
    },
};

function Productions({ BasketAdd, BasketList }) {
    const [Product, setProduct] = useState(product);

    const [FullCategory, setFullCategory] = useState([]);
    const [category, setCategory] = useState("");

    const AddName = () => {
        let categoric = [];
        let result = [];
        product.map((i) => {
            if (!categoric.includes(i.category)) {
                categoric.push(i.category);
                result.push({
                    category: i.category,
                    img: i.img[0],
                    Value: result.length + 1,
                });
            }
        });
        setFullCategory(result);
    };

    useEffect(() => {
        AddName();
    }, []);

    return (
        <Box>
            <Box sx={styles.BoxText}>
                <Typography
                    noWrap
                    sx={styles.BoxText.Text}
                    children={"MAROONEL"}
                />
            </Box>

            <Box sx={styles.List}>
                {category ? (
                    <>
                        <Validation
                            FullCategory={FullCategory}
                            product={product}
                            setProduct={setProduct}
                            category={category}
                            setCategory={setCategory}
                        />

                        <ProductList
                            Product={Product}
                            BasketAdd={BasketAdd}
                            BasketList={BasketList}
                        />
                    </>
                ) : (
                    <ProductMenu
                        FullCategory={FullCategory}
                        setCategory={setCategory}
                    />
                )}
            </Box>
        </Box>
    );
}

export default Productions;
