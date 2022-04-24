const inquirer = require("inquirer");
const {writeFile, renameFile} = require("./src/generateFiles");

let managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "Enter the Manager's name (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Manager's name!");
            return false;
        }
    },
    {
        type: "input",
        name: "manangerId",
        message: "Enter the Manager's ID (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in Manager's ID!");
            return false;
        }
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Enter the Manager's email (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the Manager's email!");
            return false;
        }
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "Enter the Manager's office number (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in Manager's office number!");
            return false;
        }
    },
]

let employeeTypeQuestion = [
    {
        type: "list",
        name: "employeeType",
        message: "Choose an intern or engineer to add to your roster.  Choose exit to just have a manager",
        choices: ["engineer", "intern", "exit"]
    }
]

let engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "Enter the engineer's name (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the engineer's name!");
            return false;
        }
    },
    {
        type: "input",
        name: "engineerId",
        message: "Enter the engineer's ID (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in engineer's ID!");
            return false;
        }
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "Enter the engineer's email (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the engineer's email!");
            return false;
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter the engineer's github username (Required)",
        validate: questionInput => {
            if (questionInput) {
                return true;
            }
            console.log("You have to type in the engineer's username!");
            return false;
        }
    },
]

let internQuestions = [
        {
            type: "input",
            name: "internName",
            message: "Enter the intern's name (Required)",
            validate: questionInput => {
                if (questionInput) {
                    return true;
                }
                console.log("You have to type in the intern's name!");
                return false;
            }
        },
        {
            type: "input",
            name: "internId",
            message: "Enter the intern's ID (Required)",
            validate: questionInput => {
                if (questionInput) {
                    return true;
                }
                console.log("You have to type in the intern's ID!");
                return false;
            }
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter the intern's email (Required)",
            validate: questionInput => {
                if (questionInput) {
                    return true;
                }
                console.log("You have to type in the intern's email!");
                return false;
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school (Required)",
            validate: questionInput => {
                if (questionInput) {
                    return true;
                }
                console.log("You have to type in the intern's school!");
                return false;
            }
        },
]

const makeTeam = async () => {
    let chooseEmployees = true;
    let managerInfo = await inquirer.prompt(managerQuestions);
    const {...manager} = managerInfo;
    manager.employees = manager.employees ?? [];

    while (chooseEmployees === true) {
        let {employeeType} = await inquirer.prompt(employeeTypeQuestion);

        if (employeeType === "intern") {
            let employee = await inquirer.prompt(internQuestions);
            manager.employees.push(employee);
        }
        else if (employeeType === "engineer") {
            let employee = await inquirer.prompt(engineerQuestions);
            manager.employees.push(employee);
        }
        else {
            chooseEmployees = false;
        }
    }
    console.log(manager.employees);
}

makeTeam();
