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

export default function FormPropsTextFields() {
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
          id="outlined-required"
          label="TITLE"
          defaultValue=""
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="TEXT"
          multiline
          rows={4}
          defaultValue=""
        />
        <br />
        <TextField
          required
          id="outlined-required"
          label="DATE"
          defaultValue=""
        />
        <br></br>
        <FormControl>
          <RadioGroup
            row
            // aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="personel"
              control={<Radio />}
              label="personel"
            />
            <FormControlLabel
              value="Business"
              control={<Radio />}
              label="Business"
            />
            <FormControlLabel value="home" control={<Radio />} label="Home" />
          </RadioGroup>
        </FormControl>
        <IconButton size="large" className="position-absolute bottom-0 end-0">
          <SaveIcon color="success" fontSize="inherit" />
        </IconButton>
      </div>
    </Box>
  );
}
