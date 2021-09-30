import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Products, NavBar, Cart, NotFound, View, CheckOut } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState({});
  const [cart, setCart] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };

  const handleAddToCart = async (productId, qty) => {
    const { cart } = await commerce.cart.add(productId, qty);

    setCart(cart);
  };

  const handleRemovefromCart = async productId => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  const handleUpdateCart = async (productId, qty) => {
    const { cart } = await commerce.cart.update(productId, { quantity: qty });
    setCart(cart);
  };

  const handleDeleteCart = async () => {
    const { cart } = await commerce.cart.delete();
    setCart(cart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
    } catch (e) {
      setErrorMessage(e.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();

    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <NavBar itemsCount={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <Products products={products} onAddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            onUpdateCart={handleUpdateCart}
            onEmptyCart={handleEmptyCart}
            onRemoveFromCart={handleRemovefromCart}
            onAddToCart={handleAddToCart}
            onDeleteCart={handleDeleteCart}
          />
        </Route>
        <Route
          exact
          path="/View/:id"
          render={({ match }) => {
            return <View id={match.params.id} />;
          }}
        />

        <Route exact path="/checkout">
          <CheckOut
            onCaptureCheckout={handleCaptureCheckout}
            cart={cart}
            order={order}
            error={errorMessage}
          />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
