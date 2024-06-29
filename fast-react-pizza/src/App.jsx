//import CreateUser from "./features/user/CreateUser"
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './ui/Home'
import Menu,{loader as menuLoader} from './features/menu/Menu'
import CreateOrder from './features/order/CreateOrder'
import AppLayout from './ui/AppLayout'
import Cart from './features/cart/Cart'

const router=createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/menu',
        element:<Menu/>,
        loader:menuLoader
      },
      {
        path:'/order/new',
        element:<CreateOrder/>
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ]
  }
])

function App() {
    
  return(
  <RouterProvider router={router} />
  )
}

export default App
