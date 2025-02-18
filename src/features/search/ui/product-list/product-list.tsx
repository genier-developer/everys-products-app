import { useAppSelector } from '../../../../app/hooks.ts';
import { StockItemModel } from '../../../../entities/product/types.ts';
import {FC} from "react";
import s from './product-list.module.scss'

export const ProductList: FC = () => {
  const { items } = useAppSelector((state) => state.search);
  if (!items) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className={s.productList}>
      {items.map((product: StockItemModel) => (
        <div key={product.code || ''} className={s.productCard}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Manufacturer: {product.manufacturer}</p>
          <p>Price: {product.price}</p>
          <p>Stock: {product.stock}</p>
        </div>
      ))}
    </div>
  );
};