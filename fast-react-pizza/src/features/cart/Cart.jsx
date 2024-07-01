//import {Link} from 'react-router-dom'
import Button from '../../ui/Button'
import LinkButton from '../../ui/LinkButton'
import CartItem from './CartItem';

 const  fakeCart = [
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
  ];

function Cart() {
  const cart = fakeCart;

    return (
        <div>
             <LinkButton to='/menu'>&larr; back to menu</LinkButton>
            <h2 className='mt-7 text-xl font-semibold'>Your Cart %Name%</h2>
          
          <ul className='divide-y divide-stone-300'>
            {cart.map((item=><CartItem item={item} key={item.id}/>))}
          </ul>

            <div className='mt-7 space-x-4'>
                <Button to='/order/new' type='primary'>order Pizzas</Button>
                <Button type='base'>Clear Cart</Button>
            </div>
        </div>
    )
}

export default Cart
