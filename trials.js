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