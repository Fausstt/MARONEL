import React from 'react';
import { Box } from '@mui/material';
import CaruselBox from '../components/CaruselBox';
import PreviewList from '../components/GridList';

function Home({ previewImg, previewList }) {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 100,
      }}
    >
      <CaruselBox previewImg={previewImg} />

      <PreviewList previewList={previewList} />
    </Box>
  );
}

export default Home;
