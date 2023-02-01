export type Note = {
  value: string;
  comments: string[];
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
    index?: number;
    value?: string;
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
