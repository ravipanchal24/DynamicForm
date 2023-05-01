import React, { memo } from 'react';
const CountDecrementer = ({Decrement}) => {

    console.log("Decrement called")

    return (
        <div>
            <button onClick={Decrement}>Decrease Count</button>
        </div>
    );
}

export default memo(CountDecrementer);