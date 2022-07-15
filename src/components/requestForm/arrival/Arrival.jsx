import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export const Arrival = ({ to, setTo }) => {

    const dispatch = useDispatch()

    return (
        <div>
            <label htmlFor="">To:</label>
            <input
                type="text"
                value={to}
                placeholder='enter city'
                onChange={e => setTo(e.target.value)}
                required
                maxLength='20'
            />
        </div>
    )
}
