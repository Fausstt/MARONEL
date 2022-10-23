import { Box } from "@mui/material";
import React from "react";
import { Carousel } from "react-bootstrap";

function CarouselBox({ w, h, previewImg, fade, interval = "5000" }) {
    const styles = {
        Carousel: {
            Item: {
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "block",
                width: w,
                height: h,
                borderRadius: "15px",
            },
        },
    };
    return (
        <Carousel
            style={styles.Carousel}
            interval={interval}
            indicators={false}
            fade={fade}
        >
            {previewImg.map((item, index) => (
                <Carousel.Item
                    key={index}
                    children={
                        <Box
                            sx={{
                                ...styles.Carousel.Item,
                                backgroundImage: `url(${item})`,
                            }}
                        />
                    }
                />
            ))}
        </Carousel>
    );
}

export default CarouselBox;
