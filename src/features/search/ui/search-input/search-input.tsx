import { ChangeEvent, FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { setQuery, setLoading, setPage } from '../../model/search-slice'
import s from './search-input.module.scss'

interface SearchInputProps {
  onSearch: () => void
}
export const SearchInput: FC<SearchInputProps> = ({onSearch}) => {
  const dispatch = useAppDispatch()
  const { query, loading, products } = useAppSelector((state) => state.search)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value))
  }

  const handleSearch = () => {
    if (!query.trim()) return
    dispatch(setLoading(true))
    dispatch(setPage(1))
    onSearch()
  }

  return (
    <div className={s.searchContainer}>
      <input
        type="text"
        className={s.searchInput}
        value={query}
        onChange={handleChange}
        placeholder="Введите строку поиска..."
        disabled={loading}
      />
      <div className={s.rightSection}>
        <div className={s.foundCount}>
          Кол-во: {products?.length || 0}
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
  )
}
