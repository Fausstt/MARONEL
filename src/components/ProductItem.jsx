import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
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
    Button:{
      fontWeight: "700",
      transitionDuration: "0.5s",
      "&:hover": {
        bgcolor: "#FFDFD0",
        borderColor: "#781026",
        color: "black",
    }
  },
};

function ProductItem({ product, BasketAdd, Basket }) {
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
        <Button
          variant="contained"
          sx={styles.Card.Button}
          onClick={() => BasketAdd(product)}
          children={'Добавить в корзину'}
        />
      </CardActions>
    </Card>
  );
}

export default ProductItem;
