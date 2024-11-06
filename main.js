
const changeTheme = document.querySelector('.head__logo img');

const html = document.documentElement;

const list = document.querySelector('.main__list');

const input = document.querySelector(".head__input input");


function createListItem(task) {
    return `
        <li class="main__list-item">
				<div class="main__circle"></div>
				<span class="main__task">${task}</span>
				<div class="main__logo">
					<img src="./images/icon-cross.svg" alt="eliminar">
				</div>
		</li>
    `
}


function finishTask() {
    const completed = document.querySelector('.main__circle');
    const task = document.querySelector(".main__task");
    if(completed != null) {
        completed.addEventListener("click", ()=>{
            completed.classList.add("main__circle--check");
            task.classList.add("main__task--finish");
        });
    }
}


function deleteTask() {
    const cross = document.querySelector('.main__logo');
    //touchstart == click
    cross.addEventListener('click', ()=>{
        const ilElement = cross.parentElement;
        ilElement.classList.add('main__logo--delete');
        
    });
}

input.addEventListener("keydown", (event)=>{
    if(event.key === "Enter") {
        const task = input.value;
        input.value = '';
        const li = createListItem(task);
        const ul = document.querySelector('.main__list');
        ul.insertAdjacentHTML('afterbegin', li);
        finishTask();
        deleteTask();
    }
});

changeTheme.addEventListener('click', ()=>{

    const src = changeTheme.getAttribute("class");

    if(src === 'head__logo--moon') {
        changeTheme.setAttribute("src", './images/icon-sun.svg');
        changeTheme.classList.toggle("head__logo--moon");
        html.dataset.theme = 'dark';
    }
    else {
        changeTheme.setAttribute("src", './images/icon-moon.svg');
        changeTheme.classList.toggle("head__logo--moon");
        html.dataset.theme = 'light';
    }
});












