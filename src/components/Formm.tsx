import { useFormik } from "formik";
import * as yup from "yup";
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
import { AddNoteProps } from "./AddButton";

const validationSchema = yup.object({
  title: yup.string().required("Title is required"),
  text: yup.string().required("Text is required"),
  category: yup.string().required("Category is required"),
});

const Formm = ({ handleAddNote }: AddNoteProps) => {
  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
      category: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleAddNote({
        title: values.title,
        text: values.text,
        category: values.category,
      });
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "35ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-required"
          label="TITLE"
          {...formik.getFieldProps("title")}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <br />
        <TextField
          id="outlined-multiline-static"
          label="TEXT"
          multiline
          rows={4}
          {...formik.getFieldProps("text")}
          error={formik.touched.text && Boolean(formik.errors.text)}
          helperText={formik.touched.text && formik.errors.text}
        />
        <br />
        <FormControl component="fieldset">
          <RadioGroup
            row
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
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
          {formik.touched.category && formik.errors.category && (
            <div style={{ color: "red" }}>{formik.errors.category}</div>
          )}
        </FormControl>
        <IconButton
          type="submit"
          size="large"
          className="position-absolute bottom-0 end-0"
        >
          <SaveIcon color="success" fontSize="inherit" />
        </IconButton>
      </div>
    </Box>
  );
};

export default Formm;
