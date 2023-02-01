import { useState, useRef, useContext } from 'react';
import { NotesContext } from '../Context/notesContext';
import { Actions } from '../types/types';
import { SubmitButton } from '../UI/SubmitButton';
import './AddNotes.css';

export const AddNotesForm = () => {
  const [input, setInput] = useState('');
  const { dispatch } = useContext(NotesContext);
  const formRef = useRef<HTMLFormElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input === '') return;

    dispatch({
      type: Actions.addNote,
      payload: {
        value: input,
        id: 0,
      },
    });

    setInput('');
    formRef.current?.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <input className="add-note-inpt" type="text" onChange={handleInput} />
      <SubmitButton label="Post" />
    </form>
  );
};
