import React, { useState } from 'react';
import type { FormProps } from '../types/props';
import { Actions } from '../types/types';
import { SubmitButton } from '../UI/SubmitButton';

export const AddNotesForm = (props: FormProps) => {
  const [input, setInput] = useState('');
  const formRef = React.useRef<HTMLFormElement>(null);
  const { dispatch } = props;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input === '') return;

    dispatch({
      type: Actions.addNote,
      payload: {
        note: {
          value: input,
          comments: [],
        },
      },
    });
    formRef.current?.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <input type="text" onChange={handleInput} />
      <SubmitButton label="Post" />
    </form>
  );
};
