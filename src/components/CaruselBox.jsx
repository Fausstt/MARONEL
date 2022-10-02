import { Box } from '@mui/material';
import React from 'react';
import { Carousel } from 'react-bootstrap';

function CaruselBox({
  w = '1500px',
  h = '660px',
  previewImg,
  fade,
  interval = '5000',
}) {
  return (
    <Box
      sx={{
        width: `${w}`,
        height: `${h}`,
      }}
    >
      <Carousel
        interval={interval}
        indicators={false}
        fade={fade}
      >
        {previewImg.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              style={{
                borderRadius:'15px',
                objectFit: 'cover',
                width: `${w}`,
                height: `${h}`,
              }}
              className='d-block w-100'
              src={item}
              alt={index}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Box>
  );
}

export default CaruselBox;
