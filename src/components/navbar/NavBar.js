import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const NavBar = ({ itemsCount }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            Commerce.js
          </Typography>
          <div className={classes.grow} />

          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge badgeContent={itemsCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
