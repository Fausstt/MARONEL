import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, ShoppingBasket } from "@mui/icons-material";
import {
    AppBar,
    Badge,
    Box,
    Button,
    Container,
    IconButton,
    Toolbar,
} from "@mui/material";

import SearchCustom from "./UI/SearchCustom";
import Logo from "./UI/Logo";

const styles = {
    Big: {
        display: { xs: "none", md: "flex" },
        justifyContent: "space-between",

        Link: {
            display: "flex",
            gap: 1,

            Button: {
                my: 2,
                color: "white",
            },
        },
        Button: {
            display: "flex",
            gap: 5,
        },
    },
    Small: {
        display: { sx: " flex", md: "none" },
        justifyContent: "space-between",

        icon: {
            mr: 15,
        },

        Button: {
            flexGrow: 0,
            display: "flex",
            gap: 2,
        },
    },
};

function Header({ pages, Basket, setOpenMenu, BasketList }) {
    const [SearchFocus, setSearchFocus] = useState(false);

    return (
        <AppBar position="sticky" sx={{ mb: "30px" }}>
            <Container maxWidth="xl">
                {/* большой */}
                <Toolbar disableGutters sx={styles.Big}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <Link className="link" to={"/"}>
                            <Button
                                children={
                                    <Logo h={"30px"} onClick={setOpenMenu} />
                                }
                            />
                        </Link>

                        <Box sx={styles.Big.Link}>
                            {pages.map((item) => (
                                <Link
                                    key={item.id}
                                    to={item.href}
                                    className="link"
                                >
                                    <Button
                                        sx={styles.Big.Link.Button}
                                        children={item.label}
                                    />
                                </Link>
                            ))}
                        </Box>
                    </Box>
                    <Box sx={styles.Big.Button}>
                        <SearchCustom
                            placeholder={"Поиск..."}
                            setSearchFocus={setSearchFocus}
                        />

                        <Badge
                            color="secondary"
                            badgeContent={BasketList.length}
                        >
                            <IconButton
                                color="inherit"
                                onClick={Basket}
                                children={<ShoppingBasket />}
                            />
                        </Badge>
                    </Box>
                </Toolbar>

                {/* маленький */}
                <Toolbar disableGutters sx={styles.Small}>
                    <IconButton
                        sx={styles.Small.icon}
                        onClick={setOpenMenu}
                        color="inherit"
                        children={<Menu />}
                    />

                    <Link className="link" to={"/"}>
                        <IconButton children={<Logo />} />
                    </Link>

                    <Box sx={styles.Small.Button}>
                        <SearchCustom
                            placeholder={"Поиск..."}
                            setSearchFocus={setSearchFocus}
                        />

                        <Badge
                            color="secondary"
                            badgeContent={BasketList.length}
                        >
                            <IconButton
                                color="inherit"
                                onClick={Basket}
                                children={<ShoppingBasket />}
                            />
                        </Badge>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
