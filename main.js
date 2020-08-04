let $todoInput; //miejsce, gdzie uzytkownik wpisuje treść zadania
let $alertInfo; //informacja o braku zadań/koniecznosci dodania tekstu
let $addBtn; //prycisk add
let $ulList; // lista zadań

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};


// pobieranie elementów 
const prepareDOMElements = () => {
    $todoInput=document.querySelector('.todoInput');
    $alertInfo=document.querySelector('.alertInfo');
    $addBtn=document.querySelector('.addBtn');
    $ulList=document.querySelector('.todoList ul');

};

//nasłuchiwanie elemtów
const prepareDOMEvents = () => {};




















//dodatkowe zabezpieczenie, żeby załadował się najpierw HTML a później JS; uporządkowanie//
document.addEventListener('DOMContentLoaded', main);