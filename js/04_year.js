(function () {
    'use strict';

    let year = prompt('Введите любой год.');

    if (year % 4 === 0 || year % 400 === 0 && year % 100 !== 0) {
        alert(`${year} год високосный`)
    } else {
        alert(`${year} год не високосный`)
    }

})();




// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100