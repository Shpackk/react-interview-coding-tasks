import {
  ChangeNote,
  DeleteNote,
  NewComment,
  NewNote,
  Note,
  reducerAction,
} from '../types/types';

export const reducer = (state: Note[], action: reducerAction) => {
  return notesReducerActions[action.type]
    ? notesReducerActions[action.type](state, action.payload)
    : state;
};

const notesReducerActions = {
  addComment(prevNotes: Note[], payload: NewComment) {
    if (payload.value === '') return prevNotes;

    return prevNotes.map((note, index) => {
      if (index === payload.index) {
        return {
          comments: [...note.comments, payload.value],
          value: note.value,
        };
      }
      return note;
    });
  },

  deleteNote(prevNotes: Note[], payload: DeleteNote) {
    return prevNotes.reduce((result: Note[], note, index) => {
      if (index !== payload.index) {
        result.push(note);
      }
      return result;
    }, []);
  },

  changeNote(prevNotes: Note[], payload: ChangeNote) {
    return prevNotes.map((note, index) => {
      if (index === payload.index) {
        return {
          comments: note.comments,
          value: payload.value,
        };
      }
      return note;
    });
  },
  addNote(prevNotes: Note[], payload: NewNote) {
    return [...prevNotes, payload.note];
  },
};
