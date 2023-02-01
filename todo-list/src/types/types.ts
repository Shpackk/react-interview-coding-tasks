export type Note = {
  value: string;
  comments: Comment[];
  id: number;
};

export type Comment = {
  value: string;
  created_at: string;
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
