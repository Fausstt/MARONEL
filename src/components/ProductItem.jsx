import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const styles = {
    Card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 250,
        padding: 2,
        textAlign: "center",
        bgcolor: "#FFDFD0",
        borderRadius: "15px",
        "&:hover": {
            boxShadow:
                "1px 1px .1em rgba(0, 0, 0, 0.5), -1px -1px .1em rgba(0, 0, 0, 0.5)",

            Context: {
                display: "flex",
                flexDirection: "column",
                gap: "20px",
            },
        },
    },
};

function ProductItem({ product, BasketAdd, BasketList }) {
    const [AddedBasket, setAddedBasket] = useState(false);

    const addProduct = () => {
        if (BasketList.length) {
            for (let i of BasketList) {
                if (i.id === product.id) {
                    setAddedBasket(true);
                    break;
                } else setAddedBasket(false);
            }
        } else setAddedBasket(false);
    };

    useEffect(() => {
        addProduct();
    }, [BasketList]);

    return (
        <Card sx={styles.Card}>
            <Link className="link" to={`/productions/${product.id}`}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.img[0]}
                        alt="фото"
                    />
                    <CardContent sx={styles.Card.Context}>
                        <Typography>{product.title}</Typography>
                        <Typography>{product.prise} грн</Typography>
                    </CardContent>
                </CardActionArea>
            </Link>

            <CardActions>
                {AddedBasket ? (
                    <Button
                        onClick={() => BasketAdd(product)}
                        variant="contained"
                        color={"BasketButton"}
                        children={"Вже в кошику"}
                    />
                ) : (
                    <Button
                        onClick={() => BasketAdd(product)}
                        variant="contained"
                        color={"primary"}
                        children={"додати в кошик"}
                    />
                )}
            </CardActions>
        </Card>
    );
}

export default ProductItem;
