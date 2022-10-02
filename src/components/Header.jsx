import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Menu, ShoppingBasket } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from '@mui/material';

import SearchCastom from './UI/SearchCastom';

function Header({ pages, Basket, setOpenMenu }) {
  const [SearchFocus, setSearhFocus] = useState(false);

  return (
    <AppBar
      position='static'
      sx={{ mb: '30px' }}
    >
      <Container maxWidth='xl'>
        {/* большой */}
        <Toolbar
          disableGutters
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          <Link
            className='link'
            to={'/'}
          >
            <IconButton
              variant='h6'
              sx={{
                mr: 4,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'white',
              }}
            >
              MARONEL
            </IconButton>
          </Link>

          <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
            {pages.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className='link'
              >
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  {item.lable}
                </Button>
              </Link>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              gap: 5,
            }}
          >
            <>
              <SearchCastom
                placeholder={'Поиск...'}
                setSearhFocus={setSearhFocus}
              />
            </>
            <IconButton
              color='inherit'
              onClick={Basket}
            >
              <ShoppingBasket />
            </IconButton>
          </Box>
        </Toolbar>

        {/* маленький */}
        <Toolbar
          disableGutters
          sx={{ display: { sx: ' flex', md: 'none' } }}
        >
          <Box sx={{ flexGrow: 2, display: 'flex', gap: 1 }}>
              <IconButton
                onClick={setOpenMenu}
                color='inherit'
              >
                <Menu />
              </IconButton>
          </Box>

          <Link
            className='link'
            to={'/'}
            style={{
              display: `${SearchFocus ? 'none' : 'flex'}`,
              mr: 2,
              flexGrow: 1,
              fontFamily: 'monospace',
              color: 'inherit',
            }}
          >
            <IconButton
              variant='h5'
              sx={{
                mr: 2,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
              }}
            >
              MARONEL
            </IconButton>
          </Link>

          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              gap: 2,
            }}
          >
            <>
              <SearchCastom
                placeholder={'Поиск...'}
                setSearhFocus={setSearhFocus}
              />
            </>

            <IconButton
              color='inherit'
              onClick={Basket}
            >
              <ShoppingBasket />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
