(function () {
    'use strict';

    let sum = prompt("Введите сумму покупки");
    let total = 0;

    if (sum < 200) {
        total = sum;
    }
    if (sum >= 200 && sum < 300) {
        total = sum - (sum * 0.03);
    }
    if (sum >= 300 && sum < 500) {
        total = sum - (sum * 0.05);
    }
    if (sum >= 500) {
        total = sum - (sum * 0.07);
    }

    alert(`Сумма к оплате с учетом скидки - ${total}`);
})();


// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.