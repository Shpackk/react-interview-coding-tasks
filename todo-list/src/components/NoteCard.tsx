import React from 'react';
import { useState } from 'react';
import type { NoteProps } from '../types/props';
import { Actions } from '../types/types';
import { Comments } from '../UI/Comments';
import { AddCommentForm } from './AddCommentForm';
import { EditNoteForm } from './EditNoteForm';

export const NoteCard = (props: NoteProps) => {
  const [value, setValue] = useState('');
  const [editing, setEditing] = useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const { index, note, dispatch } = props;

  const toggleEdit = () => setEditing((prevState) => !prevState);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch({ type: Actions.addComment, payload: { index, value } });
    setValue('');
    formRef.current?.reset();
  };

  const handleDelete = () =>
    dispatch({ type: Actions.deleteNote, payload: { index } });

  return (
    <div className="note-card">
      {editing ? (
        <EditNoteForm
          oldNote={note.value}
          dispatch={dispatch}
          index={index}
          setEditing={toggleEdit}
        />
      ) : (
        <>
          <p key={index}> {note.value} </p>
          <AddCommentForm
            formRef={formRef}
            handleSubmit={handleSubmit}
            handleInput={handleInput}
          />
          <button onClick={handleDelete}>Delete</button>
          <button onClick={toggleEdit}> Edit </button>
          <Comments comments={note.comments} />
        </>
      )}
    </div>
  );
};
