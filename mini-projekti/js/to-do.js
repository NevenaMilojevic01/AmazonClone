const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodo();

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTodo();
})

function addTodo() {
  const inputElement = document.querySelector('.name');
  const name = inputElement.value;

  const dateElement = document.querySelector('.date');
  const date = dateElement.value; 

  todoList.push({
    name,
    dueDate: date
  });

  inputElement.value = '';
  renderTodo();
}

function renderTodo() {
  let todoListHTML = '';

todoList.forEach((todoObj, i) => {
    const name = todoObj.name;
    const dueDate = todoObj.dueDate;
    const html = `<div>${name}</div><div> ${dueDate}</div><button class="btnDelete js-delete-button">Delete</button>`;
    todoListHTML += html;
})

// for (let i = 0; i < todoList.length; i++) {
//     const todoObj = todoList[i];
//     const name = todoObj.name;
//     const dueDate = todoObj.dueDate;
//     const html = `<div>${name}</div><div> ${dueDate}</div><button class="btnDelete" onclick="todoList.splice(${i}, 1); renderTodo();">Delete</button>`;
//     todoListHTML += html;
//   }
  document.querySelector('.text').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-button').forEach((deleteBtn, i) => {
    deleteBtn.addEventListener('click', () => {
      todoList.splice(i, 1);
      renderTodo();
    });
  });

}