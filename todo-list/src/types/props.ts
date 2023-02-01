import type { Comment, Note } from './types';

export type NoteProps = {
  index: number;
  note: Note;
};

export type CommentsProp = {
  comments: Comment[];
};

export type SubmitButtonProps = {
  label: string;
};

export type EditProps = {
  oldNote: string;
  id: number;
  setEditing: (value: boolean) => void;
};

export type AddCommentProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formRef: React.RefObject<HTMLFormElement>;
};
