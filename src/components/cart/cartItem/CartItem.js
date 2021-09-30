import React from "react";
import useStyles from "./styles";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Button,
  Typography
} from "@material-ui/core";
import { DeleteRounded } from "@material-ui/icons";

const CartItem = ({ productInfo, onRemoveFromCart, onUpdateCart }) => {
  const { id, name, media, price, quantity } = productInfo;
  // console.log(productInfo);

  const classes = useStyles();
  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <Avatar alt={name} src={media.source} />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={price.formatted_with_symbol} />

      <div className={classes.buttons}>
        <Button
          type="button"
          size="small"
          onClick={() => onUpdateCart(id, quantity - 1)}
        >
          -
        </Button>
        <Typography>&nbsp;{quantity}&nbsp;</Typography>
        <Button
          type="button"
          size="small"
          onClick={() => onUpdateCart(id, quantity + 1)}
        >
          +
        </Button>
      </div>
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="comments"
          onClick={() => onRemoveFromCart(id)}
        >
          <DeleteRounded />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default CartItem;
