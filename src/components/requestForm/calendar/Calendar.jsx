import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

export const Calendar = ({ date, setDate }) => {
    //const [date, setDate] = useState(new Date());



    return (
        <div>
            <DatePicker onChange={setDate} value={date} />
        </div>
    );
}