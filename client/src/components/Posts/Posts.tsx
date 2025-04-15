import { useTypedSelector } from "../../hooks/useTypedSelector"
import { ErrorMessage } from "../ui/ErrorMessage/ErrorMessage";
import { Loader } from "../ui/Loader/Loader";
import { ISettings } from "../../types/settings";
import { Navigation } from "./Navigation/Navigation";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchPosts } from "../../store/action-creators/posts";
import { PostsLayout } from "./PostsLayout/PostsLayout";

interface IProps {
  settings: ISettings;
}

export function Posts({ settings }: IProps) {
  const dispatch = useAppDispatch();
  const { posts, error, loading } = useTypedSelector(state => state.posts);
  const [page, setPage] = useState(1);
  const container = document.getElementById('main');
  const scrollTopRef = useRef(0);

  useEffect(() => {
    setPage(1);
  }, [settings])

  useEffect(() => {
    dispatch(fetchPosts(page, settings.layout.columns * settings.layout.rows, settings.navigation === 'load-more'))
  }, [settings, page])

  useEffect(() => {
    //чтобы скролл не улетал после подгрузки постов
    container?.scrollTo({ top: scrollTopRef.current, behavior: "auto" });
  }, [posts])

  const saveScrollTop = () => {
    scrollTopRef.current = container?.scrollTop ?? 0;
  }

  return (
    <div className="w-full p-6 flex flex-col" >
      {error && <ErrorMessage message={error} />}

      {
        loading ?
          <Loader /> :
          <>
            <PostsLayout 
              page={page}
              posts={posts}
              settings={settings}
            />

            <Navigation 
              settings={settings}
              page={page}
              setPage={setPage}
              saveScrollTop={saveScrollTop}
            />
          </>
      }
    </div>
  )
}