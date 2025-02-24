import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {setPage} from "../../model/search-slice.ts";
import s from './pagination.module.scss'

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const { currentPage, totalPages } = useAppSelector((state) => state.search);
  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage));
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className={s.pagination}>
      <div className={s.pageInfo}>
        Страница {currentPage} из {totalPages}
      </div>
      <div className={s.buttonsContainer}>
        <button
          onClick={handlePrevPage}
          disabled={currentPage <= 1}
        >
          Предыдущая
        </button>
        <button 
          onClick={handleNextPage}
        >
          Следующая
        </button>
      </div>
    </div>
  );
};