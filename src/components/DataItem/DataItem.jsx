import React from 'react';
import './DataItem.scss';

const DataItem = ({ rate,code,className }) => {
    return (
        <div className={`${className} dataItem`}>
            {code}:{rate.toFixed(3)}
        </div>
    )
}

export default DataItem;