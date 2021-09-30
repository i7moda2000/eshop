import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
    display: "flex",
    justifyContent: "center"
  },
  media: {
    height: "100%"
    // paddingTop: "56.25%" // 16:9
  },
  mediaCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end"
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between"
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 60
    }
  },
  button: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));
