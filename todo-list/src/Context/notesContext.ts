import { Note, reducerAction } from '../types/types';
import { createContextCustom } from './contextBuilder';

export const NotesContext = createContextCustom<Note, reducerAction>(
  'NotesContext',
);
