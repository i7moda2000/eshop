import React from "react";
import { Container, Typography, Button, List } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import CartItem from "./cartItem/CartItem";

const Cart = ({
  cart,
  onAddToCart,
  onEmptyCart,
  onRemoveFromCart,
  onUpdateCart,
  onDeleteCart
}) => {
  const classes = useStyles();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  if (!cart.line_items) return "Loading";

  const renderCart = () => (
    <React.Fragment>
      {cart.line_items.map(lineItem => (
        <List className={classes.root} key={lineItem.id}>
          <CartItem
            productInfo={lineItem}
            onRemoveFromCart={onRemoveFromCart}
            onUpdateCart={onUpdateCart}
          />
        </List>
      ))}

      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={onEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={onDeleteCart}
          >
            Delete cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
