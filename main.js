import ReactDOM from "react-dom/client";
import AppLayout from "./src/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import About from "./src/components/About";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import RestaurantMenu from "./src/components/RestaurantMenu";
 import {lazy, Suspense} from "react"
const Grocery = lazy(() => import("./src/components/Grocery"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/cart",
        element: <Cart />,
      },
       {
        path: "/grocery",
        element: <Suspense fallback={<h1 style={{padding: "200px"}}>Loading...</h1>}><Grocery /></Suspense> 
      },
      {
  path: "/restaurant/:resId",
  element: <RestaurantMenu />,
}
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);