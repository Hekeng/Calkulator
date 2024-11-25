document.addEventListener('DOMContentLoaded', function() {
    // Инициализация переменной inputField после загрузки DOM
    var inputField = document.getElementById('inner-input');
    
    // Проверяем, что элемент найден
    if (inputField) {
        // Устанавливаем фокус и перемещаем курсор в конец
        inputField.focus();
        inputField.setSelectionRange(inputField.value.length, inputField.value.length);

        // Добавляем обработчики событий
        inputField.addEventListener('focus', function() {
            console.log('Cursor position at focus:', inputField.selectionStart);
        });

        inputField.addEventListener('mousedown', function() {
            console.log('Cursor position at click:', inputField.selectionStart);
        });

        // Подключаем обработчик для кликов вне контейнера
        document.addEventListener('mousedown', function(event) {
            handleClickOutside(event, inputField);
        });
    } else {
        console.error('Element with id "inner-input" not found');
    }
});

// Функция для обработки кликов за пределами "calc-conteiner"
function handleClickOutside(event, inputField) {
    let calcContainer = document.querySelector('.calc-conteiner');
    if (calcContainer && !calcContainer.contains(event.target)) {
        console.log('Clicked outside of calc-container');
        if (inputField) {
            inputField.focus(); // Устанавливаем фокус на input
            inputField.setSelectionRange(inputField.value.length, inputField.value.length); // Перемещаем курсор в конец
        }
    }
}
// const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '.', '=', '+', '-', '*', '/', '%', 'Enter', 'Delete', 'End', 'Home', 'Backspace', 'ArrowLeft', 'ArrowRight', 'F5', 'F12', 'Tab', 'Ctrl',
// //'c' , 'C' , 'X' , 'x' , 'V' , 'v', 'Ctrl+C', 'Ctrl+V', 'Ctrl+X' 
// ];

// const noTypingValues = ['Enter', 'Delete', 'End', 'Home', 'Backspace', 'ArrowLeft', 'ArrowRight', 'F5', 'F12', 'Tab', 'Ctrl',]

// const typingValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '+', '-', '*', '/', ',']

// const arithmeticSymbols = ['±', '+', '-', '*', '/', '=', ','];

// const noTypingValues = ['Null', '%', 'Enter', 'Delete', 'Backspace', 'ArrowLeft', 'ArrowRight', 'F5', 'F12', 'Tab' , 'CE', 'C', 'MC', 'MR', 'MS', 'M+', 'M-', '√', '±', '%']


















//function funcEvent(event) {
// 	// Проверка на комбинации Ctrl+C, Ctrl+V, Ctrl+X
// 	if (event.ctrlKey && (event.code === 'KeyC' || event.code === 'KeyX' || event.code === 'KeyV')) {
// 		return; // Для этих комбинаций клавиш не предпринимаем никаких действий
// 	}

// 	if (event.type === 'paste') {
// 		eventData = handleEvent(event); // Обновляем eventData
// 		normalize(event);
// 		outputСhanges(eventData);
// 	}

// 	// Если событие произошло на элементе input и это нажатие клавиши
// 	if (event.target.tagName === 'INPUT' && event.type === 'keydown') {
// 		eventData = handleEvent(event); // Записываем событие в глобальную переменную
// 		normalize(event); // Сортируем ввод
// 		arithmetic(event, eventData, arithmeticSymbols);
// 		outputСhanges(eventData);
// 	}

// 	// Если событие произошло на элементе button и это mousedown
// 	if (event.target.tagName === 'BUTTON' && event.type === 'mousedown') {
// 		eventData = handleEvent(event); // Записываем событие в глобальную переменную
// 		normalize(event); // Сортируем ввод
// 		arithmetic(event, eventData, arithmeticSymbols);
// 		outputСhanges(eventData);
// 	}

// 	checkEvent(); // Просмотр содержимого элементов
//}

// function checkEvent(){


// 	//console.log('Event data:', eventData, 'Input field:', inputField, 'Input value:', inputValue); // проверяем состояния нашей перееменной при каждом событии
// 	console.log(`inputField:`, inputField)

// }

// // после первого изменения состояния задаем значение переменной eventData :

// function handleEvent(event) {
//     let eventType = '';
//     let eventValue = '';

//     if (event.target.tagName === 'BUTTON' && event.type === 'mousedown') {
//         // Обработка клика мышью
//         eventType = 'mousedown';
//         eventValue = event.target.getAttribute('data-value');

//     } else if (event.target.tagName === 'INPUT' && event.type === 'keydown') {
//         // Обработка клавиатурного события
//         eventType = 'keydown';
//         eventValue = event.key;
//     } else if (event.target.tagName === 'INPUT' && event.type === 'paste'){
// 		//event.preventDefault();
// 		var clipboardData = event.clipboardData || window.clipboardData;
// 		var pastedData = clipboardData.getData('Text');
// 		eventType = 'paste';
//         eventValue = pastedData;
// 	}

