/* Удаление элементов из массива по содержанию в другом массиве (только цифры) */

function myArrayDiff(a, b) {
    const result = a.filter((i) => {
        if (!b.includes(i)) {
            return true;
        }
    })

    return result;
}

/* более простой вариант */

function arrayDiff(a, b) {
    return a.filter(i => !b.includes(i))
}

/* console.log(arrayDiff([1, 7, 77, 5, 5, 6, 0, 19, 10], [5, 7])) */


/* Удаление всех элементов массива, кроме чисел */

function listFiltering(array) {
    return array.filter(i => typeof(i) === 'number')
}

/* console.log(listFiltering([1, 2, 0, 'a', 'b'])) */


/* Сортировка цифр внутри числа в порядке убывания */

function myDescendingOrder(n) {
    const arrayNumbers = n.toString().split('');
    arrayNumbers.sort((a, b) => {
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
    }).reverse()
    const numberSorted = Number(arrayNumbers.join(''))
    return numberSorted
}

/* более простой вариант */

function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}

/* console.log(descendingOrder(123456789)) */


/* Определение целого квадратного числа */

const isSquare = function (n) {
    return Number.isInteger(Math.sqrt(n))
}

/* console.log(isSquare(25)) */


/* Построение треугольника по правилам логики */

function isTriangle(a, b, c)
{
   return (a + b) > c && (b + c) > a && (a + c) > b
}

/* console.log(isTriangle(0, 3, 2)) */


/* Подсчет гласных букв в строке (за искл. 'y') */

function myGetCount(str) {
    const arrayStr = str.split('');
    let count = 0;
    arrayStr.forEach((item) => {
        if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            count += 1;
        }
    })

    return count
}

/* более простой вариант */

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

/* console.log(getCount('genuya')) */


/* Сумма двух самых маленьких положительных целых чисел в массиве */

function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}

/* console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) */


/* Валидация ПИН-кода состоящего из 4-х или 6-и цифр */

function validatePIN(pin) {
    const regex = /^(\d{4}|\d{6})$/;
    return regex.test(pin);
}

/* console.log(validatePIN('1234f'));
console.log(validatePIN('1234'));
console.log(validatePIN('12345'));
console.log(validatePIN('123456')); */