//Pages
import { Home } from "./pages/Home/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    }
  ]) 
  
  return (
   <RouterProvider router={routes} />
  )
}

export default App
