/* thius function gets the task from the input */
function get_todos() {
    /* this creates an array of tasks that are inputted */
    var todos = new Array;
    /* this pulls the task that was saved in the web browser memory */
    var todos_str = localStorage.getItem('todo');
    /* if the input is not null then JSON.parse will communicate with the web browser to make 
    the task a JavaScript object */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* this function adds inputed tasks to get_todos function array */
function add() {
    /* this creates variables out of inputed tasks */
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /* this adds a new task to the end of the array */
    todos.push(task);
    /* this converts the task input into a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

/* this function keeps the tasks permanently displayed on the screen */
function show() {
    /* this sets the task that was retrieved as a variable */
    var todos = get_todos();
    /* this sets up each task as an unordered list */
    var html = '<ul>';
    /* this displays tasks in order of input */
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="'+ i + '">&#128077;</button></li>';
    };
    html += '</ul>';
    /* this displays the task as a list */
    document.getElementById('todos').innerHTML = html;
}
/* this displays the inputed task when the 'Add Item' button is clicked */
document.getElementById('add').addEventListener('click', add);
/* this will keep the inputs displayed permanently on screen */
show();

/* this tells the browser how to display the todo array after an item has been removed */
var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++)  {
    buttons[i].addEventListener('click', remove);
};

/* this function removes todo items from the array */
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /* this looks in the show() hoiw to display a removed item on the screen */
    show();

    return false;
}

