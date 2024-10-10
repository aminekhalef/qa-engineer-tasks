# Welcome to StackEdit!

# qa-engineer-tasks

Brief description of the project.

## Prerequisites

Make sure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (version 12 or higher recommended)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

## Setup Instructions

Follow these steps to set up and run the project on your local machine.

 -  Clone the project to a local repository


>     git clone https://github.com/your-username/your-repo-name.git

  - Navigate to project directory

    

>   `cd qa-engineer-tasks`

 - Install dependencies

>    `npm install`

 - install cypress if not already installed

>     npm install cypress --save-dev

 - Run the tests using following command, you can run them on chrome via:
 - 

>     npx cypress run --browser chrome


### Notes on the Tests
The showcase test is currently failing due to an issue with scrolling to the bottom of the page, which is necessary to fetch all product cards. 

Additionally, in an ideal scenario, I would have applied the Page Object Model (POM) design principle to enhance the organization and maintainability of the test code. This approach would allow for better abstraction and reusabilitiy of page elements and actions, making the tests more readable.
