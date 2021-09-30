import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { Paper, Typography, Divider, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";

const View = ({ onFetchProduct, id }) => {
  const classes = useStyles();
  const [product, setProduct] = useState({});

  const handleFetchProductById = async productLink => {
    const data = await commerce.products.retrieve(productLink, {
      type: "permalink"
    });

    setProduct(data);
    // console.log(data);
  };

  useEffect(() => {
    handleFetchProductById(id);

    // eslint-disable-next-line
  }, [id]);

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />

      <Paper className={classes.paper}>
        <div className={classes.mediaCont}>
          <img
            className={classes.media}
            alt={product?.name}
            src={product?.media?.source}
          />
        </div>

        <Divider />

        <Typography gutterBottom variant="h5" component="h2">
          {product?.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {product?.price?.formatted_with_symbol}
        </Typography>
        <Typography
          dangerouslySetInnerHTML={{ __html: product?.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
        <div className={classes.button}>
          <Button
            component={Link}
            to="/"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Go Back
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default View;

//
// {product.id}
// {product.permalink}
// {console.log("media test", product.media.source)}
// {console.log("product", product)}
