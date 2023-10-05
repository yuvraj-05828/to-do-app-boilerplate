// Js code for ToDo list App

var listOfActivities = [];

// Create an array named list to store our to-do activities 

var input = document.getElementById("input");

// Create a DOM variable named input to get the to-do activities added from HTML form

var todolist = document.getElementById("todolist");

// Crate a DOM variable todolist ul tag 

document.getElementById("button").onclick = click;

function click(){
    listOfActivities.push(input.value);
    console.log(listOfActivities);
    input.value = "";
    showList();
}

function showList(){
    todolist.innerHTML=" ";
    listOfActivities.forEach(function (n, i){
        todolist.innerHTML +=
        "<li>" + 
        n +
        "<a onclick='editItem(" +
        i +
        ")'>Edit</a> " +
        "<a onclick='deleteItem(" +
        i +
        ")' >&times | </a></li>";
    })
}

function deleteItem(i){
    listOfActivities.splice(i, 1);
    showList();
}

function editItem(i){
    var newValue = prompt("Please insert your new value");
    listOfActivities.splice(i,1,newValue);
    showList();
}