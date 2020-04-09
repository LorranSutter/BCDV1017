import React from 'react';

const Courses = (props) => {

    let courses = []
    for (const elem of props.enrolled)
        courses.push(<p><b>Course {elem}</b></p>);

    return (
        <>
            <p>Student is enrolled in</p>
            {courses}
        </>
    );
}

export default Courses;