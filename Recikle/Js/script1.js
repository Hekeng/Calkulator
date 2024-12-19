// 	// //задача со кавычками

// // let str = """;

// // function validQuotes(quotes) {
  
// //   let mass = quotes.split('');
// //   let massQuotes = [];
// //   let stack = [];

// //   for (let i = 0; i < mass.length; i++) {
// //     if (mass[i] === "'" || mass[i] === '"') {
// //       massQuotes.push(mass[i])
// //     }
// //   }

// //   for (let j = 0; j < massQuotes.length; j++) {

// //     if (stack.length === 0) {
// //       stack.push(massQuotes[j]);
// //       console.log("Записан символ", `${massQuotes[j]}`)
// //       continue;
// //     } 
    
// //     if (stack[stack.length - 1] === massQuotes[j]) {
// //       stack.pop();
// //     }  else {
// //       return false
// //     }
// //   }

// //   if (stack.length > 0) {
// //     return false;
// //   }return true;

// // }

// // console.log (validQuotes(str))

// //   const matchingQuotes = {
// //     '"': '"',
// //     "'": "'"
// //   };

//   //  if (braces === "") {
//   //   return true;
//   // }
//   // if (!"({[".includes(arr[0]) || !")}]".includes(arr[arr.length - 1]))  {
//   //   return false;
//   // } 


// // //Задачка с векторами
// // function collinearity(x1,y1, x2,y2) {

 
// //     // Вектор (0, 0) коллинеарен любому
// //     if ((x1 === 0 && y1 === 0) || (x2 === 0 && y2 === 0)) {
// //       return true;
// //     }
  
// //     // Проверка вертикальных и горизонтальных векторов
// //     if (x1 === 0 && x2 === 0) {
// //       return true; // Оба вектора на оси Y
// //     }
// //     if (y1 === 0 && y2 === 0) {
// //       return true; // Оба вектора на оси X
// //     }
  
// //     // Общая проверка пропорциональности через кросс-произведение
// //     return x1 * y2 === x2 * y1;
// //   }
  
// //   //console.log("сравнение вектора:", `${i}`, vector1[i]);
// //   //console.log("Полный массив:", vector1);



// // console.log(collinearity(-12,0, -24,0));


// //console.log(collinearity( x1,y1, x2,y2 ));

// // let d = 5; 

// // function rentalCarCost(d) {

// // if (d<3) {
// //   d = d *40;
// // }

// // if (d >=3 && d <7){
// //   d = d*40 - 20;
// // }
// // if (d>=7)
// //   d = d*40 - 50;

// //   return d;
// // }

// // const rentalCarCost = (d) => 

// // d < 3 ? d *40:
// // d < 7 ? d*40 - 20:
// // d*40 - 50


// // rentalCarCost(d);

// // console.log(rentalCarCost(d));


// // //for 2, 1, [0,1,2,3,4] return [ [0,1], [1,2], [2,3], [3,4] ]
// // // for 2, 2, [0,1,2,3,4] return [ [0,1], [2,3] ]
// // // for 2, 3, [0,1,2,3,4] return [ [0,1], [3,4] ]

// // let length = 0; // длина каждого окна (подсписка). 
// // let offset = 1; // шаг, с которым окно перемещается. Всегда положительное число.
// // let list = [0,1,2];

// // function window(length, offset, list) { 
// //   let result = [];
  
// //   // Если длина окна равна 0, нужно создать пустые массивы для каждого шага
// //   if (length === 0) {
// //     for (let i = 0; i <= list.length; i += offset) {
// //       result.push([]);
// //     }
// //     return result;
// //   }

// //   let start = 0;
// //   let end = 0;

// //   for (let i = 0; i < list.length; i++) {
// //     if (i === 0) {
// //       start = i;
// //       end = i + length;
// //       if (end <= list.length) { // Проверяем, достаточно ли элементов
// //         result.push(list.slice(start, end));
// //       }
// //     } else if (i >= 1) {
// //       start += offset;
// //       end += offset;
// //       if (end <= list.length) { // Проверяем, достаточно ли элементов
// //         result.push(list.slice(start, end));
// //       }
// //     }
// //   }

// //   return result;
// // }

// // let result = windows(length,offset,list);

// // console.log(result);

// //камень ножницы бумага
// // let player1 = 'rock';
// // let player2 = 'rock';

// // const rps = (p1, p2) => {
  
// //   let str = p1+','+p2;
// //   console.log(str);

// //   if (p1===p2) {
// //     return 'Draw!'
// //   }

