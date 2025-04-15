import { IPost } from "../../../types/posts";
import { PostCard } from "../PostCard/PostCard";

interface IProps {
  posts: IPost[];
  cols: number;
  rows: number;
}

export function PostsMasonry({posts, cols, rows}: IProps) {
  const columnsArray = distributeToColumns(posts, cols, rows);

  const getColumnKey = (posts: IPost[]): string => {
    if (posts.length === 0) return crypto.randomUUID();
    return posts.map((post) => post.id).join('-');
  };

  return (
    <div className="flex flex-row justify-center items-stretch gap-[6px] w-full">
      {columnsArray.map((colPosts) => (
        <div key={getColumnKey(colPosts)} className="flex flex-col items-start flex-[1_1_0%] w-0 gap-[6px]">
          {colPosts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      ))}
    </div>
  );
}

function distributeToColumns(posts: IPost[], columns: number, rows: number): IPost[][] {
  //здесь создаём и возвращаем массив с подмассивами, где один подмассив - это колонка
  const cols: IPost[][] = Array.from({ length: columns }, (_, colIndex) => {
    const start = colIndex * rows;
    const end = start + rows;
    return posts.slice(start, end);
  });

  return cols;
}