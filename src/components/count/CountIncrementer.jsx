import React, { memo } from 'react';
const CountIncrementer = ({Increment}) => {

    console.log("Increment called")

    return (
        <div>
            <button onClick={Increment}>Increase Count</button>
        </div>
    );
}

export default memo(CountIncrementer);