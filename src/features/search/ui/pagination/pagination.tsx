import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {setPage} from "../../model/search-slice.ts";
import s from './pagination.module.scss'

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const { page, totalPages } = useAppSelector((state) => state.search);

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  return (
    <div className={s.pagination}>

      <span>Страница {page} из {totalPages}</span>
      <button
        onClick={handlePrevPage}
        disabled={page <= 1}
      >
        Предыдущая
      </button>
      <button onClick={() => dispatch(setPage(page + 1))}>Следующая</button>
    </div>
  );
};