// создаём обработчик событий, который проверяет загрузилась ли вся страница
window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
//создаем переменные табов над которыми будем работать
    function hideTabContent(a) {//создаем функцию, которая прячет таб-контент с переменной а
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);//запускаем цикл для первого таба "Лечение"


    function showTabContent(b) {//создаем функцию, которая показывает таб-контент
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {//создаем инструкцию, если мы нажмем на какой-нибудь таб, то он появится, а остальные останутся в хайде
        let target = event.target;//сократили программу
        if (target && target.classList.contains('info-header-tab')) {//если мы нажали на таб и таб имеет класс ихт
            for (let i = 0; i < tab.length; i++) {
                if (target == tab [i]) {//если при нажатии на таб 
                    hideTabContent(0);//скрываем абсолютно все табы
                    showTabContent(i);//показываем только пдходящий таб, который подобрал цикл
                    break;
                }
            }
        }
    });

    // Timer

    let deadline = '2019-05-16'; // задаем окончательную дату

    function getTimeRemaining(endtime) { // получаем разницу между нынешней ддаты и окончательной
        let t = Date.parse(endtime) - Date.parse(new Date()), // сам процесс
            seconds = Math.floor((t/1000) % 60), //получаем кол-во секунд, минут, часов, преобразовав их с часов
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)) %60);

            return { // возвращаем обьект, в котором будут хранится эти данные
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock(id, endtime) { //получаем переменные с ч, с, м, выставляем интервал таймера
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() { // записываем на сайт количество часов, минут, сек
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

        function addNum(num) {
            if (num < 9) { // написать условие, в котором если число меньше 9 , добавить ему 0
                return '0' + num;
            } else {
                return num;
            }
        }

            hours.textContent = addNum(t.hours);
            minutes.textContent = addNum(t.minutes);
            seconds.textContent = addNum(t.seconds);
        
            

            if (t.total <= 0) { // если таймер закончился, обнулить его
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    // создать функцию с добавлений 0 к одиночным цифрам, которые меньше 9

   
    setClock('timer', deadline);
});