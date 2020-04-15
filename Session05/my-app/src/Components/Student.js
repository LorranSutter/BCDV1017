import React from 'react';

const Student = ({ match }) => {
    const { studentName, studentNo } = match.params;

    let output = [`The student name is "${studentName}!"`];
    if (studentNo) {
        output.push(`The student number is ${studentNo}`)
    }

    return (
        <div>
            <p>Student</p>
            <div>
                {output.map((item, key) =>
                    <p key={key}>{item}</p>
                )}
            </div>
        </div>
    );
}

export default Student;