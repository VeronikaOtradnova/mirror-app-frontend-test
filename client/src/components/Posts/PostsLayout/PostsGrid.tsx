import { IPost } from "../../../types/posts";
import { PostCard } from "../PostCard/PostCard";

interface IProps {
  posts: IPost[];
  cols: number;
  rows: number;
}

export function PostsGrid({ posts, cols, rows }: IProps) {
  return (
    <div
      className="grid w-full gap-[6px]"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, auto)`,
      }}
    >
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}