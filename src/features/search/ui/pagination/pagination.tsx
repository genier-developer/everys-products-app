import {useAppDispatch, useAppSelector} from "../../../../app/hooks.ts";
import {setPage} from "../../model/search-slice.ts";

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const { page, totalPages } = useAppSelector((state) => state.search);

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  return (
    <div>
      <button 
        onClick={handlePrevPage}
        disabled={page <= 1}
      >
        Предыдущая
      </button>
      <span>Страница {page} из {totalPages}</span>
      <button onClick={() => dispatch(setPage(page + 1))}>Следующая</button>
    </div>
  );
};