	// document.getElementById('inner-input').focus();

// Глобальные переменные
var eventData;
var inputField = document.getElementById('inner-input');
var inputValue;
//= inputField.value; // Начальное значение поля ввода

// var calculatedNumber = '';


const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '.', '=', '+', '-', '*', '/', '%', 'Enter', 'Delete', 'End', 'Home', 'Backspace', 'ArrowLeft', 'ArrowRight', 'F5', 'F12', 'Tab', 'Ctrl',
//'c' , 'C' , 'X' , 'x' , 'V' , 'v', 'Ctrl+C', 'Ctrl+V', 'Ctrl+X' 
];

const noTypingValues = ['Enter', 'Delete', 'End', 'Home', 'Backspace', 'ArrowLeft', 'ArrowRight', 'F5', 'F12', 'Tab', 'Ctrl',]

const typingValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '+', '-', '*', '/']

const arithmeticSymbols = ['±', '+', '-', '*', '/', '=', ','];

// const noTypingValues = ['Null', '%', 'Enter', 'Delete', 'Backspace', 'ArrowLeft', 'ArrowRight', 'F5', 'F12', 'Tab' , 'CE', 'C', 'MC', 'MR', 'MS', 'M+', 'M-', '√', '±', '%']


// Запуск работы: подписка на события
document.addEventListener('DOMContentLoaded', focusInputField);
document.addEventListener('mousedown', funcEvent);
document.addEventListener('keydown', funcEvent);
document.addEventListener('paste', funcEvent);


//                                          ==== Cursor Management Functions ====


// Функция для установки фокуса и перемещения курсора в конец строки при старте
function focusInputField() {
    if (inputField) {
        inputField.focus();
        setTimeout(function () {
            inputField.setSelectionRange(inputField.value.length, inputField.value.length);
        }, 0);
        
    } 
}

// Функция для обработки кликов вне кнопок калькулятора
function handleMissClick(event) {
    let clickedElement = event.target.tagName;
    // Проверяем, был ли клик вне контейнера
    if ((clickedElement === 'DIV'|| clickedElement === 'HTML'|| clickedElement === 'INPUT' )) {
        if (inputField) {
            // Используем setTimeout для корректной фокусировки
            setTimeout(function () {
                inputField.focus();
                    setTimeout(function () {
                        inputField.setSelectionRange(inputField.value.length, inputField.value.length);
                        if (inputField.selectionStart !== inputField.value.length) {
                            inputField.setSelectionRange(inputField.value.length, inputField.value.length);
                            }
                    }, 0);
            }, 0);
        } else {
            console.error('Input field is undefined');
        }
    }
}



//                                          ==== Events Handling ====




// Центральный обработчик событий
function funcEvent(event) {
    // Обновляем глобальные переменные
    updateGlobalState();

    // Проверка на комбинации Ctrl+C, Ctrl+V, Ctrl+X
    if (event.ctrlKey && (event.code === 'KeyC' || event.code === 'KeyX' || event.code === 'KeyV')) {
        console.log('Ctrl+C, Ctrl+X или Ctrl+V нажаты, событие игнорируется.');
        return;
    }

    // Обработка события вставки
    if (event.type === 'paste') {
        eventData = handleEvent(event);
        normalize(event);
        outputChanges(eventData);
    }

    // Обработка кликов вне контейнера
    if (event.type === 'mousedown') {
        handleMissClick(event);
    }

    // Обработка нажатия клавиш в поле ввода
    if (event.target.tagName === 'INPUT' && event.type === 'keydown') {
        eventData = handleEvent(event);
        normalize(event);
        arithmetic(event, eventData, arithmeticSymbols);
        outputChanges(eventData);
    }

    // Обработка кликов на кнопках
    if (event.target.tagName === 'BUTTON' && event.type === 'mousedown') {
        eventData = handleEvent(event);
        normalize(event);
        arithmetic(event, eventData, arithmeticSymbols);
        outputChanges(eventData);
    }

    // Лог содержимого после обработки событий
    checkEvent();
}

