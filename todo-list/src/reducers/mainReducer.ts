import { Note, reducerAction } from '../types/types';

export const reducer = (state: Note[], action: reducerAction) => {
  const { type, payload } = action;
  const { index, value } = payload;

  switch (type) {
    case 'addComment':
      return state.map((note, noteIndex) => {
        if (noteIndex === index) {
          return {
            comments: [...note.comments, value],
            value: note.value,
          };
        }
        return note;
      });

    case 'deleteNote':
      return state.reduce((result: Note[], note, noteIndex) => {
        if (noteIndex !== index) {
          result.push(note);
        }
        return result;
      }, []);

    case 'changeNote':
      const newState = [...state];
      if (index && value) {
        newState[index].value = value;
        return newState;
      }
      return state;

    case 'addNote':
      return [
        ...state,
        {
          value,
          comments: [],
        },
      ];

    default:
      console.warn(
        `${action.type} method is not defined on ${reducer.name} reducer`,
      );
      return state;
  }
};
