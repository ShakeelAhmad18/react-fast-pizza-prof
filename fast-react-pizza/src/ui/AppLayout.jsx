import { Outlet } from "react-router-dom"
import Header from "./Header"
import CartoverView from "../features/cart/CartoverView"
function AppLayout() {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <CartoverView/>
        </div>
    )
}

export default AppLayout