//отладочная функция переставляется в зависимости от необходимости
function checkEvent(){
   console.log ('eventData',eventData);
   console.log ('inputValue',inputValue);
   console.log ('inputField',inputField.value);
}

// Функция для обновления глобальных переменных
function updateGlobalState() {
    inputField = document.getElementById('inner-input'); 
}



// после первого изменения состояния задаем значение переменной eventData :

function handleEvent(event) {
    let eventType = '';
    let eventValue = '';

    if (event.target.tagName === 'BUTTON' && event.type === 'mousedown') {
        // Обработка клика мышью
        eventType = 'mousedown';
        eventValue = event.target.getAttribute('data-value');

        } else if (event.target.tagName === 'INPUT' && event.type === 'keydown') {
            // Обработка клавиатурного события
            eventType = 'keydown';
            eventValue = event.key;
            } else if (event.target.tagName === 'INPUT' && event.type === 'paste'){
                var clipboardData = event.clipboardData || window.clipboardData;
                var pastedData = clipboardData.getData('Text');
                eventType = 'paste';
                eventValue = pastedData;
        }

    // Всегда возвращаем объект, даже если событие не было обработано
    return {
        type: eventType,
        value: eventValue,
		calcNumber: '',
        outputValue: ''
    };
}

// функция отображения переменной на экране 
function outputChanges(eventData) {
  //  inputValue = inputField.value
	if (!eventData.outputValue){
		return;
	}
	// Получаем позицию курсора
	let cursorPosition = inputField.selectionStart; // возвращаем позицию курсора
	let beforeCursor = inputField.value.substring(0, cursorPosition); //записываем подстроку до курсора
	let afterCursor = inputField.value.substring(cursorPosition); //записываем подстроку после курсора
	
		if (!inputField.value) {
			inputField.value = eventData.outputValue;
			return
		} else if (inputField.value === 0) {
			inputField.value = eventData.outputValue;
			return
		} else if (inputField.value){
			inputField.value = beforeCursor + eventData.outputValue + afterCursor;
		}

	// Устанавливаем новую позицию курсора
	let newCursorPosition = cursorPosition + eventData.outputValue.length;
	inputField.setSelectionRange(newCursorPosition, newCursorPosition);

}


//                                          ==== functions that reduce values ​​to acceptable ====
function normalize (event){
//убираем муссорные нажатия
blockNonUseKeys(event, validChars);

	// обрабатываем символы и делаем нужные замены
	if (eventData && eventData.value) {
		// // убираем дубли
		// doubleSymbolsDel(eventData);

		// уборка с экрана информации служебных клавишь калькулятора
		cleanWorckButtonsTyping (eventData, typingValues)

		// обрабатываем замену запятой
		comaCheck(event, eventData);

		//сортируем значения в буфере 
		bufferValueClean (event, eventData, typingValues);

		// работа с нулями
		nullOutput (event, eventData);

		}

}

// функция отсортировки муссорных нажатий:
function blockNonUseKeys(event, validChars) {
    let inputChar = event.key;
    let isValid = false;
    
    for (let i = 0; i < validChars.length; i++) {
        if (validChars[i] === inputChar) {
            isValid = true;
            break;
        } 
    }

	if (isValid) {
    } else {
        event.preventDefault();
    }
}



// уборка с экрана информации служебных клавишь калькулятора

function cleanWorckButtonsTyping(eventData, typingValues) {
    
	if (!typingValues.includes(eventData.value)) {
		eventData.outputValue += '';
		eventData.calcNumber += '';
	} else if (typingValues.includes(eventData.value)){
		if (eventData.type === 'mousedown'){
		eventData.calcNumber += '';
		eventData.outputValue += eventData.value;
		} else if(eventData.type === 'keydown'){
			eventData.calcNumber += '';
			eventData.outputValue = '';
		}
	}
}

