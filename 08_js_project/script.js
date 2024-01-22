// // let todoList = [{ item: "Go to Gym", date: "2024-01-19" }];
// // displayTodos();

// let todoList = JSON.parse(localStorage.getItem("todos")) || [
//   { item: "Go to Gym", date: "2024-01-19" },
// ];
// displayTodos();

// function addTodo() {
//   let todoInput = document.getElementById("todoInput");
//   let todoItem = todoInput.value;

//   let todoDate = document.getElementById("todoDate");
//   let todoItemDate = todoDate.value;

//   let emptyMsg = document.getElementById("emptyMsg");

//   if (!todoItem || !todoItemDate) {
//     // alert("Please enter both a todo and a date.");
//     emptyMsg.innerHTML = "Enter the work you are planning to do! ✍️🎯";
//     return;
//   }
//   emptyMsg.innerHTML = "";

//   todoList.push({ item: todoItem, date: todoItemDate });
//   todoInput.value = "";
//   todoDate.value = "";
//   updateLocalStorage();
//   displayTodos();
// }

// function displayTodos() {
//   let todoContainer = document.querySelector(".todoContainer");

//   let newHtml = "";

//   for (let i = 0; i < todoList.length; i++) {
//     let item = todoList[i].item;
//     let date = todoList[i].date;
//     newHtml =
//       newHtml +
//       `
//         <span>${item}</span>
//         <span>${date}</span>
//         <button id="deleteBtn" onClick="deleteTodo(${i})" >Done</button>
//        `;
//   }
//   // <button id="deleteBtn" onClick="todoList.splice(${i}, 1)
//   // displayTodos();">Done</button>

//   todoContainer.innerHTML = newHtml;
// }

// function deleteTodo(index) {
//   todoList.splice(index, 1);
//   updateLocalStorage();
//   displayTodos();
// }

// function updateLocalStorage() {
//   localStorage.setItem("todos", JSON.stringify(todoList));
// }

let todoList = JSON.parse(localStorage.getItem("todos")) || [
  { item: "Go to Gym", date: "2024-01-19" },
];
displayTodos();

function addTodo() {
  let todoInput = document.getElementById("todoInput");
  let todoItem = todoInput.value;

  let todoDate = document.getElementById("todoDate");
  let todoItemDate = todoDate.value;

  let emptyMsg = document.getElementById("emptyMsg"); // Define emptyMsg

  if (!todoItem || !todoItemDate) {
    emptyMsg.innerHTML = "Enter the work you are planning to do! ✍️🎯";
    return;
  }
  emptyMsg.innerHTML = "";

  todoList.push({ item: todoItem, date: todoItemDate });
  todoInput.value = "";
  todoDate.value = "";
  updateLocalStorage();
  displayTodos();
}

function displayTodos() {
  let todoContainer = document.querySelector(".todoContainer");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let item = todoList[i].item;
    let date = formatCustomDate(todoList[i].date);
    newHtml =
      newHtml +
      ` 
        <span id="todoWork">🎯 ${item}</span>
        <span>📅: ${date}</span>
        <button id="deleteBtn" onClick="deleteTodo(${i})">Done</button>
       `;
  }

  todoContainer.innerHTML = newHtml;
}

function formatCustomDate(dateString) {
  const dateObj = new Date(dateString);
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear() % 100; // Get last two digits of the year

  return `${day}/${month}/${year}`;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  updateLocalStorage();
  displayTodos();
}

function updateLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todoList));
}
