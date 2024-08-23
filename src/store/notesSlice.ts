import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Note {
  title: string;
  text: string;
  category: string;
  date: string;
  id: string;
}

export interface NotesState {
  notes: Note[];
  filter: string;
}

const initialState: NotesState = {
  notes: [],
  filter: 'All',
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<{ id: string }>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});


export const selectFilteredNotes = (state: { notes: NotesState }) => {
  const { notes, filter } = state.notes;
  if (filter === 'All') return notes;
  return notes.filter(note => note.category === filter);
};

export const { addNote, deleteNote, setFilter } = notesSlice.actions;
export default notesSlice.reducer;