// функция работы знака ','
function comaCheck(event, eventData) {
   // inputValue = inputField.value;
	if (eventData.value === '.' || eventData.value === ','){
		event.preventDefault();
		if (inputField.value.includes('.') || inputField.value.includes(',')){
			eventData.outputValue = '';
		} else if (!inputField.value || inputField.value === ''){
			eventData.outputValue = '0,';
		} else {
			eventData.outputValue = ',';
		}
	}
}


// помещаем и фильтруем значения из буфера обмена: 

function bufferValueClean(event, eventData, typingValues) {
    if (eventData.type === 'paste') {
        event.preventDefault();

        // Получаем значение из буфера обмена
        var innerValue = eventData.value;

        // Берем текущее значение на экране
        var currentDisplayValue = eventData.outputValue || "";

        // Проверяем, есть ли запятая уже в текущем отображаемом значении
        var hasComma = currentDisplayValue.includes(',');

        // Строка для формирования отфильтрованного значения
        var changedValue = currentDisplayValue;

        // Проходим по каждому символу из буфера обмена
        for (var i = 0; i < innerValue.length; i++) {
            var char = innerValue[i];

            // Если символ разрешен
            if (typingValues.includes(char)) {
                // Если символ — это запятая
                if (char === ',') {
                    // Добавляем ее только если запятая еще не была добавлена
                    if (!hasComma) {
                        changedValue += char;
                        hasComma = true; // Устанавливаем флаг, что запятая уже есть
                    }
                } else {
                    // Добавляем любые другие разрешенные символы
                    changedValue += char;
                }
            }
        }

        // Обновляем значение в eventData.outputValue
        eventData.outputValue = changedValue;
    }
}


// не позволяем вводить несколько нудлей подряд перед значением

function nullOutput (event, eventData) {

    inputValue = inputField.value;

	if ((inputValue === 0 || inputValue === '0') && (eventData.value === 0 || eventData.value ==='0')) {
		event.preventDefault();
		eventData.outputValue = '';
	} 
	else if ((inputValue == '0,') && (eventData.value === 0 || eventData.value ==='0')){
        event.preventDefault();
		eventData.outputValue = eventData.value
	}

}

//                                          ==== calculator button functions ====

// делаем значение отрицательным









//                                          ==== arithmetic functions ====

 // 


// знак простая орифметика '+ - * /'
function arifmeticsSymbols(event, arithmeticSymbols) {
	
    let inputField = inputField.value;
    let eventValue = eventData.value;
    let digits = ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    let arifmeticsSymbols = ('+', '-', '*', '/');
    let equals = ('=');
    let squareRoot = ('√');
    let percentage = ('%');
    let plusMinus = ('±');
    let serviceKeys = ('MC', 'MR', 'MS', 'M+','M-', 'CE', 'C', '←');

    
    // for (let i = 0; i < inputValue.lenght, i++) {

    // }

	
	// if (!arithmeticSymbols.includes(inputValue)) {
	// 	eventData.calcNumber = inputValue + eventData.value;
	// } else if (arithmeticSymbols.includes(inputValue)) {
		
	// }

}


function negativeMeaning(eventData) {
	
	// inputValue = inputField.value;
	
	if (eventData.value === '±') {
		
		inputField.value = '';
        eventData.outputValue = inputValue * (-1);
	} 

}

 function arithmetic(event, eventData, arithmeticSymbols) {

	inputValue = inputField.value; 

	//	Если инпут содержит математический знак 

		for (let i = 0; i < arithmeticSymbols.length; i++) {

		if (inputValue.includes(arithmeticSymbols[i])) {

			if (inputValue.includes(',')){
				eventData.calcNumber = convertCommaToDot(inputValue);
			} else if (!inputValue.includes(',')){
				// eventData.calcNumber = inputField.value + eventData.value;
				// eventData.outputValue = inputField.value + eventData.value;
			}
		}
	}
		negativeMeaning(eventData)
}

