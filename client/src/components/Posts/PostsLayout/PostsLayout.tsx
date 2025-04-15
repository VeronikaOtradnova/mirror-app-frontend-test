import { IPost } from "../../../types/posts";
import { ISettings } from "../../../types/settings";
import { PostsGrid } from "./PostsGrid";
import { PostsMasonry } from "./PostsMasonry";

interface IProps {
  posts: IPost[];
  settings: ISettings;
  page: number;
}

export function PostsLayout({ posts, settings, page }: IProps) {
  return (
    <>
      {
        settings.layout.current === 'masonry' ?
          <PostsMasonry
            cols={settings.layout.columns}
            rows={settings.navigation === 'load-more' ? settings.layout.rows * page : settings.layout.rows}
            posts={posts}
          />
          :
          <PostsGrid
            cols={settings.layout.columns}
            rows={settings.layout.rows}
            posts={posts}
          />
      }
    </>
  )
}