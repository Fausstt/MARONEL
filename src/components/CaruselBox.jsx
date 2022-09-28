import { Box } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';

function CaruselBox({ w = 1500, h = 660, previewImg }) {
  return (
    <Box>
      <Carousel
        indicators={false}
        fade
      >
        {previewImg.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              style={{
                objectFit:'cover',
                width:'1488px',
                height:'660px',
              }}
              className='d-block w-100'
              src={item.img}
              alt={item.lable}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
}

export default CaruselBox;
