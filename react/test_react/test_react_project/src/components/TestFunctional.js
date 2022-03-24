import React, { useState } from 'react';

const Counter = props => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <button onClick={ handleClick }>{ count }</button>
        </div>
    );
}

export default Counter;