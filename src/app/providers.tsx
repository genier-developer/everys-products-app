import { StoreProvider } from './store-provider.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

export const AppProvider = () => {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
};