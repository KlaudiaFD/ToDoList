let $todoInput; //miejsce, gdzie uzytkownik wpisuje treść zadania
let $alertInfo; //informacja o braku zadań/koniecznosci dodania tekstu
let $addBtn; //prycisk add
let $ulList; // lista zadań
let $newTask; // nowo dodany li w funkcji addNewTask


let $popup; //pobieramy popup
let $popupInfo; //alert jak się doda pusty tekst
let $editetTodo; //edytowany todo
let $popupInput; //tekst wpisywany w inpucie w popupie
let $addPopupBtn; //przycisk "zatwierdź"
let $closeTodoBtn; //przycisk zamknięcia popupa

let $idNumber = 0; // dzieki temu do kazdego nowego dodanego todo bedzie dodawany id

let $allTasks;


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

    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');

    $allTasks=$ulList.getElementsByTagName('li');

};

//nasłuchiwanie elemtów
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
    $addPopupBtn.addEventListener('click', changeTodo);
    $todoInput.addEventListener('keyup', enterCheck)
};



const addNewTask = () => {
    if ($todoInput.value !== '') {
        $idNumber++; // za każdym razem gdy coś wpiszemy, bedzie dodawane do taska id
        $newTask = document.createElement('li');
        $newTask.innerText = $todoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`); //do kazdego dodanego taska dodaje sie id który za każdym razem jest inkrementowany 
        $ulList.appendChild($newTask); //utworzenie elementu li ktory bedzie przechowywał treść któr wpisze uzytkownik

        $todoInput.value = '';
        $alertInfo.innerText = ''; // wyczyszczenie input oraz alertu po wpisaniu czegos przez użytkownika
        createToolsArea();
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania';
    };
};

//czy uzytkownik wcisnął enter
const enterCheck=()=>{
    if(event.keyCode===13){
        addNewTask();
    }
};



// tworzenie przyciskow edycji, usuwania i 'gotowe'
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
    if (e.target.closest('button').classList.contains('complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.closest('button').classList.toggle('completed');
    } else if (e.target.closest('button').className === 'edit') {
        editTask(e);
    } else if (e.target.closest('button').className === 'delete') {
        deleteTask(e);
    }
};

//edycja zadania
const editTask = (e) => {
    const oldTodo = e.target.closest('li').id;
    $editetTodo = document.getElementById(oldTodo);
    $popupInput.value=$editetTodo.firstChild.textContent;

    $popup.style.display = 'flex';

};

const changeTodo=()=>{
    if($popupInput.value !==''){
        $editetTodo.firstChild.textContent=$popupInput.value;
        $popup.style.display = 'none';
        $popupInfo.innerText='';
    }else{
        $popupInfo.innerText='Musisz podać jakąś treść!';
    }
};


//zamknięcie popupa
const closePopup = () => {
    $popup.style.display = 'none';
    $popupInfo.innerText='';
};

//usuwanie zadania
const deleteTask=(e)=>{
    const deleteTodo=e.target.closest('li');
    deleteTodo.remove();

    if($allTasks.length === 0){
        $alertInfo.innerText='Brak zadań na liście.';
    }else{

    }
};



//dodatkowe zabezpieczenie, żeby załadował się najpierw HTML a później JS; uporządkowanie//
document.addEventListener('DOMContentLoaded', main);