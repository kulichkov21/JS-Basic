'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};
let textDiv = document.querySelector('.text');

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/


/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    changeActiveClass(event);
    changeText(event);
}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event
 */
function changeActiveClass(event) {
    let aNotactive = event.target.parentNode.parentNode;
    aNotactive.childNodes.forEach(function (q) {
        if (q.nodeName == 'LI') {
            q.childNodes[1].classList.remove('active');
        }
    })
    event.target.classList.add('active');
}

/**
 * Эта фукнция должна читать текст (например через textContent) из
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event
 */
function changeText(event) {
    if (event.target.textContent == 'Link 1') {
        textDiv.innerHTML = texts.text1;
    }
    if (event.target.textContent == 'Link 2') {
        textDiv.innerHTML = texts.text2;
    }
    if (event.target.textContent == 'Link 3') {
        textDiv.innerHTML = texts.text3;
    }
}

let links = document.querySelectorAll('.nav-link');
links.forEach(function (event) {
    event.addEventListener('click', clickHandler);

});
