import { createBrowserRouter } from "react-router-dom"
import Main from "./layout/Main"
import Products from "./pages/Products"
import Checkout from "./pages/Checkout"
import Success from "./pages/Success"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
])

export default router
