import {FC} from "react";
import {ProductSearch} from "../../features/search";
import s from './search.module.scss'


export const Search: FC = () => {
  return (
    <div className={s.search}>
      <h1>Поиск</h1>
      <ProductSearch />
    </div>
  );
};
