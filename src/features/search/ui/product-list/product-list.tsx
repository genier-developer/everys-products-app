import {useAppSelector} from '../../../../app/hooks';
import { StockItemModel } from '../../../../entities/product/types.ts';
import { FC } from "react";
import s from './product-list.module.scss';

export const ProductList: FC = () => {
  const { items, loading, currentPage, limit } = useAppSelector((state) => state.search);
  const startIndex = (currentPage - 1) * limit;
  const visibleItems = items.slice(startIndex, startIndex + limit);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!items || !items.length) {
    return <div>Товары не найдены</div>;
  }

  return (
    <div className={s.tableContainer}>
      <table className={s.table}>
        <thead>
        <tr>
          <th>ID</th>
          <th>Code</th>
          <th>Title</th>
          <th>Manufacturer</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
        </thead>
        <tbody>
        {visibleItems.map((product: StockItemModel, index ) => (
          <tr key={product.code || index}>
            <td>{index+1}</td>
            <td>{product.code}</td>
            <td>{product.title}</td>
            <td>{product.manufacturer}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};