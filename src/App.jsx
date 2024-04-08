import Home from "./component/home"
import Add from "./component/add"
import Stats from "./component/stats"
import Analytics from "./component/analytics"
import Navbar from "./component/navbar"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <> <Navbar/><Home/></>,
    },
    {
      path: "/add",
      element: <> <Navbar/><Add/></>,
    },
    {
      path: "/stats",
      element: <> <Navbar/><Stats/></>,
    },
    {
      path: "/analytics",
      element: <> <Navbar/><Analytics/></>,
    }
  ]);
  return (
    <>
    <div className="main">
    <RouterProvider router={router} />
    </div>
   
    </>
  )
}

export default App
