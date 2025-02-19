import { useAppSelector } from '../../../../app/hooks.ts';
import { StockItemModel } from '../../../../entities/product/types.ts';
import { FC } from "react";
import s from './product-list.module.scss'

export const ProductList: FC = () => {
  const { products, loading } = useAppSelector((state) => state.search);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (!products || !products.length) {
    return <div>Товары не найдены</div>;
  }

  return (
    <div className={s.tableContainer}>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Code</th>
            <th>Title</th>
            <th>Manufacturer</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: StockItemModel) => (
            <tr key={product.code || ''}>
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
