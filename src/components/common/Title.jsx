import React from 'react';

const Title = ({title,titleStyle}) => {
    return (
        <div className={`${titleStyle} p-10`}>
            <span className='h2 capitalize relative after:w-2/3 after:h-1 after:bg-secondary after:absolute after:-bottom-1 after:right-0 after:rounded' >{title}</span>
        </div>
    );
};

export default Title;