//     // Всегда возвращаем объект, даже если событие не было обработано
//     return {
//         type: eventType,
//         value: eventValue,
// 		calcNumber: '',
//         outputValue: ''
//     };
// }

// // функция отображения переменной на экране 

// function outputСhanges(eventData) {

// 	if (!eventData.outputValue){
// 		return;
// 	}

// 	inputValue = inputField.value

// 	// Получаем позицию курсора
// 	let cursorPosition = inputField.selectionStart; // возвращаем позицию курсора
// 	let beforeCursor = inputValue.substring(0, cursorPosition); //записываем подстроку до курсора
// 	let afterCursor = inputValue.substring(cursorPosition); //записываем подстроку после курсора
	
// 		if (!inputValue) {
// 			inputField.value = eventData.outputValue;
// 			return
// 		} else if (inputValue === 0) {
// 			inputField.value = eventData.outputValue;
// 			return
// 		} else if (inputValue){
// 			inputField.value = beforeCursor + eventData.outputValue + afterCursor;
// 		}

// 	// Устанавливаем новую позицию курсора
// 	let newCursorPosition = cursorPosition + eventData.outputValue.length;
// 	inputField.setSelectionRange(newCursorPosition, newCursorPosition);

// }



// function normalize (event){
// //убираем муссорные нажатия
// blockNonUseKeys(event, validChars);

// 	// обрабатываем символы и делаем нужные замены
// 	if (eventData && eventData.value) {
// 		// // убираем дубли
// 		// doubleSymbolsDel(eventData);

// 		// уборка с экрана информации служебных клавишь калькулятора
// 		cleanWorckButtonsTyping (event, eventData, typingValues)

// 		// обрабатываем замену запятой
// 		comaCheck(event, eventData);

// 		//сортируем значения в буфере 
// 		bufferValueClean (event, eventData, typingValues);

// 		// работа с нулями
// 		nullOutput (event, eventData);

// 		}

// }

// // функция отсортировки муссорных нажатий:
// function blockNonUseKeys(event, validChars) {
//     let inputChar = event.key;
//     let isValid = false;
    
//     for (let i = 0; i < validChars.length; i++) {
//         if (validChars[i] === inputChar) {
//             isValid = true;
//             break;
//         } 
//     }

// 	if (isValid) {
//     } else {
//         event.preventDefault();
//     }
// }

// // // функция отображения только валидных символов:

// // function blockOutputSeviceKeys(event, eventData, noTypingValues){
// // 	if (noTypingValues.includes(eventData.value)){


// // 	}
// // }

// // // функция убирающая двоение изза работы функций и браузера

// // function doubleSymbolsDel(eventData){

// // 	if (eventData.type === 'keydown'){
// // 		eventData.outputValue = '';
// // 	}

// // }

// // уборка с экрана информации служебных клавишь калькулятора

// function cleanWorckButtonsTyping(event, eventData, typingValues) {
    
// 	if (!typingValues.includes(eventData.value)) {
// 		eventData.outputValue += '';
// 		eventData.calcNumber += '';
// 	} else if (typingValues.includes(eventData.value)){
// 		if (eventData.type === 'mousedown'){
// 		eventData.calcNumber += '';
// 		eventData.outputValue += eventData.value;
// 		} else if(eventData.type === 'keydown'){
// 			eventData.calcNumber += '';
// 			eventData.outputValue = '';
// 		}
// 	}



//         // let innerValue = eventData.value;
        
//         // // Проверяем, входит ли innerValue в массив допустимых значений
//         // if (!typingValues.includes(innerValue)) {
//         //     // Если не входит, устанавливаем outputValue как пустую строку
//         //     eventData.outputValue = '';
//         // } else {
//         //     // Если входит, оставляем значение как есть
//         //     eventData.outputValue = innerValue;
//         // }

// }



// // function cleanWorckButtonsTyping(event, eventData, typingValues) {
// //     if (eventData.type === 'mousedown') {
// //         let innerValue = eventData.value;
        
// //         // Проверяем, входит ли innerValue в массив допустимых значений
// //         if (!typingValues.includes(innerValue)) {
// //             // Если не входит, устанавливаем outputValue как пустую строку
// //             eventData.outputValue = '';
// //         } else {
// //             // Если входит, оставляем значение как есть
// //             eventData.outputValue = innerValue;
// //         }
// //     } 
// // }

// // функция работы знака ','
// function comaCheck(event, eventData) {
    
//     inputValue = inputField.value;

// 	if (eventData.value === '.' || eventData.value === ','){
// 		event.preventDefault();
// 		if (inputValue.includes('.') || inputValue.includes(',')){
// 			eventData.outputValue = '';
// 		} else if (!inputValue || inputValue === ''){
// 			eventData.outputValue = '0,';
// 		} else {
// 			eventData.outputValue = ',';
// 		}

// 	}
// }


// // помещаем и фильтруем значения из буфера обмена: 

// function bufferValueClean (event, eventData, typingValues) {


// 	if(eventData.type === 'paste'){
// 		event.preventDefault();

