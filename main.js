
const addTask = document.querySelector(".add");

const taskInput = document.querySelector(".head__body__input");

const tasks = document.querySelector(".list");



function createTask(text) {
    const ilElement = document.createElement("li");

    const divElement = document.createElement("div");

    const divElement1 = document.createElement("div");

    const divElement2 = document.createElement("div");

    const spanElement = document.createElement("span");

    const imgElement = document.createElement("img");

    ilElement.classList.add("list_item");

    divElement.classList.add("list_item__item");

    divElement2.classList.add("item_task");
    
    divElement1.classList.add("circle");

    spanElement.classList.add("task")

    imgElement.classList.add("cross-icon");

    imgElement.setAttribute("src", "images/icon-cross.svg");

    divElement2.appendChild(divElement1);
    divElement2.appendChild(spanElement);

    divElement.appendChild(divElement2);
    divElement.appendChild(imgElement);

    ilElement.appendChild(divElement);
    
    spanElement.textContent = text;
    const a = document.querySelector("#last-in-mobile");
    tasks.insertBefore(ilElement,a);
    taskInput.value = "";
}

taskInput.addEventListener("keydown", (event)=>{
    let text = taskInput.value;
    
    if(text !== "" && event.key === "Enter")
        createTask(text);
});


