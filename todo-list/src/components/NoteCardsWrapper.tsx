import { useContext } from 'react';
import '../App.css';
import { NotesContext } from '../Context/notesContext';
import { NoteCard } from './NoteCard';

export const NoteCardsWrapper = () => {
  const { state } = useContext(NotesContext);

  return (
    <div className="notes-wrapper">
      {state.map((note, index) => (
        <NoteCard index={index} note={note} />
      ))}
    </div>
  );
};
