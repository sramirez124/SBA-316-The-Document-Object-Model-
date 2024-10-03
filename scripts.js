console.log("SBA Time, yay");

const todoList = document.getElementById("todoList");
const addTask = document.getElementById("addTask");
const welcome = document.getElementById("welcome")

/**
 * Welcome Prompt
 */

const userName = window.prompt("Hello! To start, what is your name?");
welcome.textContent = ("Welcome " + userName + " lets get to work!");
initialStart();

/**
 * Functions
 */
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
        initialStart();
    } else 
    
    for (let i = 1; i <= numOfIems; i++) {
        const div = document.createElement('div');

        for (let k = 1; k <= 1; k++) {
            const ol = document.createElement("ol");

            for (let j = 0; j < 1; j++) {
                
                // creates the list of items expected
                const taskID = taskNumber;
                const taskText = document.createElement("h2");
                taskText.setAttribute("id", "todoListTask");
                taskText.textContent = ("Task " + taskID);
                taskNumber++;

                const imageX = document.createElement("IMG");
                imageX.setAttribute("src", "images/gie5B478T.png");
                imageX.setAttribute("id", "deleteImage")
                imageX.setAttribute("width", "25");
                imageX.setAttribute("height", "25");
                imageX.setAttribute("alt", "Delete this task");

                const taskDetails = document.createElement('h3');
                taskDetails.textContent = "Click here to add your task name";

                const subDetails = document.createElement("ul");
                subDetails.setAttribute("id", "subtask");
                subDetails.textContent = "Click to details/subtask to the task"
    
                // appends everything
                ol.appendChild(taskText);
                taskText.appendChild(imageX);
                ol.appendChild(taskDetails);
                ol.appendChild(subDetails);
                
            }
            div.appendChild(ol);
        }
        todoList.appendChild(div);
    }
}

function changeText(taskText){
    console.log(taskText);
    textInput = window.prompt("Enter task information here");
    taskText = textInput;
    return taskText;
}

function addSubTask(target){
    const newSubTask = document.createElement("ul");
    newSubTask.setAttribute("id", "subtask");
    newSubTask.textContent = "Click to details/subtask to the task";
    newSubTask.appendChild(target);
    return target;
}

/**
 * Event Listeners
 */

todoList.addEventListener("click", (evt) =>{
    if (evt.target.localName === "h3" || evt.target.localName === "ul"){
        evt.target.textContent = changeText(evt.target.textContent);
    }
})

addTask.addEventListener("click", (evt) =>{
    if (evt.target.localName === "addTask"){
        console.log("You clicked a button");
        const addTask = window.prompt("How many task would you like to add? (Max is 10)");
        createListItem(addTask);
    }
})
