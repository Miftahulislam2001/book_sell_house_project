import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './Components/Layout/Admin';
import Home from './Components/Home';
import About from './Components/About'
import Books from './Components/Books'
import BookDetail from './Components/BookDetail';
import LoadSpinner from './Components/ActiveLink/LoadSpinner/LoadSpinner';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Admin/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/books",
        element: <Books/>,
        loader: ()=> fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: "book/:bookId",
        element: <BookDetail/>,
        loader: ({params})=> fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      },
      {
        path: "loader",
        element: <LoadSpinner></LoadSpinner>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
