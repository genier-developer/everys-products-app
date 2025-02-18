import {FC} from "react";
import {ProductSearch} from "../../features/search";


export const Search: FC = () => {
  return (
    <div>
      <h1>Поиск</h1>
      <ProductSearch />
    </div>
  );
};
