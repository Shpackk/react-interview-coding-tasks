import { AddCommentProps } from '../types/props';
import { SubmitButton } from '../UI/SubmitButton';

export const AddCommentForm = (props: AddCommentProps) => {
  const { formRef, handleInput, handleSubmit } = props;

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput}></input>
      <SubmitButton label="Comment" />
    </form>
  );
};
