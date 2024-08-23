import { Card, CardContent, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Note } from "../store/notesSlice";

interface NotesProps extends Note {
  handleDeleteNote: (note: { id: string }) => void; // Ensure this type matches the usage
}

const Notes = ({
  title,
  category,
  text,
  date,
  id,
  handleDeleteNote,
}: NotesProps) => {
  let backgroundColor = "";
  if (category === "personal") {
    backgroundColor = "orange";
  } else if (category === "business") {
    backgroundColor = "lightBlue";
  } else if (category === "home") {
    backgroundColor = "lightGreen";
  }
  let color = "black";

  return (
    <Card
      className="m-3 bg-primary text-white"
      sx={{ maxWidth: 500, minWidth: 500, margin: 3 }}
    >
      <CardContent sx={{ backgroundColor, color }}>
        <h3>{title}</h3>
        <h6>{category}</h6>
        <p>{text}</p>
        <p>{date}</p>
        <IconButton
          aria-label="delete"
          color="error"
          size="large"
          className="position-relative"
          onClick={() => handleDeleteNote({ id })}
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default Notes;
