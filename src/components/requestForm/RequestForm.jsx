import React, { useState } from 'react'
import { Arrival } from './arrival/Arrival'
import { Calendar } from './calendar/Calendar'
import { Departure } from './departure/Departure'
import { Description } from './description/Description'
import { TypeOfParcel } from './typeOfParcel/TypeOfParcel'
import { Modal } from 'antd';
import { useDispatch } from 'react-redux'
import { addOrder } from '../../features/order/orderSlice'
import { v4 } from 'uuid'

import './requestForm.css'



export const RequestForm = ({ isModalVisible, handleOk, handleCancel }) => {
    const dispatch = useDispatch()
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [type, setType] = useState('Gadgets')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date());

    const addOrderHandler = () => {
        const order = {
            id: v4(),
            from,
            to,
            type,
            date: String(date),
            description
        }
        dispatch(addOrder(order))

        setFrom('')
        setTo('')
        setType('Gadgets')
        setDate(new Date())
        setDescription('')
        handleOk(false)
    }

    return (

        <div className="modal">

            <Modal title="Create order" visible={isModalVisible} onOk={addOrderHandler} onCancel={handleCancel}>
                <form className="form" onSubmit={e => e.preventDefault()}>
                    <div className="dest">
                        <Departure from={from} setFrom={setFrom} />
                        <Arrival to={to} setTo={setTo} />
                    </div>

                    <div className="parcel">
                        <TypeOfParcel type={type} setType={setType} />

                        <Calendar date={date} setDate={setDate} />
                    </div>

                    <div className="descrip">
                        <Description description={description} setDescription={setDescription} />
                    </div>

                </form>
            </Modal>

        </div>
    )
}
