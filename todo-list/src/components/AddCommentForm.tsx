import { useContext, useRef, useState } from 'react';
import { NotesContext } from '../Context/notesContext';
import { Actions } from '../types/types';
import { Comments } from '../UI/Comments';
import { SubmitButton } from '../UI/SubmitButton';

export const CommentsSection = (props: any) => {
  const { comments, id } = props;
  const { dispatch } = useContext(NotesContext);
  const [value, setValue] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value === '') return;
    dispatch({ type: Actions.addComment, payload: { id, value } });
    setValue('');
    formRef.current?.reset();
    formRef.current?.focus();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <Comments comments={comments} />
      <input type="text" onChange={handleInput}></input>
      <SubmitButton label="Comment" />
    </form>
  );
};
