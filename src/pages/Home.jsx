import React from "react";
import { Box } from "@mui/material";
import CarouselBox from "../components/CarouselBox";
import PreviewList from "../components/GridList";

function Home({ previewImg, previewList }) {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 100,
      }}>
      <CarouselBox previewImg={previewImg} w={"1550px"} h={"660px"} fade />

      <PreviewList previewList={previewList} />
    </Box>
  );
}

export default Home;