// //   switch (str) {
// //     case 'scissors,paper':
// //       return 'Player 1 won!';
// //     case 'rock,scissors':
// //       return 'Player 1 won!';
// //     case 'paper,rock':
// //       return 'Player 1 won!';
// //     default:
// //       return 'Player 2 won!';
// //   }

// // };

// // let result = rps(player1, player2);

// // console.log(result);



// // //задача про ковбоя
// // let arr =  ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

// // function dirReduc(str){

// //   let north = 'NORTH';
// //   let south = 'SOUTH';
// //   let east = 'EAST';
// //   let west = 'WEST';

// //   let stack = [];

// //   const noValidPairs = {
// //     'NORTH':'SOUTH',
// //     'SOUTH':'NORTH',
// //     'EAST':'WEST',
// //     'WEST':'EAST'
// //   }

// //   let perem = pairs.NORTH;



// // return perem;
// // }

// // let result = dirReduc(arr);

// // console.log(result);  





// // let result = validBraces(str);
// // console.log(result);  // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]

// // let number = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];

// // function moveZeros(arr) {
// //   let neuArr = [];

// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] !== 0) {
// //       neuArr.push(arr[i]);
// //     }
// //   }

// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] === 0) {
// //       neuArr.push(0);
// //     }
// //   }

// //   return neuArr;
// // }

// // let result = moveZeros(number);
// // console.log(result);  // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]


// // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
// // let games = ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"];

// // function points(games) {

// //   let points = 0;
  
// //   for (let i = 0; i < games.length; i++) {
    
// //     let element = games[i].split(":");
// //     let myTeam = parseInt(element[0], 10);
// //     let opositTeam = parseInt(element[1], 10);
    

// //       if (myTeam > opositTeam){points += 3;} else
// //       if (myTeam < opositTeam){points += 0;} else
// //       {points += 1;} 


// //   }
// //   return points;
// // }


// // let result =  points(games);

// // console.log(result); 


//   // probe = hero (6, 4);
//   //console.log(stringToNumber('1234'));



//   // function hero (bullets, dragons) {
  

//   //   if (bullets >= dragons*2) {
//   //    return true;
//   //   } return false;
  
//   // }

//   // let probe = 0;

//   // function bmi(weight, height) {
//   //     let perem = '';
//   //     let quterHeight = 0;
  
//   //     quterHeight = (height * height);
//   //     perem = (weight / quterHeight);
  
//   //     if (perem <= 18.5) {return "Underweight"};
  
//   //     if (perem <= 25.0) {return "Normal"};
  
//   //     if (perem <= 30.0) {return "Overweight"};
  
//   //     if (perem > 30) {return "Obese"};
  
//   // }
  
  
//   //   probe = bmi(105, 1.75);

// // let probe = [];


// // function countBy(x, n) {
// //     let arrZ = [];

// //     for (let i = 1; i <= n; i++) {

// //         arrZ.push(x * i);
// //         console.log (arrZ);
// //     }


// //     return arrZ;
// //   }

// //   probe = countBy(2, 5);
// //   console.log(probe)









// // Input: [1, 5.2, 4, 0, -1]
// // Output: 9.2

// // Input: []
// // Output: 0

// // Input: [-2.398]
// // Output: -2.398


// // let inputArr = [1, 5.2, 4, 0, -1];
// // let probe = 0;

// // function sum (anyArr) {
    
// //     let summa = 0;


// //     for (let i = 0; i < anyArr.length; i++){

// //         if (anyArr[0] == 0 || (isNaN(anyArr[i]))) {
// //             summa = 0;
// //             return summa; 
// //         } else {
// //     summa += anyArr[i];
   
// //     }}

// //     return summa;
// // }

// // probe = sum (inputArr);

// // console.log (probe);










// // 'world'  =>  'dlrow'
// // 'word'   =>  'drow'

// // let variable = 'world';
// // let proba = '';

// // function solution(str){
// // 	let arr = str.split('');
// //     let reverseString='';
// //   for (let i = arr.length -1; i >= 0; i--) {
// //     reverseString += (arr[i]);
// // }
// //   return reverseString;
// // }
// // proba = solution(variable);
// // console.log(proba);







// // // smash(words) # returns "hello world this is great"

// // // let words = ['hello', 'world', 'this', 'is', 'great'];
// // // let proba ='';

// // // function smash (w) {
  
// // //   let wordsString = '';

// // //   for (let i = 0; i < w.length; i++) {
	
// // // 	if (i > 0) {
// // // 		wordsString += ' '+(w[i]);
// // // 	} else {wordsString += (w[i]);}

