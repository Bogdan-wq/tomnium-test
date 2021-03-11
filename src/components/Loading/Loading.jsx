import React from 'react';
import './Loading.scss';

const Loading = ({ label,className }) => {
    return (
        <div className={`${className} loading`}>
            {label}
        </div>
    )
}

Loading.defaultProps = {
    label:'Loading...',
    className:'',
}

export default Loading;