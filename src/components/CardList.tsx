import { Divider, Grid, Stack } from "@mui/material";
import { Note } from "./Body";
import Notes from "./Notes";

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
          rowSpacing={5}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          className="m-3"
        >
          {notes.map((note) => (
            <Notes
              handleDeleteNote={handleDeleteNote}
              key={note?.id || 0} // Added key prop
              title={note?.title || "simple title"}
              text={note?.text || "simple text"}
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
