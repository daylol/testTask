import React, { useState } from 'react'

export const Departure = ({ from, setFrom }) => {


    return (
        <div>
            <label>From:</label>
            <input
                value={from}
                type="text"
                placeholder='enter city'
                onChange={e => setFrom(e.target.value)}
                required
                maxLength='20'
            />
        </div>
    )
}
