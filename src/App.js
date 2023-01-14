import logo from './logo.svg';
import './App.css';
import Home from'./Components/Home/Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Filter from './Components/Filter/Filter';
import ResturantDetails from './Components/Details/ResturantDetails';
import ErrorPage from './Components/Common/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage/>
  },
  {
    path:"/filter",
    element:<Filter/>
  },
  {
    path:"/details/:rname",
    element:<ResturantDetails/>
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
