import { Stack } from "@mui/material";
import AddButton from "./AddButton";
import Buttons from "./Buttons";
import CardList from "./CardList";
import { GiNotebook } from "react-icons/gi";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

export interface Note {
  title: string;
  text: string;
  category: string;
  date: string;
  id: string;
}

// Define a type for the note input without `id` and `date`
interface NoteInput {
  title: string;
  text: string;
  category: string;
}

const Body = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      title: "hallo1",
      text: "Amidst the verdant hills and sparkling rivers, a quaint village lay nestled in serene seclusion",
      category: "home",
      date: "12/8/2024",
      id: nanoid(),
    },
    {
      title: "hallo2",
      text: " while the gentle hum of bees and chirping birds created a symphony of nature's melody",
      category: "personel",
      date: "22/8/2024",
      id: nanoid(),
    },
    {
      title: "hallo3",
      text: "Villagers, with their friendly smiles and warm greetings, went about their daily routines, weaving a tapestry of simple yet fulfilling lives.",
      category: "business",
      date: "3/11/2024",
      id: nanoid(),
    },
  ]);

  const [filteredNotes, setFilteredNotes] = useState<Note[]>(notes);

  const addNote = (note: NoteInput) => {
    const { title, text, category } = note;
    const date = new Date();
    const newNote: Note = {
      title,
      text,
      category,
      date: date.toLocaleDateString(),
      id: nanoid(),
    };
    // setNotes([...notes, 2, newNote]);
    // setNotes([...notes, 1, newNote]);

    setNotes((prevNotes) => [...prevNotes, newNote]);
    setFilteredNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = ({ id }: { id: string }) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    setFilteredNotes(newNotes);
  };

  return (
    <>
      <Stack direction="row" spacing={2} className="m-3">
        <GiNotebook fontSize="40px" className="mt-2 ms-3" />
        <h1 className="mt-2 ms-3">Notes</h1>
      </Stack>

      <div className="mt-5">
        <Buttons setFilteredNotes={setFilteredNotes} notes={notes} />
        <CardList notes={filteredNotes} handleDeleteNote={deleteNote} />
        <AddButton handleAddNote={addNote} />
      </div>
    </>
  );
};

export default Body;
