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
    <div className={s.productList}>
      {products.map((product: StockItemModel) => (
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
