$(document).ready(readyNow)

function readyNow() {
    $('#submitButton').on('click', submitEmployeeInfo);
    // $('#submitButton').on('click', calculateCosts);

    // $(document).on('click', 'tr', deleteEmployeeInfo);

}


// Scripts MAP
/// Take in Employee Information
/// Add Employee object to an array of Employees
/// Loop through the array to display each employees data
/// in table form 

/// make a function that interacts with the delete button
/// use this button to delete an employee from the table


let totalSalaries = 0;

function submitEmployeeInfo() {
    // currently linked properly

    let employees = [];
    // EMPLOYEE OBJECT TO STORE VALUES FROM DOM INPUTS
    let singleEmployee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: Number($('#idInput').val()),
        jobTitle: $('#jobTitleInput').val(),
        salary: Number($('#salaryInput').val())
    }
    // ADD INPUT OBJECT TO AN ACCESSIBLE ARRAY STORAGE
    employees.push(singleEmployee);

    // FOR EACH EMPLOYEE - APPEND TO DOM
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

        // HANDLE TOTAL SALARY CALCULATIONS
        totalSalaries += employee.salary;
        console.log(totalSalaries);
        monthlyCosts = Math.ceil(totalSalaries / 12);
        console.log(monthlyCosts)

        // APPEND TOTAL SALARY TO THE DOM
        $('#totalMonthlyOutput').text(`Total Monthly Costs: $${monthlyCosts}`);




        // call the function to show total costs (on button click)
        // calculateCosts();

    }
    // RESET INPUTS FOR NEXT ENTRY 
    let el = $(':input');
    el.val('');
}

// function deleteEmployeeInfo(){

// }