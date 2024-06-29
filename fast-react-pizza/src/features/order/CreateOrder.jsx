
// https://uibakery.io/regex-library/phone-number
/*const isValidPhone = (str) =>
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      str
    );*/



   /* const fakeCart = [
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
      ];*/
      
function CreateOrder() {

    //const cart=fakeCart;

    return (
        <div>
            <h2>Ready to order? Let's go</h2>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" name="customer" required />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="tel" name="phone number" required/>
                </div>
                <div>
                    <label>Address</label>
                    <input type="text" name="address" required />
                </div>
                <div>
                    <input type="checkbox" name="priority" id="priority" />
                    <label htmlFor="priority">Want to you give order Priority</label>
                </div>
                <div>
                    <button>Give order</button>
                </div>
            </form>
        </div>
    )
}

export default CreateOrder
