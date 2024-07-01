//import formatCurrency from '/'

import { formatCurrency } from "../../utils/helpers";
import Button from '../../ui/Button'

function MenuItems({pizza}) {

    const {name, unitPrice, ingredients, soldOut, imageUrl}=pizza;

    return (
        <li className="flex gap-4 py-2">
            <img className={`h-24 ${soldOut ? 'opacity-70 grayscale' :''}`} src={imageUrl} alt={name} />
            <div className="flex flex-grow flex-col">
                <p>{name}</p>
                <p className="text-sm capitalize italic text-stone-500">{ingredients.join(', ')}</p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? <p className="text-sm">{formatCurrency( unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500">Sold Out</p>}
                    <Button type='primary' className='ml-34'>Add to cart</Button>
                </div>
            </div>
        </li>
    )
}

export default MenuItems
