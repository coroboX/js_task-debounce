'use strict';

/**
 * Implement decorator debounce
 *
 * Чтобы оригинальная функция запускалась только после определённой паузы
 * в запусках обёртки, пока пользователь печататет - ничего
 * Если остановился и подождал секунду - вывести последнее значение
 * Функция onChange должна получать тот же `this` и аргументы, что и обёртка
 **/
function debounce(f, delay) {
  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(function() {
      f(...args);
    }, delay);
  };
}

function onChange(event) {
  // eslint-disable-next-line no-console
  console.log(event.target.value);
  // eslint-disable-next-line no-console
  // console.log(this.value);
  // uncomment if you implemented debounce with correct this
}

const wrapper = debounce(onChange, 1000);

const input1 = document.getElementById('input1');

input1.addEventListener('input', wrapper);
