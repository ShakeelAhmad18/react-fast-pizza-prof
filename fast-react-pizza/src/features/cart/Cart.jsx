import {Link} from 'react-router-dom'

/*const fakeCart = [
    {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
    {
      pizzaId: 6,
      name: 'Vegetale',
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
    },
    {
      pizzaId: 11,
      name: 'Spinach and Mushroom',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
    },
  ];*/

function Cart() {
    //const cart=fakeCart;
    return (

        <div>
            <Link to='/menu'>&larr; back to menu</Link>
            <h2>Your Cart %Name%</h2>
            <div>
                <Link to='/order/new'>order Pizzas</Link>
                <button>Clear Cart</button>
            </div>
        </div>
    )
}

export default Cart
