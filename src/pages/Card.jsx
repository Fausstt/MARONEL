import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';
import CaruselBox from '../components/CaruselBox';

function Card(props) {
  const [value, setValue] = useState(0);
  const [Quantity, setQuantity] = useState(1);
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
        Макарон із солоною карамеллю
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '900px',
            height: '550px',
          }}
        >
          <ArrowBackIos fontSize='large' />
          <img
            style={{
              objectFit: 'cover',
              height: '500px',
              width: '800px',
              borderRadius: '15px',
            }}
            src='https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/159265655_3843698749082372_7781602593632349880_n.jpg?stp=dst-jpg_s640x640&_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=k35yR-Ef0mcAX8GXRFS&_nc_ht=scontent-iev1-1.xx&oh=00_AT9M0VmJ0w653_YUbfC17mhB4XIyil9gDL0SGIGcVVbW8A&oe=635CE2A6'
            alt=''
          />
          <ArrowForwardIos fontSize='large' />
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
            <div style={{ fontSize: '15px' }}>
              <ui>
                <li>Миндальная мука — 150 гр.</li>
                <li>Сахарная пудра — 150 гр.</li>
                <li>Сахар — 150 гр.</li>
                <li>Вода — 50 гр.</li>
                <li>Белок — 50+50 гр.</li>
                <li>Краситель</li>
              </ui>
            </div>
          ) : (
            <div>
              <div>
                Незалежно від погоди та настрою — цей макарон завжди у топі! ⠀
                Такий простий смак, а скільки радості він приносить! Макарон із
                солоною карамеллю, скільки б нових смаків не з'являлося, цей
                завжди залишиться у фаворитах❤️ ⠀ Така ніжна і тягуча карамель,
                допомогає залишити думки про реальність та поринути у солодкі
                теплі спогади ✨
              </div>
              <br />
              <div>
                <u>Вага:</u> 75 г
              </div>
              <div>
                <u>Термин придатности:</u> 1 місяць
              </div>
            </div>
          )}
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
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
                Цена <b>54</b> грн
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
