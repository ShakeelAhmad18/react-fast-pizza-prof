//import {Link} from 'react-router-dom'
import Button from '../../ui/Button'
import LinkButton from '../../ui/LinkButton'

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
    return (
        <div>
             <LinkButton to='/menu'>&larr; back to menu</LinkButton>
            <h2>Your Cart %Name%</h2>
            <div>
                <Button to='/order/new'>order Pizzas</Button>
                <Button>Clear Cart</Button>
            </div>
        </div>
    )
}

export default Cart
