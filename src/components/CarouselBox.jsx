import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselBox({
  w,
  h,
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
    // <div>
    <Carousel interval={interval} indicators={false} fade={fade}>
      {previewImg.map((item, index) => (
        <Carousel.Item
          key={index}
          children={<img style={CarouselStyle} src={item} alt={index} />}
        />
      ))}
    </Carousel>
    // {/* </div> */}
  );
}

export default CarouselBox;
