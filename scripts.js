console.log("SBA Time, yay");

const todoList = document.getElementById("todoList");
const welcome = document.getElementById("welcome")



/**
 * Welcome Prompt
 */


const userName = window.prompt("Hello! To start, what is your name?");
welcome.textContent = ("Welcome " + userName + " lets get to work!");
initialStart();

function initialStart(){
    const taskListStart = window.prompt("How many task would you like to add? (Max is 10)");
    console.log("TakeListStart is a" , typeof(taskListStart));
    createListItem(taskListStart)
}


function createListItem(numOfIems){
    const taskListMax = 10;
    numOfIems = parseInt(numOfIems);
    let taskNumber = 1;
    // console.log("numOfItems being created" , numOfIems);

    if(numOfIems + taskNumber > taskListMax){
        window.confirm("You can only have 10 items on the list, you already have " + taskNumber + " and are trying to add " + numOfIems);
    } else 
    
    for (let i = 0; i < 1; i++) {
        const div = document.createElement('div');
        
        for (let j = 1; j <= numOfIems; j++) {
            // creates the list of items expected
            const ol = document.createElement("ol");
            const taskText = document.createElement("h2");
            taskText.textContent = ("Task " + taskNumber);
            taskNumber++;

            const taskDetails = document.createElement('h3');
            taskDetails.textContent = "Click here to add your task details";

            // appends everything
            ol.appendChild(taskText);
            ol.appendChild(taskDetails);
            div.appendChild(ol);
        }
    
        todoList.appendChild(div);
    }
}
