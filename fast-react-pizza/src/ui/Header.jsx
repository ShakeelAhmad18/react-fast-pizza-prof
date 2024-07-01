import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"
import UserName from "../features/user/UserName"
function Header() {
    return (
       <header className="bg-yellow-500 py-3 border-b flex items-center justify-between border-stone-200 sm:py-6 px-5">
           <Link to='/' className="tracking-widest uppercase">React Fast Pizza Co.</Link>  
           <SearchOrder/>
           <UserName/>
        </header>
    )
}

export default Header
