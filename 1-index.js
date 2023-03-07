const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

addEventListener();

function addEventListener() {
    form.addEventListener("submit", addTodo); // tek çalışıyor

}

function addTodo(e) {
    const newTodo = todoInput.value.trim(); //boşluk bıraktığında silme

    addTodoToUI(newTodo);



    e.preventDefault();
}

function addTodoToUI(newTodo) { //string değerini list item olarak uı'ya gönderme             - dışarı yazma - fafa`` appendchild l L


    /* <li class="list-group-item d-flex justify-content-between">
    Todo 1
    <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>
    
    </li> */

    // List item oluşturma
    const ListItem = document.createElement("li");
    // Link oluşturma
    const Link = document.createElement("a");
    Link.href = "#";
    Link.className = "delete-item";
    Link.innerHTML = "<i class = 'fa fa-remove'></i>";

    ListItem.className = "list-group-item d-flex justify-content-between"

    // Text node ekleme

    ListItem.appendChild(document.createTextNode(newTodo));
    ListItem.appendChild(Link);

    // Todo list'e list item'ı ekleme
    todoList.appendChild(ListItem);
    todoInput.value = "";
}
