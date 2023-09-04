import Login from "./Login";
import Browse from "./Browse";
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom";

import { useDispatch } from "react-redux";


const Body = () => {
  //write hooks at the top level in component
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

 
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
