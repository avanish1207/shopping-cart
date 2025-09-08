import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import Cart from './pages/Cart.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx' 

const router=createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children:[{path:'cart', element:<Cart />},{path:'home', element:<Home />},{path:'shop', element:<Shop />},]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
