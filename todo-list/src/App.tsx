import { useReducer, useState } from 'react';
import './App.css';
import { AddNotesForm } from './components/AddNotesForm';
import { NoteCardsWrapper } from './components/NoteCardsWrapper';
import { reducer } from './reducers/mainReducer';
import { Note } from './types/types';

const initialState: Note[] = [];

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <AddNotesForm dispatch={dispatch} />
      <NoteCardsWrapper state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
