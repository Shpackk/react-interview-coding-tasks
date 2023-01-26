import type { SubmitButtonProps } from '../types/props';

export const SubmitButton = (props: SubmitButtonProps) => {
  return <button type="submit">{props.label}</button>;
};
