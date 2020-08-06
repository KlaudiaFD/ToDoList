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

const addNewTask = () => {
    if ($todoInput.value !== '') {
        $newTask.document.createElement('li');
        $newTask.innerText='$todoInput.value';


    } else {
        alertInfo.innerText = 'Wpisz treść zadania'
    };
};








//nasłuchiwanie elemtów
const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTask);
};



//dodatkowe zabezpieczenie, żeby załadował się najpierw HTML a później JS; uporządkowanie//
document.addEventListener('DOMContentLoaded', main);