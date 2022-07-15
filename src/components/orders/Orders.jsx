import { useSelector } from 'react-redux'
import { Order } from './order/Order'

import "./orders.css"

export const Orders = () => {

    const orders = useSelector(state => state.order.order)

    return (
        <>
            {
                orders.length > 0 ? <p className='amount'>Amout of yours order:<span><b> {orders.length}</b></span></p> : null
            }
            <div className="orders" >

                {
                    orders?.map(order => (<Order key={order.id} order={order} />))
                }
            </div>
        </>
    )
}
