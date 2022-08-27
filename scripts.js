$(document).ready(readyNow)

function readyNow() {
    $('#submitButton').on('click', submitEmployeeInfo);
    $(document).on('click', '.deleteButton', deleteEmployeeInfo);

}


// Scripts MAP
/// Take in Employee Information
/// Add Employee object to an array of Employees
/// Loop through the array to display each employees data
/// in table form 

/// make a function that interacts with the delete button
/// use this button to delete an employee from the table

/// global variables to manipulate later
let totalSalaries = 0;
let monthlyCosts = 0;

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
                <td> <button class="deleteButton">Delete</button> </td>
            </tr>
            `);
        console.log('List of Employees & Their info', employees);

        // HANDLE TOTAL SALARY CALCULATIONS
        totalSalaries += employee.salary;
        console.log('Total Employee Salaries', totalSalaries);
        monthlyCosts = Math.ceil(totalSalaries / 12);
        console.log('Total Monthly Costs:', monthlyCosts)

        // CAN"T GO ABOVE 20,000

        if (monthlyCosts > 20000) {
            console.log('Budget Reached');
            $('.monthlyCost').css("background-color", "red");
        }

        // APPEND TOTAL SALARY TO THE DOM
        $('#totalMonthlyOutput').text(`Total Monthly Costs: $${monthlyCosts}`);




        // call the function to show total costs (on button click)
        // calculateCosts();

    }
    // RESET INPUTS FOR NEXT ENTRY 
    let el = $(':input');
    el.val('');
}

function deleteEmployeeInfo() {
    // select the button clicked using JQUERY
    // clear the closest table row

    // let currentRow = $(this).closest("tr");
    // let deletedCost = currentRow.last("td").val();
    // console.log(deletedCost);
    // totalSalaries -= deletedCost;
    // totalSalaries / 12;
    // console.log(totalSalaries);
    $(this).closest('tr').empty();
}