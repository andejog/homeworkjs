let start = document.getElementById("start"),
    bval = document.getElementsByClassName("budget-value"),
    dbval = document.getElementsByClassName("daybudget-value"),
    lval = document.getElementsByClassName("level-value"),
    eval = document.getElementsByClassName("expenses-value"),
    oeval = document.getElementsByClassName("optionalexpenses-value"),
    inval = document.getElementsByClassName("income-value"),
    moSaval = document.getElementsByClassName("monthsavings-value"),
    yeSaval = document.getElementsByClassName("yearsavings-value"),
    expen = document.getElementsByClassName("expenses-item"),
    btn = document.getElementsByTagName("button"),
    opt = document.querySelectorAll(".optionalexpenses-item"),
    qIncome = document.querySelector('.choose-income'),//возм.доход
    check = document.querySelector("#savings"),//чекбокс
    summ = document.querySelector(".choose-sum"),//сумма
    per = document.querySelector(".choose-percent"),//процент
    year = document.querySelector(".year-value"),//год
    mon = document.querySelector(".month-value"),//месяц
    day = document.querySelector(".day-value"),//день
//каждая кнопка
    fiBtn = btn[0],
    seBtn = btn[1],
    thiBtn = btn[2];

console.log(check);