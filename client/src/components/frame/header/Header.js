import React, { Fragment, useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import UserButton from "./UserButton";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deactivateEdit } from "../../../actions/edit";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.2rem 0",
    background: "#6f732f",
    borderRadius: 0,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    width: "100%",
    zIndex: "1000",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: 0,
    },
  },
  link: {
    textDecoration: "none",
  },
  title: {
    color: "#fff",
    marginLeft: "2em",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
      padding: 0,
      margin: "0.5em 0",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: 120,
  },
  select: {
    background: "#fff",
    "&::before": {
      border: "0 solid #fff",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  icon: {
    fontSize: "1.7em",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5em",
    },
  },
  loginBtnContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  loginBtn: {
    fontWeight: "bold",
    background: "none",
    boxShadow: "none",
    color: "#fff",
    border: "1px solid #fff",
    marginRight: "2em",
    "&:hover": {
      background: "#696d2c",
    },
  },
  createAccountBtn: {
    boxShadow: "none",
    fontWeight: "bold",
  },
  navIcons: {
    display: "flex",
    alignSelf: "center",
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      bottom: 0,
      background: "#6f732f",
      width: "100%",
      justifyContent: "space-evenly",
    },
  },
  createContainer: {
    alignSelf: "center",
  },
  createBtn: {
    margin: "0 2em 0 3em",
    padding: 0,
    // marginLeft: "3em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
}));

const Header = ({ deactivateEdit }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    category: "All Recipes",
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);
  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const NavIcons = () => {
    return (
      <div className={classes.navIcons}>
        <div>
          <Link to="/">
            <IconButton type="submit" aria-label="home">
              <HomeIcon className={classes.icon} />
            </IconButton>
          </Link>
          <IconButton type="submit" aria-label="favorite">
            <FavoriteIcon className={classes.icon} />
          </IconButton>
          <UserButton />
        </div>
        <div className={classes.createContainer}>
          <Link to="/create">
            <IconButton
              onClick={deactivateEdit}
              type="add"
              aria-label="add"
              className={classes.createBtn}
            >
              <AddCircleOutlineIcon className={classes.icon} />
            </IconButton>
          </Link>
        </div>
      </div>
    );
  };

  const LoginCreateAccount = () => {
    return (
      <div className={classes.loginBtnContainer}>
        <Link to="/login">
          <Button variant="contained" className={classes.loginBtn}>
            Login
          </Button>
        </Link>
        <Link to="/createaccount">
          <Button variant="contained" className={classes.createAccountBtn}>
            Create Account
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <div>
      <Paper elevation={3} className={classes.container}>
        <Link to="/" className={classes.link}>
          <h1 className={classes.title}>POTLUCK</h1>
        </Link>
        <Paper component="form" className={classes.search}>
          <Link to="/search">
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Link>
          <InputBase
            size="small"
            className={classes.input}
            placeholder="Search Recipes"
            inputProps={{ "aria-label": "search recipes" }}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <FormControl
            variant="filled"
            size="small"
            margin="dense"
            className={classes.formControl}
          >
            <InputLabel
              ref={inputLabel}
              htmlFor="filled-category-native-simple"
            >
              Category
            </InputLabel>
            <Select
              native
              size="small"
              className={classes.select}
              value={state.category}
              onChange={handleChange("category")}
              labelWidth={labelWidth}
              inputProps={{
                name: "category",
                id: "filled-category-native-simple",
              }}
            >
              <option value={10}>All Recipes</option>
              <option value={20}>Favorites</option>
              <option value={30}>Group</option>
            </Select>
          </FormControl>
        </Paper>
        {localStorage.token && localStorage.token.length > 0 ? (
          <NavIcons />
        ) : (
          <LoginCreateAccount />
        )}
      </Paper>
    </div>
  );
};

Header.propTypes = {
  deactivateEdit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  editable: state.edit,
});

export default connect(mapStateToProps, { deactivateEdit })(Header);
