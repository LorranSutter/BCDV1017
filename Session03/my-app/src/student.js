import React from 'react';

import Courses from './courses';

const Student = props => {
    return (
        <>
            <p>Student <b>{props.name}</b> with student <b>{props.number}</b></p>
            <Courses enrolled={props.enrolled} />
        </>
    );
}

export default Student;