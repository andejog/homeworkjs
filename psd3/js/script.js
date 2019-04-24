var money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
var appData = {
    bj : money,
    timeData : time,
    expences : {

    },
    
    optionalExpences : {

    },

    income : [],

    savings : false
};

let ask1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    ask2 = prompt("Во сколько обойдется?", ""),
    ask3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    ask4 = prompt("Во сколько обойдется?", "");

appData.expences.ask1 = ask2;
appData.expences.ask3 = ask4;

alert(appData.bj / 30);