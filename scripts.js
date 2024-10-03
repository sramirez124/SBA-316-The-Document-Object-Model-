console.log("SBA Time, yay");

const todoList = document.querySelector("todoList");
const welcome = document.getElementById("welcome")

const taskListMax = 10;

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
    if(numOfIems === typeof(string)){
        console.log("numOfItems is a" , typeof(numOfIems));
        parseInt(numOfIems);
        console.log("numOfItems is a" , typeof(numOfIems));
    }
    // for (let i = 0; i < 1; i++) {
    //     const tr = document.createElement('tr');
        
    //     for (let j = 0; j < 3; j++) {
    //         const element = array[j];
            
    //     }
    
    //     todoList.appendChild(tr);
    // }
}
