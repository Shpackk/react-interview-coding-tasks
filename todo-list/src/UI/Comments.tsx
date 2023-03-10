import type { CommentsProp } from '../types/props';

export const Comments = (props: CommentsProp) => {
  const { comments } = props;

  if (comments.length === 0) return <div></div>;

  return (
    <div className="comments-div">
      <h4>Comments</h4>
      {comments.map(({ value, created_at }) => (
        <div className="comment-time">
          <span>{value}</span>
          <span>{created_at}</span>
        </div>
      ))}
    </div>
  );
};
