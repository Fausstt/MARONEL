import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import CarouselBox from '../components/CarouselBox';
import { product } from '../data/product';

import styles from '../styles/Card.styles'

function Card({ BasketAdd }) {
  const { id } = useParams();
  const [ProductList, setProductList] = useState(product);
  const [Product, setProduct] = useState({ img: [] });
  const [value, setValue] = useState(0);
  const [Quantity, setQuantity] = useState(1);

  const addProduct = () => {
    for (let i of ProductList) {
      if (i.id === id) {
        setProduct(i);
      }
    }
  };

  useEffect(() => {
    addProduct();
  }, []);

  return (
    <Box sx={styles.container}>
      <Typography
        variant='h4'
        sx={styles.title}
        children={Product.title}
      />

      <Box sx={styles.Box}>
        <Box sx={styles.Box__Img}>
          <CarouselBox
            previewImg={Product.img}
            w={'800px'}
            h={'500px'}
            interval={null}
          />
        </Box>

        <Box sx={styles.Box__body}>
          <AppBar
            position='static'
            color='default'
          >
            <Tabs value={value}>
              <Tab
                label='Описание'
                onClick={() => setValue(0)}
              />
              <Tab
                label='Состав'
                onClick={() => setValue(1)}
              />
            </Tabs>
          </AppBar>

          {value ?
            (
              <div>
                {Product.composition}
              </div>
            ) : (
              <div>
                <div>{Product.description}</div>
                <br />
                <div>
                  <u>Вага:</u> {Product.weight}
                  <br />
                  <u>Термин придатности:</u> {Product.shelfLife}
                </div>
              </div>
            )}

          <Box sx={styles.Box__footer}>
            <div style={styles.Box__footer__1}>
              <div>
                Цена <b>{Product.prise}</b> грн
              </div>

              <Box sx={styles.Box__footer__2}>

                <div>Кі-сть</div>
                <Button onClick={() => setQuantity(Quantity - 1)}>
                  <Typography variant='h5'>-</Typography>
                </Button>
                <Typography variant='h6'>{Quantity}</Typography>
                <Button onClick={() => setQuantity(Quantity + 1)}>
                  <Typography variant='h5'>+</Typography>
                </Button>

              </Box>
            </div>

            <div>
              <Button
                onClick={() => BasketAdd(Product)}
                variant='contained'
                children={'добавить в корзину'}
              />
            </div>
            <div>Замовити за телефоном +38 (66) 000 33 88</div>
          </Box>
        </Box>
      </Box>
    </Box >
  );
}

export default Card;
