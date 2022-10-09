import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Menu, ShoppingBasket } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";

import SearchCustom from "./UI/SearchCustom";
import { useEffect } from "react";

function Header({ pages, Basket, setOpenMenu }) {
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
        <Toolbar disableGutters sx={{ display: { xs: "none", md: "flex" } }}>
          <Link className="link" to={"/"}>
            <IconButton
              variant="h6"
              sx={{
                mr: 4,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "white",
              }}
              children={"MARONEL"}
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: "flex", gap: 1 }}>
            {pages.map((item) => (
              <Link key={item.id} to={item.href} className="link">
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {item.label}
                </Button>
              </Link>
            ))}
            {w}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              gap: 5,
            }}>
            <>
              <SearchCustom
                placeholder={"Поиск..."}
                setSearchFocus={setSearchFocus}
              />
            </>
            <IconButton
              color="inherit"
              onClick={Basket}
              children={<ShoppingBasket />}
            />
          </Box>
        </Toolbar>

        {/* маленький */}
        <Toolbar disableGutters sx={{ display: { sx: " flex", md: "none" } }}>
          <Box sx={{ flexGrow: 2, display: "flex", gap: 1 }}>
            <IconButton onClick={setOpenMenu} color="inherit">
              <Menu />
            </IconButton>
          </Box>

          <Link
            className="link"
            to={"/"}
            style={{
              mr: 2,
              flexGrow: 1,
              fontFamily: "monospace",
              color: "inherit",
            }}>
            <IconButton
              variant="h5"
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
              }}
              children={"MARONEL"}
            />
          </Link>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              gap: 2,
            }}>
            <>
              <SearchCustom
                placeholder={"Поиск..."}
                setSearchFocus={setSearchFocus}
              />
            </>

            <IconButton
              color="inherit"
              onClick={Basket}
              children={<ShoppingBasket />}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
