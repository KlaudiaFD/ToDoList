let $todoInput; //miejsce, gdzie uzytkownik wpisuje treść zadania
let $alertInfo; //informacja o braku zadań/koniecznosci dodania tekstu
let $addBtn; //prycisk add
let $ulList; // lista zadań
let $newTask; // nowo dodany li w funkcji addNewTask


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};


// pobieranie elementów 
const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo');
    $addBtn = document.querySelector('.addBtn');
    $ulList = document.querySelector('.todoList ul');

};

//nasłuchiwanie elemtów
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
};



const addNewTask = () => {
    if ($todoInput.value !== '') {
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $ulList.appendChild($newTask); //utworzenie elementu li ktory bedzie przechowywał treść któr wpisze uzytkownik

        $todoInput.value = '';
        $alertInfo.innerText = ''; // wyczyszczenie input oraz alertu po wpisaniu czegos przez użytkownika
        createToolsArea();
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania';
    };
};


const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    $newTask.appendChild(toolsPanel);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(editBtn);
    toolsPanel.appendChild(deleteBtn);

};

const checkClick = (e) => {
    if (e.target.closest('button').classList.contains('complete')) 
    {
        e.target.closest('li').classList.toggle('completed');
        e.target.closest('button').classList.toggle('completed');
    }else if (e.target.closest('button').className === 'edit'){
        console.log(e.target);
    }else if(e.target.closest('button').className === 'delete'){

    }
};


//dodatkowe zabezpieczenie, żeby załadował się najpierw HTML a później JS; uporządkowanie//
document.addEventListener('DOMContentLoaded', main);