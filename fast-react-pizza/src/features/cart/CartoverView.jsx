import { Link } from "react-router-dom"

function CartoverView() {
    return (
        <div className="bg-stone-900 flex items-center justify-between text-stone-300 mt-30 uppercase px-4 py-4 sm:px-6">
            <p className="space-x-4 font-semibold sm:space-x-6 ">
                <span>23 pizzas</span>
                <span>$23.23</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    )
}

export default CartoverView
