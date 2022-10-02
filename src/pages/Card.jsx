import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import CaruselBox from '../components/CaruselBox';
import { product } from '../data/product';

function Card(props) {
  const { id } = useParams();
  const [ProductList, setProductList] = useState(product);
  const [Product, setProduct] = useState({img: []});
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
    <Box
      sx={{
        bgcolor: 'white',
        borderRadius: 1,
        padding: 4,
      }}
    >
      <Typography
        variant='h4'
        sx={{ pb: '50px' }}
      >
        {Product.title}
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: { xs: 'center', lg: 'normal' },
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '900px',
            height: '550px',
          }}
        >
          <CaruselBox 
          previewImg={Product.img} 
          w={'800px'}
          h={'500px'}
          interval={null}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            width: '450px',
          }}
        >
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

          {value ? (
            <List>
              {Product.composition.map((item) => (
                <ListItem key={item.name}>
                  <ListItemText>
                    {item.name} - {item.wig}
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          ) : (
            <div>
              <div>{Product.description}</div>
              <br />
              <div>
                <u>Вага:</u> {Product.weight}
              </div>
              <div>
                <u>Термин придатности:</u> {Product.shelfLife}
              </div>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '30px',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                Цена <b>{Product.prise}</b> грн
              </div>
              <div
                style={{
                  display: 'flex',
                  gap: '15px',
                  alignItems: 'center',
                }}
              >
                <div>Кі-сть</div>
                <Button onClick={() => setQuantity(Quantity - 1)}>
                  <Typography variant='h5'>-</Typography>
                </Button>
                <Typography variant='h6'>{Quantity}</Typography>
                <Button onClick={() => setQuantity(Quantity + 1)}>
                  <Typography variant='h5'>+</Typography>
                </Button>
              </div>
            </div>
            <div>
              <Button variant='contained'>добавить в корзину</Button>
            </div>
            <div>Замовити за телефоном +38 (66) 000 33 88</div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
