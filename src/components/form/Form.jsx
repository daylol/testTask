import React, { useState } from 'react'
import DatePicker from 'react-date-picker';
import { useDispatch } from 'react-redux';
import { changeInfo } from '../../features/order/orderSlice';
import { Modal } from 'antd';
import './form.css'


export const Form = ({ update, setEditForm, setIsModalVisible, isModalVisible }) => {
    const [from, setFrom] = useState(update.from)
    const [to, setTo] = useState(update.to)
    const [type, setType] = useState(update.type)
    const [description, setDescription] = useState(update.description)
    const [date, setDate] = useState(update.date);
    const dispatch = useDispatch()
    const id = update.id




    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const updatedChanges = () => {
        const updatedData = {
            id,
            from,
            to,
            type,
            date,
            description,
        }
        dispatch(changeInfo(updatedData))
        setIsModalVisible(false)
    }


    return (
        <Modal title="Changing info" visible={isModalVisible} onOk={() => updatedChanges(update)} onCancel={handleCancel}>
            <div className="modal">
                <form onSubmit={e => e.preventDefault()}>
                    <div className="dest">
                        <div>
                            <label htmlFor="">from:</label>
                            <input type="text" value={from} onChange={e => setFrom(e.target.value)} required
                                maxLength='20' />
                        </div>
                        <div>
                            <label htmlFor="">to:</label>
                            <input type="text" value={to} onChange={e => setTo(e.target.value)} required
                                maxLength='20' />
                        </div>
                    </div>
                    <div className="about">
                        <div className="type">
                            <span>type:</span>
                            <select
                                value={type}
                                onChange={e => setType(e.target.value)}
                                name="">
                                <option value="Gadgets">Gadgets</option>
                                <option value="Drinks">Drinks</option>
                                <option value="Clothes">Clothes</option>
                                <option value="Medicines">Medicines</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="date">
                            <span>date:</span>
                            <DatePicker onChange={setDate} value={date} />
                        </div>
                    </div>

                    <div className="com">
                        <span>comments</span>
                        <textarea value={description} onChange={e => setDescription(e.target.value)} />
                    </div>
                </form>
            </div>
        </Modal>

    )
}
