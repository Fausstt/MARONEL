import React, { useState } from "react";
import { Box } from "@mui/material";
import CarouselBox from "../components/CarouselBox";
import PreviewList from "../components/GridList";

function Home({ previewImg, previewList }) {
    const [FullCategory, setFullCategory] = useState([
        {
            category: "Макарун",
            img: "https://scontent-iev1-1.xx.fbcdn.net/v/t1.6435-9/159265655_3843698749082372_7781602593632349880_n.jpg?stp=dst-jpg_s640x640&_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_ohc=k35yR-Ef0mcAX8GXRFS&_nc_ht=scontent-iev1-1.xx&oh=00_AT9M0VmJ0w653_YUbfC17mhB4XIyil9gDL0SGIGcVVbW8A&oe=635CE2A6",
            Value: 1,
        },
        {
            category: "Печево",
            img: "https://via.placeholder.com/130",
            Value: 2,
        },
        {
            category: "Горішок",
            img: "https://via.placeholder.com/130",
            Value: 3,
        },
        {
            category: "Зефір",
            img: "https://via.placeholder.com/130",
            Value: 4,
        },
        {
            category: "Мармелад",
            img: "https://via.placeholder.com/130",
            Value: 5,
        },
        {
            category: "Цукерки",
            img: "https://via.placeholder.com/130",
            Value: 6,
        },
        {
            category: "Мафіни",
            img: "https://via.placeholder.com/130",
            Value: 7,
        },
        {
            category: "Без цукру",
            img: "https://via.placeholder.com/130",
            Value: 8,
        },
    ]);

    return (
        <Box
            style={{
                display: "flex",
                flexDirection: "column",
                gap: 100,
            }}
        >
            <Box
                sx={{
                    padding: " 0 200px",
                }}
            >
                <CarouselBox
                    previewImg={previewImg}
                    w={{ xs: "100%" }}
                    h={{ xs: "650px" }}
                    fade
                />
            </Box>
            <PreviewList previewList={previewList} />
        </Box>
    );
}

export default Home;
