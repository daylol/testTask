import React from 'react'

export const Description = ({ description, setDescription }) => {
    return (
        <div>
            <label htmlFor="">Description of your parcel:</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} name="" />
        </div>
    )
}
