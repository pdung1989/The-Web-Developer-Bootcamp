var todos = ["Buy New Turtle"];
    
var input = prompt("What would you like to do?");

    while (input !== "quit") {
        //    handle input
        if(input === "list") {
            listTodo();
        } else if(input === "new") {
            newTodo();
        } else if (input === "delete") {
            deleteTodo();
        }
    //    ask again for new input 
        input = prompt("What would you like to do?");
    }
    console.log("OK, YOU QUIT THE APP");
    
    /* 
    while (input !== "quit") {
        //    handle input
        if(input === "new") {
            // ask for new todo
            var newTodo = prompt("Enter new todo");
            // add to todos array
            todos.push(newTodo);
        } else if(input === "list") {
            console.log(todos);
        }
        //    ask again for new input 
        input = prompt("What would you like to do?");
    }
    console.log("OK, YOU QUIT THE APP"); */

function listTodo() {
    console.log("*********");
    todos.forEach(function(nametodo, i) {
        console.log(i + ": " + nametodo);
    });
    console.log("*********")
       
    }

function newTodo() {
    // ask for new todo
    var newTodo = prompt("Enter new todo");
    // add to todos array
    todos.push(newTodo);
    console.log("Added Todo");
}

function deleteTodo() {
    //ask for index of nametodo tobe deleted
    var index = prompt("Enter index of todo to delete");
    //delete that nametodo
    //splice
    todos.splice(index,1);
    console.log("Deleted Todo");
}