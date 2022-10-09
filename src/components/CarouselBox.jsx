import { Box } from "@mui/material";
import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselBox({
  w = "1500px",
  h = "660px",
  previewImg,
  fade,
  interval = "5000",
}) {
  const CarouselStyle = {
    borderRadius: "15px",
    objectFit: "cover",
    width: `${w}`,
    height: `${h}`,
    display: "block",
  };
  return (
    <Box>
      <Carousel interval={interval} indicators={false} fade={fade}>
        {previewImg.map((item, index) => (
          <Carousel.Item
            key={index}
            children={<img style={CarouselStyle} src={item} alt={index} />}
          />
        ))}
      </Carousel>
    </Box>
  );
}

export default CarouselBox;
