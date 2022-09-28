import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import ProductItem from '../components/ProductItem';
import ProductList from '../components/ProductList';

function Productions(props) {
  return (
    <Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          height: '250px',
        }}
      >
        <Typography
          noWrap
          sx={{
            fontSize: '150px',
            mr: 2,
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          MARONEL
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: 'white',
          borderRadius: 1,
        }}
      >
        <Box>валидация</Box>

        <Divider sx={{ bgcolor: 'black', margin: '20px 0' }} />

        <ProductList />
      </Box>
    </Box>
  );
}

export default Productions;
