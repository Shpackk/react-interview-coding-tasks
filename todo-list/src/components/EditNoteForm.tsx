import { useContext, useState } from 'react';
import { NotesContext } from '../Context/notesContext';
import { Actions } from '../types/types';
import { SubmitButton } from '../UI/SubmitButton';
import type { EditProps } from '../types/props';

export const EditNoteForm = (props: EditProps) => {
  const { id, setEditing, oldNote } = props;
  const { dispatch } = useContext(NotesContext);
  const [value, setValue] = useState(oldNote);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: Actions.changeNote, payload: { id, value } });
        setEditing(false);
      }}
    >
      <input type="text" value={value} onChange={handleChange} />
      <SubmitButton label="confirm" />
    </form>
  );
};
