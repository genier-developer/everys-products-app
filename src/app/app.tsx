import { StoreProvider } from './store-provider.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';

export function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  );
}

