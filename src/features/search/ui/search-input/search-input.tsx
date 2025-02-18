import { setQuery } from '../../model/search-slice.ts';
import {FC} from "react";
import {useAppDispatch} from "../../../../app/hooks.ts";

export const SearchInput: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => dispatch(setQuery(e.target.value))}
    />
  );
};