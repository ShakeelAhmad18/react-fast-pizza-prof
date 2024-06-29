function CartItem({item}) {
    const {pizzaId, name, quantity, totalPrice}=item
    return (
        <li>
            <p>{quantity}&time; {name}</p>
            <div>
                <p>{formatCurrency(totalPrice)}</p>
            </div>
        </li>
    )
}

export default CartItem
