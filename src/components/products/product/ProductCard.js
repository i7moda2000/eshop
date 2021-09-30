import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  IconButton
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
        component={Link}
        to={"/view/" + product.permalink}
      />

      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>

        <Typography gutterBottom variant="subtitle1" component="h3">
          {product.price.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
