import {Link} from 'react-router-dom'

function EmptyCart() {
    return (
        <div>
            <Link to='/menu'>&larr; back to cart</Link>
            <p>Your Cart is Still Empty! Start adding some pizzas</p>
        </div>
    )
}

export default EmptyCart
