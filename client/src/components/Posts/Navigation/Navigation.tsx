import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { LoadMoreNav } from "./LoadMoreNav";
import { PaginationNav } from "./PaginationNav";
import { ISettings } from "../../../types/settings";

interface IProps {
  settings: ISettings;
  page: number;
  setPage: (p:number) => void;
  saveScrollTop: () => void;
}

export function Navigation({ settings, page, setPage, saveScrollTop }: IProps) {
  const {total} = useTypedSelector(state => state.posts);

  const totalPages = Math.ceil(total / (settings.layout.columns * settings.layout.rows));
  const navType = useTypedSelector(state => state.settings.settings?.navigation);

  return (
    <>
      {
        navType === 'load-more' ?
          <LoadMoreNav
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            saveScrollTop={saveScrollTop}
          /> :
          <PaginationNav
            currentPage={page}
            setPage={setPage}
            totalPages={totalPages}
          />
      }
    </>
  )
}