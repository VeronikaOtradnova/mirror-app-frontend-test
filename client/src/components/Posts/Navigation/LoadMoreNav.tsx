import { Btn } from "../../ui/Btn/Btn";

interface IProps {
  page: number,
  setPage: (page: number) => void;
  totalPages: number,
  saveScrollTop: () => void,
}

export function LoadMoreNav({ page, setPage, totalPages, saveScrollTop }: IProps) {
  const loadMoreBtnHandler = () => {
    saveScrollTop();
    setPage(page + 1);
  }

  return (
    <div className="w-full p-10 text-gray-800 flex justify-center items-center">
      {
        page === totalPages ?
          'Вы прочитали все посты' :
          <Btn
            handler={loadMoreBtnHandler}
          >Загрузить ещё</Btn>
      }
    </div>
  )
}