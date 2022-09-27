import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import ProductItrm from '../components/ProductItrm';

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
          height: '50px',
        }}
      ></Box>
      <Divider sx={{ bgcolor: 'black' }} />
      <ProductItrm/>
    </Box>
  );
}

export default Productions;
