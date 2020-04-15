import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { addImage } from "../../actions/image";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  container: {
    width: 400,
    height: 400,
    background: "#d3d3d3",
    display: "flex",
    borderRadius: "2px",
  },
  image: {
    width: 400,
    height: 400,
    position: "absolute",
    objectFit: "cover",
    borderWidth: 0,
  },
  iconImage: {
    color: "#fff",
    margin: "auto",
    background: "rgba(0, 0, 0, 0.12)",
    transition: "0.1s all",
    "&:hover": {
      background: "rgba(0, 0, 0, 0.22)",
    },
  },
  iconImageSVG: {
    fontSize: "3rem",
  },
  hidden: {
    display: "none",
  },
});

const Image = ({ image, addImage }) => {
  const classes = useStyles();
  const inputRef = React.useRef();
  const openFileExplorer = () => {
    inputRef.current.click();
  };
  const addToStore = () => {
    addImage(inputRef.current.files[0]);
  };
  return (
    <div className={classes.container}>
      {inputRef.current ? (
        <img
          className={classes.image}
          src={inputRef.current ? URL.createObjectURL(image) : ""}
          alt=""
        ></img>
      ) : (
        <div className={classes.image} />
      )}
      <input
        ref={inputRef}
        type="file"
        name="recipe"
        className={classes.hidden}
        onChange={addToStore}
      ></input>
      <IconButton
        type="add"
        className={classes.iconImage}
        aria-label="add"
        onClick={openFileExplorer}
      >
        <AddCircleOutlineIcon className={classes.iconImageSVG} />
      </IconButton>
    </div>
  );
};

Image.propTypes = {
  addImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  image: state.image,
});

export default connect(mapStateToProps, {
  addImage,
})(Image);
