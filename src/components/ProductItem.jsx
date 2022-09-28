import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';

function ProductItem({ product }) {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 250,
        padding: 2,
        textAlign: 'center',
        '&:hover': {
          boxShadow:
            '1px 1px .1em rgba(0, 0, 0, 0.5), -1px -1px .1em rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image={product.img}
          alt='фото'
        />
        <CardContent
          sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          <Typography>{product.title}</Typography>
          <Typography>{product.prise} грн</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant='outlined'
          sx={{
            transitionDuration: '0.5s',
            '&:hover': {
              bgcolor: '#781026',
              borderColor: '#781026',
              color: 'white',
            },
          }}
        >
          Добавить в корзину
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductItem;
