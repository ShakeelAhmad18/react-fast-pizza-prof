// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiResturant";
import {
    calMinutesLeft,
    formatCurrency,
    formatDate,
  } from "../../utils/helpers";
  
 
  

function Order() {
    const order=useLoaderData()
   
    const {
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery,
      } = order;
      const deliveryIn = calMinutesLeft(estimatedDelivery);
    return (
        <div>
            <div>
              <h2>
                {status}
              </h2>
              <div>
                {priority && <span>Priority</span>}
              </div>
            </div>
          <div>
            <p>
                {deliveryIn >= 0 ? `Only ${calMinutesLeft(estimatedDelivery)} minutes left`:'Order has arrived'}
            </p>
            <p>(Estimated Delivery: {formatDate(estimatedDelivery)})</p>

            <div>
                <p>
                    Price Pizza: {formatCurrency(orderPrice)}
                </p>
                {priority && <p>Price Priority: {formatCurrency(priorityPrice)}</p>}
                <p>To pay on Delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
            </div>
          </div>
        </div>
    )
}

export async function loader({params}){
    const order=await getOrder(params.orderId)
    return order;
}

export default Order
