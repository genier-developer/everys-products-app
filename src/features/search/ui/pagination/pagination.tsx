import { useAppDispatch, useAppSelector } from "../../../../app/hooks.ts";
import { setCurrentPage } from "../../model/search-slice.ts";
import s from './pagination.module.scss';

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const { currentPage, totalPages } = useAppSelector((state) => state.search);

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
  };

  return (
    <div className={s.pagination}>
      <div className={s.pageInfo}>
        Страница {currentPage} из {totalPages}
      </div>
      <div className={s.buttonsContainer}>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Предыдущая
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          Следующая
        </button>
      </div>
    </div>
  );
};