// // //   }

// // //   return wordsString;
// // // };
// // // proba = (smash (words));

// // // console.log (proba);
    
    
    
    
    
    
    
    
	// document.getElementById('inner-input').focus();

// глобальные переменные

var eventData;
var inputField = document.getElementById('inner-input');
var inputValue = inputField.value;

// var calculatedNumber = '';


const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '.', '=', '+', '-', '*', '/', '%', 'Enter', 'Delete', 'End', 'Home', 'Backspace', 'ArrowLeft', 'ArrowRight', 'F5', 'F12', 'Tab', 'Ctrl',
//'c' , 'C' , 'X' , 'x' , 'V' , 'v', 'Ctrl+C', 'Ctrl+V', 'Ctrl+X' 
];

const noTypingValues = ['Enter', 'Delete', 'End', 'Home', 'Backspace', 'ArrowLeft', 'ArrowRight', 'F5', 'F12', 'Tab', 'Ctrl',]

const typingValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '+', '-', '*', '/', ',']

const arithmeticSymbols = ['±', '+', '-', '*', '/', '=', ','];

// const noTypingValues = ['Null', '%', 'Enter', 'Delete', 'Backspace', 'ArrowLeft', 'ArrowRight', 'F5', 'F12', 'Tab' , 'CE', 'C', 'MC', 'MR', 'MS', 'M+', 'M-', '√', '±', '%']


// Запуск работы:
document.addEventListener('DOMContentLoaded', focusInputField);

document.addEventListener('mousedown', funcEvent);
document.addEventListener('keydown', funcEvent);
document.addEventListener('paste', funcEvent);


// Функция для установки фокуса и перемещения курсора в конец ввода
function focusInputField() {
   
    if (inputField) {
        inputField.focus(); // Устанавливаем фокус на элемент
        inputField.setSelectionRange(inputField.value.length, inputField.value.length); // Перемещаем курсор в конец
    }
}

// document.addEventListener('dragstart', funcEvent);

function funcEvent(event) {
	// Проверка на комбинации Ctrl+C, Ctrl+V, Ctrl+X
	if (event.ctrlKey && (event.code === 'KeyC' || event.code === 'KeyX' || event.code === 'KeyV')) {
		return; // Для этих комбинаций клавиш не предпринимаем никаких действий
	}

	if (event.type === 'paste') {
		eventData = handleEvent(event); // Обновляем eventData
		normalize(event);
		outputСhanges(eventData);
	}

	if (event.type === 'mousedown') {
		handleClickOutside(event); // Проверяем клик за пределами калькулятора
	}

	// Если событие произошло на элементе input и это нажатие клавиши
	if (event.target.tagName === 'INPUT' && event.type === 'keydown') {
		eventData = handleEvent(event); // Записываем событие в глобальную переменную
		normalize(event); // Сортируем ввод
		arithmetic(event, eventData, arithmeticSymbols);
		outputСhanges(eventData);
	}

	// Если событие произошло на элементе button и это mousedown
	if (event.target.tagName === 'BUTTON' && event.type === 'mousedown') {
		eventData = handleEvent(event); // Записываем событие в глобальную переменную
		normalize(event); // Сортируем ввод
		arithmetic(event, eventData, arithmeticSymbols);
		outputСhanges(eventData);
	}

	checkEvent(); // Просмотр содержимого элементов
}

function checkEvent(){


	//console.log('Event data:', eventData, 'Input field:', inputField, 'Input value:', inputValue); // проверяем состояния нашей перееменной при каждом событии
	//console.log(`inputField:`, inputField)

}

