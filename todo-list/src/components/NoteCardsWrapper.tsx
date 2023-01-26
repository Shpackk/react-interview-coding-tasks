import '../App.css';
import type { NotesWrapperProps } from '../types/props';
import { NoteCard } from './NoteCard';

export const NoteCardsWrapper = (props: NotesWrapperProps) => {
  const { state, dispatch } = props;

  return (
    <div className="notes-wrapper">
      {state.map((note, index) => (
        <NoteCard dispatch={dispatch} index={index} note={note} />
      ))}
    </div>
  );
};
