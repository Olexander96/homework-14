//Мінімум
// 1) Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
    let a = 0.1;
    let b = 0.2;
    let sum1 = a + b;
    console.log(sum1.toFixed(1))

// 2) Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
    let x = "1";
    let y = 2;
    let sum2 = +x + y;
    console.log(sum2)

// 3) Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
    let gb = +prompt('Вкажіть об\'єм пам\'яті на флешці в Гб', 1);
    let mb = gb * 1024;
    let files = Math.floor(mb / 820);
    alert(`На флешці буде місце для ${files} файлів`);

//Норма
// 4)Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може 
   //купити користувач і скільки здачі у нього залишиться.
    let money = +prompt('Введіть суму, в грн.', 0);
    let prise = +prompt('Введіть ціну шоколадки, в грн.', 0);
    let quatity = Math.floor(money / prise);
    let moneyInEnd = (money % prise).toFixed(1);
    alert(`Ви зможете купити ${quatity} шоколадок, залишок ${moneyInEnd} грн.`)

// 5)Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться 
   //оператор % (залишок від ділення).
    let number = +prompt('Введіть трьохзначне число', 000);
    let first = Math.floor(number / 100);
    let third = number % 10;
    let second = (number - (first * 100) - third) / 10;
    let numberReverse = String(third) + String(second) + String(first);
    alert(numberReverse)

//Максимум
// 6) Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
    let money1 = +prompt('Введіть сумму на 2 місяці', 0);
    let interestForYear = 5;
    let interestForMonth = (2 * interestForYear) / 12;
    let moneyAfter = money1 + (money1 * (interestForMonth / 100));
    alert(`Нараховано у відсотках ${interestForMonth.toFixed(2)}%, сума після вкладу ${moneyAfter.toFixed(1)}`);



        
