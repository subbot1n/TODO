let list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
};

function changeStatus(task,status){
    list[task] = [status];
};

function addTask(task){
    list[task] = ["To Do"]
};

function deleteTask(task){
    delete list[task];
};

function showList(){
    let noTaskStatus = true;
    console.log("To Do:");
    for(let task in list){
        if (list[task] == "To Do") { 
            console.log(` "${task}" `);
            noTaskStatus = false;
            };
    }    
    if (noTaskStatus == true) {console.log(" -")};
    
    console.log("In Progress:");
    noTaskStatus = true;
    for(let task in list){
        if (list[task] == "In Progress") { 
            console.log(` "${task}" `); 
            noTaskStatus = false;
        };
        }    
    if (noTaskStatus == true) {console.log(" -")};  

    console.log("Done:");
    noTaskStatus = true;
    for(let task in list){
        if (list[task] == "Done") { 
            console.log(` "${task}" `);
            noTaskStatus = false;
         };
        }        
    if (noTaskStatus == true) {console.log(" -")};
};

changeStatus("write a post", "Done");
addTask('have a walk');
//addTask('create');
deleteTask('have a walk');
showList();


    