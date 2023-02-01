export type Note = {
  value: string;
  comments: string[];
  id: number;
};

export enum Actions {
  addComment = 'addComment',
  deleteNote = 'deleteNote',
  changeNote = 'changeNote',
  addNote = 'addNote',
}

export type reducerAction = {
  type: Actions;
  payload: {
    id: number;
    value: string;
  };
};

export type NewComment = {
  index: number;
  value: string;
};

export type ChangeNote = NewComment;

export type NewNote = {
  note: Note;
};

export type DeleteNote = Pick<NewComment, 'index'>;
