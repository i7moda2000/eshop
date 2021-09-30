import React from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "./product/ProductCard";
import useStyles from "./styles";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map(product => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard onAddToCart={onAddToCart} product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
