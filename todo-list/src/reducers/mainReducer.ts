import { Note, reducerAction } from '../types/types';

export const reducer = (state: Note[], action: reducerAction) => {
  const { type, payload } = action;
  const { id, value } = payload;

  switch (type) {
    case 'addComment':
      return state.map((note) => {
        if (note.id === id) {
          return {
            comments: [
              ...note.comments,
              {
                value: value,
                created_at: new Date().toLocaleTimeString(),
              },
            ],
            value: note.value,
            id: note.id,
          };
        }
        return note;
      });

    case 'deleteNote':
      return state.reduce((result: Note[], note) => {
        if (note.id !== id) {
          result.push(note);
        }
        return result;
      }, []);

    case 'changeNote':
      return state.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            value,
          };
        }
        return note;
      });

    case 'addNote':
      if (value) {
        return [
          ...state,
          {
            id: Date.now(),
            value,
            comments: [],
          },
        ];
      }
      return state;

    default:
      console.warn(
        `${action.type} method is not defined on ${reducer.name} reducer. Returning previous state....`,
      );
      return state;
  }
};
