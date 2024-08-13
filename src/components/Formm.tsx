import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SaveIcon from "@mui/icons-material/Save";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { AddNoteProps } from "./AddButton";

const Formm = ({ handleAddNote }: AddNoteProps) => {
  const [noteTitle, setNoteTitle] = useState<string>("");
  const [noteText, setNoteText] = useState<string>("");
  const [noteCategory, setNoteCategory] = useState<string>("");

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteTitle(event.target.value);
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteText(event.target.value);
  };

  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNoteCategory(event.target.value);
  };

  const handleSave = () => {
    if (noteTitle && noteText && noteCategory) {
      handleAddNote({
        title: noteTitle,
        text: noteText,
        category: noteCategory,
      });
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          onChange={handleChangeTitle}
          id="outlined-required"
          value={noteTitle}
          label="TITLE"
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="TEXT"
          value={noteText}
          onChange={handleChangeText}
          multiline
          rows={4}
        />
        <br />
        <FormControl>
          <RadioGroup
            row
            value={noteCategory}
            onChange={handleChangeCategory}
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="personal"
              control={<Radio />}
              label="Personal"
            />
            <FormControlLabel
              value="business"
              control={<Radio />}
              label="Business"
            />
            <FormControlLabel value="home" control={<Radio />} label="Home" />
          </RadioGroup>
        </FormControl>
        <IconButton
          size="large"
          className="position-absolute bottom-0 end-0"
          onClick={handleSave}
        >
          <SaveIcon color="success" fontSize="inherit" />
        </IconButton>
      </div>
    </Box>
  );
};

export default Formm;
