import React, { useState } from 'react'
import { MdDeleteForever, MdModeEditOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../../../features/order/orderSlice';
import { Form } from '../../form/Form';
import './order.css'

export const Order = ({ order }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editForm, setEditForm] = useState(false)
    const [update, setUpdate] = useState({})

    const dispatch = useDispatch()

    const deleted = (id) => {
        dispatch(deleteOrder(id))
    }

    const changing = (order) => {

        setIsModalVisible(true)
        setUpdate(order)

    }

    return (
        <div className="order">
            <div className="info">
                <div className="general">
                    <div className="destination">
                        <div>
                            <span>From:</span>
                            <span><b>{order.from}</b></span>
                        </div>
                        <div>
                            <span>To:</span>
                            <span><b>{order.to}</b></span>
                        </div>
                    </div>
                    <div className="about">
                        <div>

                            <span>Will be ready:</span>
                            <span><b>{String(order.date).slice(0, 15)}</b>;</span>
                        </div>
                        <div>
                            <p>Type:</p>
                            <p><b>{order.type}</b></p>
                        </div>
                    </div>
                </div>


                <div>
                    <p>Description:</p>
                    <p><b>{order.description}</b></p>
                </div>
            </div>
            <div className="btn">

                <MdModeEditOutline onClick={() => changing(order)} />


                <MdDeleteForever onClick={() => deleted(order.id)} />

            </div>
            {isModalVisible && <Form isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} update={update} setEditForm={setEditForm} />}
        </div>
    )
}
