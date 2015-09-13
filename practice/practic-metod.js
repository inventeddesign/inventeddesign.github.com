//Создайте страницу, которая предлагает ввести два числа и выводит их сумму.

var num1 = prompt("Enter first number");
var num2 = prompt("Enter second number");
function result(a, b){
  return ((+a * 100) + (+b * 100))/100;
}
alert(result(num1, num2));


//Представьте себе электронный магазин. Цены даны с точностью до копейки
//(цента, евроцента и т.п.).
//Вы пишете интерфейс для него. Основная работа происходит на сервере,
//но и на клиенте все должно быть хорошо. Сложение цен на купленные товары
//и умножение их на количество является обычной операцией.
//Получится глупо, если при заказе двух товаров с ценами 0.10$ и 0.20$
//человек получит общую стоимость 0.30000000000000004$:

var price1 = 0.1, price2 = 0.2;
alert( (price1 + price2).toFixed(2) );


//Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:


function getDecimal(a){
  var b = a.toFixed(0);
  if ( (a-b) > 0 ){
  return +(a - b).toFixed(3);
  }
  else {
    return +((a - b) * -1).toFixed(3);
  }
}
alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2
