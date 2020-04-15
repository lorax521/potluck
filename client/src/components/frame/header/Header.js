import React, { Fragment } from "react";
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

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "0.5rem 5rem",
    background: "#6f732f",
    borderRadius: 0,
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    color: "#fff",
  },
  search: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "40vw",
    // borderRadius: "50px"
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
    // borderRadius: "50px",
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
}));

const Header = ({ isAuthenticated }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    category: "All Recipes",
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
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
      <Fragment>
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
        <div>
          <Link to="/create">
            <IconButton type="add" aria-label="add">
              <AddCircleOutlineIcon className={classes.icon} />
            </IconButton>
          </Link>
        </div>
      </Fragment>
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
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Header);
