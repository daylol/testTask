import React, { useState } from 'react'

export const TypeOfParcel = ({ type, setType }) => {


    const ChooseType = (e) => {
        setType(e)
    }

    return (
        <div>
            <label htmlFor="">Type of parcel:</label>
            <select
                value={type}
                onChange={(e) => ChooseType(e.target.value)}
                name="Parcel">
                <option value="Gadgets">Gadgets</option>
                <option value="Drinks">Drinks</option>
                <option value="Clothes">Clothes</option>
                <option value="Medicines">Medicines</option>
                <option value="Other">Other</option>
            </select>
        </div>
    )
}
