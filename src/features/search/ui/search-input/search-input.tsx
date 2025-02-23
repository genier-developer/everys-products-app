import { ChangeEvent, FC, KeyboardEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import {filterProducts, setQuery} from '../../model/search-slice';
import s from './search-input.module.scss';

export const SearchInput: FC = () => {

  const dispatch = useAppDispatch();
  const { query, loading, totalItems} = useAppSelector((state) => state.search);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  const handleSearch = async ()=>{
    dispatch(filterProducts())
  }
  
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className={s.searchContainer}>
      <input
        type="text"
        className={s.searchInput}
        value={query}
        onChange={handleChange}
        placeholder="Введите строку поиска..."
        onKeyDown={handleEnter}
        disabled={loading}
      />
      <div className={s.rightSection}>
        <div className={s.foundCount}>
          Кол-во: {totalItems || 0}
        </div>
        <button
          className={s.searchButton}
          onClick={handleSearch}
          disabled={loading}
        >
          Поиск
        </button>
      </div>
    </div>
  );
};