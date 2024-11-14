// Sorting typing keyboard buttons

// const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '.', '=', '+', '-', '*', '/', '%', 'Enter', 'Delete', 'Backspace', 'ArrowLeft', 'ArrowRight', 'F5', 'F12'];


// function handleKeyPress(event, validChars) {
//     let inputChar = event.key;
//     let isValid = false;
    
//     for (let i = 0; i < validChars.length; i++) {
//         if (validChars[i] === inputChar) {
//             isValid = true;
//             break;
//         }
//     }

//     if (!isValid) {
//         event.preventDefault();
//     }

// }

// document.addEventListener('keydown', (event) => handleKeyPress(event, validChars));

//отлавливаем нажатия кнопок мышкой:

// var clickedElement;
var clickedElementDataValue;

function handleButtonClick(event) {
    let clickedElement = event.target;

    if (clickedElement.tagName === 'BUTTON') {
        // console.log(event.target)
        let buttonValue = clickedElement.getAttribute('data-value');
        buttonsPresTyping (buttonValue);
        
        clickedElementDataValue = buttonValue;

    }
    
}

document.addEventListener('click', handleButtonClick);

//выводим нажатие кнопок на экране

function buttonsPresTyping(value) {

    let inputField = document.getElementById('inner-input');
    let inputState = inputField.value;

    if (inputState !== '0') {
        inputState += value;
    } else {
        inputState = value;
    }
    inputField.value = inputState;
    
}


//data from form

var innerInputValue;
var historyInputValue;

function gatherFormData() {
	innerInputValue = document.getElementById('inner-input').value;
	historyInputValue = document.getElementById('history-input').value;
}

// вызов функции
document.getElementById('main-form').addEventListener('input', gatherFormData);



// // сортируем на группы кнопки 

// function sortButtonsType (){


// }




// // смотрим было ли чтото ранее в инпуте

// function checkInput (innerInputValue){


//     if (innerInputValue != null) {
        
//     } else {
        
//     }
// }


// // Функция для обработки значения кнопки
// function processButtonClick(value) {
//     // Здесь вы можете добавить логику обработки значения кнопки
//     // Например, добавить значение в поле ввода
//     const inputField = document.getElementById('inner-input');
//     inputField.value += value;
// }

// // Добавляем слушатель событий для всего калькулятора
// document.getElementById('calculator').addEventListener('click', handleButtonClick);






// .button-block {
// }
// .memory-buttons {
// }
// .button-wraper {
// }
// .control-matematics-buttons {
// }
// .control-numers-buttons {
// }
// .control-buttons {
// }
// .numbers {
// }
// .arifmetich-simbols {
// }
