$(document).ready(readyNow)

function readyNow() {
    $('button').on('click', submitEmployeeInfo);

}


// Scripts MAP
/// Take in Employee Information
/// Add Employee object to an array of Employees
/// Loop through the array to display each employees data
/// in table form 

/// make a function that interacts with the delete button
/// use this button to delete an employee from the table

let employees = [];

function submitEmployeeInfo() {
    // currently linked properly
    let singleEmployee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: Number($('#idInput').val()),
        jobTitle: $('#jobTitleInput').val(),
        salary: Number($('#salaryInput').val())
    }
    console.log(singleEmployee);

}

