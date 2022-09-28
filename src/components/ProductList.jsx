import { Grid } from '@mui/material';
import React from 'react';
import ProductItem from './ProductItem';

import { product } from '../data/product';

function ProductList(props) {
  return (
    <Grid
    container
    spacing={5}
    sx={{padding:2}}
    >
      {product.map((item) => (
        <Grid
          key={item.id}
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
          xs={3}
        >
          <ProductItem product={item} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
