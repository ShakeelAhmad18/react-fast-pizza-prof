import {Form, redirect, useActionData, useNavigation} from 'react-router-dom'
import { createOrder } from '../../services/apiResturant'
import Button from '../../ui/Button';


// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      str
    );



    const fakeCart = [
        {
          pizzaId: 12,
          name: "Mediterranean",
          quantity: 2,
          unitPrice: 16,
          totalPrice: 32,
        },
        {
          pizzaId: 6,
          name: "Vegetale",
          quantity: 1,
          unitPrice: 13,
          totalPrice: 13,
        },
        {
          pizzaId: 11,
          name: "Spinach and Mushroom",
          quantity: 1,
          unitPrice: 15,
          totalPrice: 15,
        },
      ];
      
function CreateOrder() {
    const navigation=useNavigation() 
    const isSubmitting=navigation.state === 'submitting'
    const formError=useActionData()
    const cart=fakeCart;

    return (
        <div>
            <h2 className='my-3'>Ready to order? Let's go</h2>
            <Form method='POST'>
               <label>Name</label>
                <div>
                    <input className='input' type="text" name="customer" required />
                </div>
                <label>Phone Number</label>
                <div>
                    <input className='input' type="tel" name="phone" required/>
                </div>
                {formError?.phone && <p>{formError.phone}</p>}
                <label>Address</label>
                <div>
                    <input className='input' type="text" name="address" required />
                </div>
                <div>
                    <input className='my-3 mx-2 h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-yellow-400' type="checkbox" name="priority" id="priority" />
                    <label htmlFor="priority">Want to you give order Priority</label>
                </div>
                <div>
                    <input type="hidden" name='cart' value={JSON.stringify(cart)} />
                    <Button disabled={isSubmitting}>{isSubmitting ? 'Placing Order...' : 'order now'}</Button>
                </div>
            </Form>
        </div>
    )
}

export async function action({request}){
    const formData=await request.formData()
    const data=Object.fromEntries(formData)
    const order={
        ...data,
        cart:JSON.parse(data.cart),
        priority:data.priority === 'on'
    }
    
    const errors={};
    if(!isValidPhone(order.phone)){
        errors.phone='Please give us your Correct phone Number,we must need it to contact with you'
    }

    if(Object.keys(errors) > 0) return errors; 

    const newOrder=await createOrder(order)
    return redirect(`/order/${newOrder.id}`)
}

export default CreateOrder
