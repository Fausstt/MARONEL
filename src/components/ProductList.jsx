import { Grid } from "@mui/material";
import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ BasketAdd, BasketList, Product }) {
    return (
        <Grid container spacing={5} sx={{ padding: 2 }}>
            {Product.map((item) => (
                <Grid
                    key={item.id}
                    item
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                >
                    <ProductItem
                        product={item}
                        BasketAdd={BasketAdd}
                        BasketList={BasketList}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default ProductList;
