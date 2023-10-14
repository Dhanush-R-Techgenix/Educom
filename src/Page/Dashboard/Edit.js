import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "../Dashboard/edit.css"

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [firstName, setFirstName] = useState(selectedEmployee.firstName);
    const [lastName, setLastName] = useState(selectedEmployee.lastName);
    const [email, setEmail] = useState(selectedEmployee.email);
    const [salary, setSalary] = useState(selectedEmployee.salary);
    const [date, setDate] = useState(selectedEmployee.date);

    const handleUpdate = e => {
        e.preventDefault();

        if (!firstName || !lastName || !email || !salary || !date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            firstName,
            lastName,
            email,
            salary,
            date
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="edit-user-container">

            <img style={{ width: '25%', height: '500px' }} src="https://assets.website-files.com/643f7373d3f6653157617339/6506b631318c91630d74f39c_3D%20Component.png"></img>
            <div className='edit-user-main'>
                <form onSubmit={handleUpdate}>

                    <div className='edit-user-sub-container'>
                        <h1>Edit user details</h1><br></br><br></br>
                        <div className='edit-user-sub'>
                            <label id='user-label' htmlFor="firstName">First Name:</label><br></br>
                            <input id="firstName"
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className='edit-user-sub'>
                            <label id='user-label' htmlFor="lastName">Last Name:</label><br></br>
                            <input
                                id="lastName"
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)}
                            />
                        </div>
                        <div className='edit-user-sub'>
                            <label id='user-label' htmlFor="email">Email:</label><br></br>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='edit-user-sub'>
                            <label id='user-label' htmlFor="salary">Salary ($):</label><br></br>
                            <input
                                id="salary"
                                type="number"
                                name="salary"
                                value={salary}
                                onChange={e => setSalary(e.target.value)}
                            />
                        </div>
                        <div className='edit-user-sub'>
                            <label id='user-label' htmlFor="date">Date:</label><br></br>
                            <input
                                id="date"
                                type="date"
                                name="date"
                                value={date}
                                onChange={e => setDate(e.target.value)}
                            />
                        </div>
                        <div className='edit-user-sub-button'>
                            <input id='update-button' type="submit" value="Update" />
                            <input
                                id='cancel-button'
                                style={{ marginLeft: '12px' }}
                                className="muted-button"
                                type="button"
                                value="Cancel"
                                onClick={() => setIsEditing(false)}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit;