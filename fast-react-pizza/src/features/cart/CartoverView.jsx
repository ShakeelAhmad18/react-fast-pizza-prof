import { Link } from "react-router-dom"

function CartoverView() {
    return (
        <div>
            <p>
                <span>23 pizzas</span>
                <span>$23.23</span>
            </p>
            <Link to="/cart">Open cart &rarr;</Link>
        </div>
    )
}

export default CartoverView
