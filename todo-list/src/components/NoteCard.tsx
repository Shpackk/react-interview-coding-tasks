import { useContext } from 'react';
import { useState } from 'react';
import { NotesContext } from '../Context/notesContext';
import { Actions } from '../types/types';
import { CommentsSection } from './AddCommentForm';
import { EditNoteForm } from './EditNoteForm';
import type { NoteProps } from '../types/props';

export const NoteCard = (props: NoteProps) => {
  const [editing, setEditing] = useState(false);
  const { dispatch } = useContext(NotesContext);
  const { note } = props;

  const toggleEdit = () => setEditing((prevState) => !prevState);

  const handleDelete = () =>
    dispatch({ type: Actions.deleteNote, payload: { id: note.id, value: '' } });

  return (
    <div className="note-card">
      {editing ? (
        <EditNoteForm
          oldNote={note.value}
          id={note.id}
          setEditing={toggleEdit}
        />
      ) : (
        <>
          <p key={note.id}> {note.value} </p>
          <button className="btn delete-note-button" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn edit-note-button" onClick={toggleEdit}>
            Edit
          </button>
        </>
      )}
      <CommentsSection id={note.id} comments={note.comments} />
    </div>
  );
};