// Функция для обработки кликов за пределами "calc-conteiner"
function handleClickOutside(event) {
    let calcContainer = document.querySelector('.calc-conteiner');

    // Перезапись состояния inputField
    inputField = document.getElementById('inner-input');

    if (!inputField) {
        console.error('Input field not found!');
        return;
    }

    // Проверяем, был ли клик вне контейнера
    if (calcContainer && !calcContainer.contains(event.target)) {
        console.log('Clicked outside of calc-container'); // Лог клика вне контейнера

        // Устанавливаем курсор в конец строки
        setTimeout(function () {
            inputField.setSelectionRange(inputField.value.length, inputField.value.length); // Перемещаем курсор в конец
            console.log('Cursor set to position:', inputField.selectionStart, inputField.selectionEnd);

            // Переносим фокус на поле ввода
            inputField.focus(); 
            console.log('Input field focused');
        }, 0); // Отложенное выполнение
    }

    // Логируем, если фокус теряется
    inputField.addEventListener('blur', function logBlur() {
        console.log('Input lost focus');
        inputField.removeEventListener('blur', logBlur); // Удаляем обработчик, чтобы избежать дублирования
    });
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
		//event.preventDefault();
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

function outputСhanges(eventData) {

	if (!eventData.outputValue){
		return;
	}

	inputValue = inputField.value

	// Получаем позицию курсора
	let cursorPosition = inputField.selectionStart; // возвращаем позицию курсора
	let beforeCursor = inputValue.substring(0, cursorPosition); //записываем подстроку до курсора
	let afterCursor = inputValue.substring(cursorPosition); //записываем подстроку после курсора
	
		if (!inputValue) {
			inputField.value = eventData.outputValue;
			return
		} else if (inputValue === 0) {
			inputField.value = eventData.outputValue;
			return
		} else if (inputValue){
			inputField.value = beforeCursor + eventData.outputValue + afterCursor;
		}

	// Устанавливаем новую позицию курсора
	let newCursorPosition = cursorPosition + eventData.outputValue.length;
	inputField.setSelectionRange(newCursorPosition, newCursorPosition);

}



function normalize (event){
//убираем муссорные нажатия
blockNonUseKeys(event, validChars);

	// обрабатываем символы и делаем нужные замены
	if (eventData && eventData.value) {
		// // убираем дубли
		// doubleSymbolsDel(eventData);

		// уборка с экрана информации служебных клавишь калькулятора
		cleanWorckButtonsTyping (event, eventData, typingValues)

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

// уборка с экрана информации служебных клавишь калькулятора

function cleanWorckButtonsTyping(event, eventData, typingValues) {
    
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



        // let innerValue = eventData.value;
        
        // // Проверяем, входит ли innerValue в массив допустимых значений
        // if (!typingValues.includes(innerValue)) {
        //     // Если не входит, устанавливаем outputValue как пустую строку
        //     eventData.outputValue = '';
        // } else {
        //     // Если входит, оставляем значение как есть
        //     eventData.outputValue = innerValue;
        // }

}



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

// функция работы знака ','
function comaCheck(event, eventData) {
    
    inputValue = inputField.value;

	if (eventData.value === '.' || eventData.value === ','){
		event.preventDefault();
		if (inputValue.includes('.') || inputValue.includes(',')){
			eventData.outputValue = '';
		} else if (!inputValue || inputValue === ''){
			eventData.outputValue = '0,';
		} else {
			eventData.outputValue = ',';
		}

	}
}


// помещаем и фильтруем значения из буфера обмена: 

function bufferValueClean (event, eventData, typingValues) {


	if(eventData.type === 'paste'){
		event.preventDefault();

		let innerValue = eventData.value;
		let chengedValue = '';
	
    
    for (let i = 0; i < innerValue.length; i++) {
        if (typingValues.includes(innerValue[i])) {
			chengedValue += innerValue[i];
        } 
		
    }
	eventData.outputValue = chengedValue;

}
}


// не позволяем вводить несколько нудлей подряд перед значением

function nullOutput (event, eventData) {

    inputValue = inputField.value;

	if ((inputValue === 0 || inputValue === '0') && (eventData.value === 0 || eventData.value =='0')) {
		event.preventDefault();
		eventData.outputValue = '';
	} 
	else if ((inputValue == '0,') && (eventData.value === 0 || eventData.value =='0')){
		eventData.outputValue = eventData.value
	}

}

 // функция проверящая наличие арифметических значений и если они есть в средине числа выполняющая их а также работающая с запятой.

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
		negativeMeaning(event, eventData)
	

}

// делаем значение отрицательным

function negativeMeaning(event, eventData) {
	
	// inputValue = inputField.value;
	
	if (eventData.value === '±') {
		
		inputField.value = '';
        eventData.outputValue = inputValue * (-1);
	} 

}

// функция возвращающая точку для вычислений. 
function convertCommaToDot(inputValue) {

    if (typeof inputValue === 'string') {

		let comaFree = parseFloat(inputValue.replace(',', '.'));
		return comaFree;
    } 

}


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











// знак простая орифметика '+ - * /'
function arifmeticsSymbols(event, arithmeticSymbols) {
	inputValue = inputField.value;
	
	// if (!arithmeticSymbols.includes(inputValue)) {
	// 	eventData.calcNumber = inputValue + eventData.value;
	// } else if (arithmeticSymbols.includes(inputValue)) {
		
	// }

}

// работа клавиатуры

function keybord() {
	
}


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