import React, { useState } from 'react';

const Button = () => {
    const [buttonText, setButtonText] = useState('Click me, please');

    function handleClick() {
        return setButtonText('Thanks, been clicked!');
    }

    return (
        <button onClick={handleClick}>
            {buttonText}
        </button>
    );
}

export default Button;