import { formatPostDate } from "../../../helpers/formatDate";
import { IPost } from "../../../types/posts";

interface Props {
  post: IPost;
}

export function ClassicCard({ post }: Props) {
  return (
    <div className="w-full bg-white rounded-2xl shadow p-4 flex flex-col gap-3">
      <p className="text-sm text-gray-700">{post.caption}</p>

      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500">
        <span>{post.likes} liked</span>
        <span>{post.comments} comments</span>
        <span>{formatPostDate(post.date)}</span>
      </div>

      <div className="text-xs text-gray-400">{post.user.username}</div>
    </div>
  );
}