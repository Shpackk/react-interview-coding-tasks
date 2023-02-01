import { createContext } from 'react';

export const createContextCustom = <T, R>(naming: string) => {
  const Context = createContext<{
    state: T[];
    dispatch: React.Dispatch<R>;
  }>({
    state: [],
    dispatch: () => {},
  });

  if (Context === undefined) {
    throw new Error('Context is not defined');
  }

  Context.displayName = naming;

  return Context;
};
