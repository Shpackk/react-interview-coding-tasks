import type { reducerAction, Note } from './types';

type DispatchFunction = {
  dispatch: (action: reducerAction) => void;
};

export type FormProps = {} & DispatchFunction;

export type NoteProps = {
  index: number;
  note: Note;
} & DispatchFunction;

export type NotesWrapperProps = {
  state: Note[];
} & DispatchFunction;

export type CommentsProp = {
  comments: string[];
};

export type SubmitButtonProps = {
  label: string;
};

export type EditProps = {
  oldNote: string;
  index: number;
  setEditing: (value: boolean) => void;
} & DispatchFunction;

export type AddCommentProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formRef: React.RefObject<HTMLFormElement>;
};
