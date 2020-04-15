import React from 'react';
import Moment from 'react-moment';

const Timer = () => {
    return (
        <Moment format="HH:mm:ss">
            {Date.now()}
        </Moment>
    );
}

export default Timer;