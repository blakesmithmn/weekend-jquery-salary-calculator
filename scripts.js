$(document).ready(readyNow)

function readyNow() {
    $('#submitButton').on('click', submitEmployeeInfo);
    // $(document).on('click', 'tr', deleteEmployeeInfo);

}


// Scripts MAP
/// Take in Employee Information
/// Add Employee object to an array of Employees
/// Loop through the array to display each employees data
/// in table form 

/// make a function that interacts with the delete button
/// use this button to delete an employee from the table



function submitEmployeeInfo() {
    // currently linked properly
    let employees = [];
    let singleEmployee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: Number($('#idInput').val()),
        jobTitle: $('#jobTitleInput').val(),
        salary: Number($('#salaryInput').val())
    }

    employees.push(singleEmployee);

    for (let employee of employees) {
        $('.employeeTableBody').append(`
            <tr>
                <td> ${employee.firstName} </td>
                <td> ${employee.lastName} </td>
                <td> ${employee.id} </td>
                <td> ${employee.jobTitle} </td>
                <td> ${employee.salary} </td>
            </tr>
            `);
        console.log(employees);

    }
}


