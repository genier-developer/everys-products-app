import { setQuery } from '../../model/search-slice.ts';
import {FC} from "react";
import {useAppDispatch} from "../../../../app/hooks.ts";
import s from './search-input.module.scss'

export const SearchInput: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <input
      className={s.searchInput}
      type="text"
      placeholder="Search"
      onChange={(e) => dispatch(setQuery(e.target.value))}
    />
  );
};