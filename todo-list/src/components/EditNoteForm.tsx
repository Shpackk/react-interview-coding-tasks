import { useState } from 'react';
import type { EditProps } from '../types/props';
import { Actions } from '../types/types';
import { SubmitButton } from '../UI/SubmitButton';

export const EditNoteForm = (props: EditProps) => {
  const { dispatch, index, setEditing, oldNote } = props;
  const [input, setInput] = useState(oldNote);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: Actions.changeNote, payload: { index, input } });
        setEditing(false);
      }}
    >
      <input type="text" value={input} onChange={handleChange} />
      <SubmitButton label="confirm" />
    </form>
  );
};
