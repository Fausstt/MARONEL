import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BasketItem from "./BasketItem";

function BasketList() {
    return (
        <Container sx={{ overflow: 'auto' }}>
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />

        </Container>
    )
}

export default BasketList;

