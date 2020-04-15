import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { logout } from "../../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {},
  button: {
    color: "#fff",
  },
  icon: {
    fontSize: "1.7em",
    color: "#fff",
  },
});

const UserButton = ({ logout }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    const name = e.target.getAttribute("name");
    switch (name) {
      case "profile":
        console.log("profile dog");
        break;
      case "groups":
        console.log("groups dog");
        break;
      case "logout":
        logout();
        break;
      default:
        console.log("nada");
    }
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <IconButton
        type="submit"
        aria-label="user"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AccountCircleIcon className={classes.icon} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <MenuItem name="profile" onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem name="groups" onClick={handleClose}>
          My Groups
        </MenuItem>
        <MenuItem name="logout" onClick={(e) => handleClose(e)}>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

UserButton.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, { logout })(UserButton);
