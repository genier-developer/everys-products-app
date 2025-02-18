import { useAppSelector } from '../../../../app/hooks.ts';
import { StockItemModel } from '../../../../entities/product/types.ts';

export const ProductList = () => {
  const { items } = useAppSelector((state) => state.search);
  if (!items) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      {items.map((product: StockItemModel) => (
        <div key={product.code || ''}>
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