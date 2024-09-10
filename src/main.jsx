import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import Home from './components/Home.jsx';
import ListedBooks from './components/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead.jsx';
import Root from './components/Root.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    	children:[
        {
          path: "/" ,
          element: <Home></Home> ,
        },
        {
          path: "/listed" ,
          element: <ListedBooks></ListedBooks> ,
        },
        {
          path: "/read" ,
          element:<PagesToRead></PagesToRead> ,
        },
   ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
