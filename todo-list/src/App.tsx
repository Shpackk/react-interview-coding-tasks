import { useReducer } from 'react';
import { AddNotesForm } from './components/AddNotesForm';
import { NoteCardsWrapper } from './components/NoteCardsWrapper';
import { NotesContext } from './Context/notesContext';
import { reducer } from './reducers/mainReducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="App">
      <NotesContext.Provider value={{ state, dispatch }}>
        <AddNotesForm />
        <NoteCardsWrapper />
      </NotesContext.Provider>
    </div>
  );
}

export default App;
