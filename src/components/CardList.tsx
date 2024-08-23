import { Divider, Grid, Stack } from "@mui/material";
import Notes from "./Notes";
import { Note } from "../store/notesSlice";

interface CardListProps {
  notes: Note[];
  handleDeleteNote: (note: { id: string }) => void;
}

const CardList = ({ notes, handleDeleteNote }: CardListProps) => {
  return (
    <div>
      <Stack
        className="m-3 mt-4"
        direction="row"
        justifyContent="space-evenly"
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Grid
          container
          spacing={5}
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="m-3"
        >
          {notes.map((note) => (
            <Notes
              handleDeleteNote={handleDeleteNote}
              key={note.id}
              title={note.title}
              text={note.text}
              category={note.category}
              date={note.date}
              id={note.id}
            />
          ))}
        </Grid>
      </Stack>
    </div>
  );
};

export default CardList;
