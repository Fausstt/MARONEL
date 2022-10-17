import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import ProductList from "../components/ProductList";

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
    return (
        <Box>
            <Box sx={styles.BoxText}>
                <Typography
                    noWrap
                    sx={styles.BoxText.Text}
                    children={"MARONEL"}
                />
            </Box>

            <Box sx={styles.List}>
                <Box>валидация</Box>

                <Divider sx={styles.Dividers} />

                <ProductList BasketAdd={BasketAdd} BasketList={BasketList} />
            </Box>
        </Box>
    );
}

export default Productions;
