import React, { useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";
import { editTitle } from "../../actions/title";
import { editDescription } from "../../actions/description";
import { editTags } from "../../actions/categories";
import Image from "./Image";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  profile: {
    display: "flex",
    justifyContent: "flex-start",
  },
  category: {
    marginBottom: "2rem",
    minWidth: "8rem",
    "&::before": {
      border: "none",
      minHeight: "2.5rem",
      minWidth: "4rem",
    },
  },
  description: {
    width: "40rem",
    margin: "1em 0",
  },
  sectionHeader: {
    color: "#757575",
    borderBottom: "2px solid #e9e9e9",
    display: "flex",
    margin: "2em 0",
  },
  sectionTitle: {
    marginRight: "2em",
  },
  profileContent: {
    marginLeft: "5rem",
    maxWidth: "40rem",
  },
  tags: {
    border: "none",
    "&::before": {
      border: "none",
    },
  },
  chips: {
    display: "flex",
    alignItems: "center",
    userSelect: "none",
  },
  chip: {
    margin: "0 0.5rem",
    color: "#fff",
    fontWeight: "bold",
    background: "#909090",
  },
  chipLikes: {
    color: "#ff0000",
    margin: "0 0.5rem",
  },
  chipLikesCount: {
    fontWeight: "bold",
  },
  formControl: {
    height: "3.7em",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Indian",
  "Italian",
  "Thai",
  "Mexican",
  "Soup",
  "Vegetarian",
  "Vegan",
  "Holiday",
];

function getStyles(name, tagvalues, theme) {
  return {
    fontWeight:
      tagvalues.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Profile = ({
  title,
  tags,
  description,
  editTitle,
  editDescription,
  editTags,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [tagsvalues, setTagvalues] = React.useState([]);

  useEffect(() => {
    setTagvalues([...tags]);
  }, []);

  const handleChange = (e) => {
    setTagvalues(e.target.value);
    editTags(e.target.value);
  };

  const Tags = () => {
    return (
      <div className={classes.chips}>
        <FormControl className={classes.formControl} variant="outlined">
          <InputLabel id="demo-mutiple-chip-label">Add Tags</InputLabel>
          <Select
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={tagsvalues}
            onChange={handleChange}
            className={classes.category}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected) => (
              <div className={classes.chips}>
                {selected.map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, tagsvalues, theme)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  };

  return (
    <div className={classes.profile}>
      <Image />
      <div className={classes.profileContent}>
        <TextField
          id="outlined-basic"
          label="Recipe Title"
          defaultValue={title}
          variant="outlined"
          size="small"
          onChange={(e) => editTitle(e.target.value)}
          className={classes.commentField}
        />
        <div className={classes.sectionHeader}>
          <h3 className={classes.sectionTitle}>Description</h3>
          <Tags />
        </div>
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows="4"
          value={description}
          variant="outlined"
          className={classes.description}
          onChange={(e) => editDescription(e.target.value)}
        />
      </div>
    </div>
  );
};

Profile.propTypes = {
  editTitle: PropTypes.func.isRequired,
  editDescription: PropTypes.func.isRequired,
  editTags: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  title: state.title,
  tags: state.tags,
  description: state.description,
});

export default connect(mapStateToProps, {
  editTitle,
  editDescription,
  editTags,
})(Profile);