// функция возвращающая точку для вычислений. 
function convertCommaToDot(inputValue) {

    if (typeof inputValue === 'string') {

		let comaFree = parseFloat(inputValue.replace(',', '.'));
		return comaFree;
    } 

}



// работа клавиатуры

function keybord() {
	
}

// // функция отображения только валидных символов:

        // function blockOutputSeviceKeys(event, eventData, noTypingValues){
        // 	if (noTypingValues.includes(eventData.value)){


        // 	}
        // }

        // // функция убирающая двоение изза работы функций и браузера

        // function doubleSymbolsDel(eventData){

        // 	if (eventData.type === 'keydown'){
        // 		eventData.outputValue = '';
        // 	}

        // }



        // let innerValue = eventData.value;
        
        // // Проверяем, входит ли innerValue в массив допустимых значений
        // if (!typingValues.includes(innerValue)) {
        //     // Если не входит, устанавливаем outputValue как пустую строку
        //     eventData.outputValue = '';
        // } else {
        //     // Если входит, оставляем значение как есть
        //     eventData.outputValue = innerValue;
        // }

// function cleanWorckButtonsTyping(event, eventData, typingValues) {
//     if (eventData.type === 'mousedown') {
//         let innerValue = eventData.value;
        
//         // Проверяем, входит ли innerValue в массив допустимых значений
//         if (!typingValues.includes(innerValue)) {
//             // Если не входит, устанавливаем outputValue как пустую строку
//             eventData.outputValue = '';
//         } else {
//             // Если входит, оставляем значение как есть
//             eventData.outputValue = innerValue;
//         }
//     } 
// }

	//if (noTypingValues.includes(eventData.value)){

	//если в значении не содержалось знаков то добавляем знак и создаем обчисляемое значение
		// if (!arithmeticSymbols.includes(eventData.value)){

		// 	eventData.calcNumber += '';
		// 	// если арифметический знак уже стоял надо понять что стояло
		// }else 
		
	//}
// function negativeMeaning(event, eventData) {
	
// 	// inputValue = inputField.value;
	
// 	if (eventData.value == '±') {
// 		inputField.value = '';
//         eventData.outputValue = inputValue * (-1);
// 	} 

// }


		// 	// если человек нажал равно надо попытаться вычислить значение в input 
		// if (eventData.value === '=' || eventData.value === 'Enter'){

		// }

	

	
// 		if (inputValue.includes(',')){

// 			convertCommaToDot(inputValue);
			

// 		} else {

// 	// negativeMeaning(event, eventData); // меняем знак значения

// 	// arifmeticsSymbols(event, arithmeticSymbols)

// }
	

// // функция возвращающая запятую для отображения. 
// function convertDotToComma() {

    
//     if (typeof calculatedNumber === 'number') {
//         calculatedNumber = calculatedNumber.toString().replace('.', ',');
//         // inputField.value = calculatedNumber;
//     }

// }


// знак плюс '='


// function updateCursorPosition(inputField, cursorOffset) {
//     let newCursorPosition = inputField.selectionStart + cursorOffset;
//     inputField.setSelectionRange(newCursorPosition, newCursorPosition);
// }

// function displayData(inputField, eventData) {
//     if (!eventData.outputValue) {
//         return;
//     }

//     inputValue = inputField.value;
//     let cursorPosition = inputField.selectionStart;
//     let beforeCursor = inputValue.substring(0, cursorPosition);
//     let afterCursor = inputValue.substring(cursorPosition);

//     if (!inputValue) {
//         inputField.value = eventData.outputValue;
//     } else if (inputValue === '0') {
//         inputField.value = eventData.outputValue;
//     } else {
//         inputField.value = beforeCursor + eventData.outputValue + afterCursor;
//     }

//     updateCursorPosition(inputField, eventData.outputValue.length);
// }

// function outputСhanges(eventData) {
//     let inputField = document.getElementById('inner-input');
//     displayData(inputField, eventData);
// }