// 		let innerValue = eventData.value;
// 		let chengedValue = '';
	
    
//     for (let i = 0; i < innerValue.length; i++) {
//         if (typingValues.includes(innerValue[i])) {
// 			chengedValue += innerValue[i];
//         } 
		
//     }
// 	eventData.outputValue = chengedValue;

// }
// }


// // не позволяем вводить несколько нудлей подряд перед значением

// function nullOutput (event, eventData) {

//     inputValue = inputField.value;

// 	if ((inputValue === 0 || inputValue === '0') && (eventData.value === 0 || eventData.value =='0')) {
// 		event.preventDefault();
// 		eventData.outputValue = '';
// 	} 
// 	else if ((inputValue == '0,') && (eventData.value === 0 || eventData.value =='0')){
// 		eventData.outputValue = eventData.value
// 	}

// }

//  // функция проверящая наличие арифметических значений и если они есть в средине числа выполняющая их а также работающая с запятой.

// function arithmetic(event, eventData, arithmeticSymbols) {

// 	inputValue = inputField.value; 

// 	//	Если инпут содержит математический знак 

// 		for (let i = 0; i < arithmeticSymbols.length; i++) {

// 		if (inputValue.includes(arithmeticSymbols[i])) {

// 			if (inputValue.includes(',')){
// 				eventData.calcNumber = convertCommaToDot(inputValue);
// 			} else if (!inputValue.includes(',')){
// 				// eventData.calcNumber = inputField.value + eventData.value;
// 				// eventData.outputValue = inputField.value + eventData.value;
// 			}

// 		}

// 	}
// 		negativeMeaning(event, eventData)
	

// }

// // делаем значение отрицательным

// function negativeMeaning(event, eventData) {
	
// 	// inputValue = inputField.value;
	
// 	if (eventData.value === '±') {
		
// 		inputField.value = '';
//         eventData.outputValue = inputValue * (-1);
// 	} 

// }

// // функция возвращающая точку для вычислений. 
// function convertCommaToDot(inputValue) {

//     if (typeof inputValue === 'string') {

// 		let comaFree = parseFloat(inputValue.replace(',', '.'));
// 		return comaFree;
//     } 

// }


// 	//if (noTypingValues.includes(eventData.value)){

// 	//если в значении не содержалось знаков то добавляем знак и создаем обчисляемое значение
// 		// if (!arithmeticSymbols.includes(eventData.value)){

// 		// 	eventData.calcNumber += '';
// 		// 	// если арифметический знак уже стоял надо понять что стояло
// 		// }else 
		
// 	//}
// // function negativeMeaning(event, eventData) {
	
// // 	// inputValue = inputField.value;
	
// // 	if (eventData.value == '±') {
// // 		inputField.value = '';
// //         eventData.outputValue = inputValue * (-1);
// // 	} 

// // }


// 		// 	// если человек нажал равно надо попытаться вычислить значение в input 
// 		// if (eventData.value === '=' || eventData.value === 'Enter'){

// 		// }

	

	
// // 		if (inputValue.includes(',')){

// // 			convertCommaToDot(inputValue);
			

// // 		} else {

// // 	// negativeMeaning(event, eventData); // меняем знак значения

// // 	// arifmeticsSymbols(event, arithmeticSymbols)

// // }
	







// // // функция возвращающая запятую для отображения. 
// // function convertDotToComma() {

    
// //     if (typeof calculatedNumber === 'number') {
// //         calculatedNumber = calculatedNumber.toString().replace('.', ',');
// //         // inputField.value = calculatedNumber;
// //     }

// // }











// // знак простая орифметика '+ - * /'
// function arifmeticsSymbols(event, arithmeticSymbols) {
// 	inputValue = inputField.value;
	
// 	// if (!arithmeticSymbols.includes(inputValue)) {
// 	// 	eventData.calcNumber = inputValue + eventData.value;
// 	// } else if (arithmeticSymbols.includes(inputValue)) {
		
// 	// }

// }

// // работа клавиатуры

// function keybord() {
	
// }


// // знак плюс '='


// // function updateCursorPosition(inputField, cursorOffset) {
// //     let newCursorPosition = inputField.selectionStart + cursorOffset;
// //     inputField.setSelectionRange(newCursorPosition, newCursorPosition);
// // }

// // function displayData(inputField, eventData) {
// //     if (!eventData.outputValue) {
// //         return;
// //     }

// //     inputValue = inputField.value;
// //     let cursorPosition = inputField.selectionStart;
// //     let beforeCursor = inputValue.substring(0, cursorPosition);
// //     let afterCursor = inputValue.substring(cursorPosition);

// //     if (!inputValue) {
// //         inputField.value = eventData.outputValue;
// //     } else if (inputValue === '0') {
// //         inputField.value = eventData.outputValue;
// //     } else {
// //         inputField.value = beforeCursor + eventData.outputValue + afterCursor;
// //     }

// //     updateCursorPosition(inputField, eventData.outputValue.length);
// // }

// // function outputСhanges(eventData) {
// //     let inputField = document.getElementById('inner-input');
// //     displayData(inputField, eventData);
// // }