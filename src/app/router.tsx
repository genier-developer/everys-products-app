import { createBrowserRouter } from 'react-router-dom';
import {Search} from "../pages/search";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Search />,
  },
]);