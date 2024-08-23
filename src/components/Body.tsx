import { Stack } from "@mui/material";
import AddButton from "./AddButton";
import Buttons from "./Buttons";
import CardList from "./CardList";
import { GiNotebook } from "react-icons/gi";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import {
  addNote,
  deleteNote,
  Note,
  selectFilteredNotes,
} from "../store/notesSlice";

const Body = () => {
  const notes = useSelector((state: RootState) => selectFilteredNotes(state));
  const dispatch = useDispatch<AppDispatch>();

  const addNoteHandler = (note: {
    title: string;
    text: string;
    category: string;
  }) => {
    const { title, text, category } = note;
    const date = new Date();
    const newNote: Note = {
      title,
      text,
      category,
      date: date.toLocaleDateString(),
      id: nanoid(),
    };
    dispatch(addNote(newNote));
  };

  const deleteNoteHandler = (note: { id: string }) => {
    dispatch(deleteNote(note));
  };

  return (
    <>
      <Stack direction="row" spacing={3} className="m-3 ">
        <GiNotebook fontSize="40px" className="mt-2 ms-3" />
        <h1 className="">Notes</h1>
      </Stack>
      <Stack direction="column" spacing={3} className=" ">
        <div className="mt-3">
          <Buttons />
          <CardList notes={notes} handleDeleteNote={deleteNoteHandler} />
          <AddButton handleAddNote={addNoteHandler} />
        </div>
      </Stack>
    </>
  );
};

export default Body;
