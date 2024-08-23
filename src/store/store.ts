import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import notesReducer, { NotesState } from './notesSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, notesReducer);

export const store = configureStore({
  reducer: {
    notes: persistedReducer,
  },
  
});

export const persistor = persistStore(store);

export type RootState = {
  notes: NotesState;
};
export type AppDispatch = typeof store.dispatch;
