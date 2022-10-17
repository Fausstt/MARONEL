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
import { useEffect } from "react";

const styles = {
    Big: {
        display: { xs: "none", md: "flex" },

        logo: {
            mr: 2,
            flexGrow: 1,
            fontFamily: "monospace",
            color: "inherit",
            fontWeight: 700,
            letterSpacing: ".3rem",
        },
        Link: {
            flexGrow: 1,
            display: "flex",
            gap: 1,

            Button: {
                my: 2,
                color: "white",
                display: "block",
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

        logo: {
            mr: 4,
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
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
    const [w, setW] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setW(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <AppBar position="static" sx={{ mb: "30px" }}>
            <Container maxWidth="xl">
                {/* большой */}
                <Toolbar disableGutters sx={styles.Big}>
                    <Link className="link" to={"/"}>
                        <IconButton
                            variant="h6"
                            sx={styles.Big.logo}
                            children={"MARONEL"}
                        />
                    </Link>
                    <Box sx={styles.Big.Link}>
                        {pages.map((item) => (
                            <Link key={item.id} to={item.href} className="link">
                                <Button
                                    sx={styles.Big.Link.Button}
                                    children={item.label}
                                />
                            </Link>
                        ))}
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

                    <Link className="link" to={"/"} style={styles.Small.logo}>
                        <IconButton
                            variant="h5"
                            sx={styles.Small.logo}
                            children={"MARONEL"}
                        />
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
