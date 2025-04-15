import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IPost } from "../../../types/posts";
import { ClassicCard } from "./ClassicCard";
import { HoverCard } from "./HoverCard";

interface IProps {
  post: IPost;
}

export function PostCard({ post }: IProps) {
  const cardType = useTypedSelector(state => state.settings.settings?.template);

  if (cardType === 'hover') {
    return <HoverCard post={post} />
  }

  return <ClassicCard post={post} />
}