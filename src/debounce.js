'use strict';

/**
 * Implement decorator debounce
 *
 * Чтобы оригинальная функция запускалась только после определённой паузы
 * в запусках обёртки, пока пользователь печататет - ничего
 * Если остановился и подождал секунду - вывести последнее значение
 * Функция onChange должна получать тот же `this` и аргументы, что и обёртка
 **/
function debounce(func, delay) {
  let timer;

  return function(caller) {
    clearTimeout(timer);

    const funcCall = () => {
      return func.call(this, caller);
    }

    timer = setTimeout(funcCall, delay);
  };
}

function onChange(event) {
  output.innerHTML = event.target.value;
  // eslint-disable-next-line no-console
  console.log(this.value);
}

const wrapper = debounce(onChange, 1000);

const input1 = document.getElementById('input1');

const output = document.querySelector('.output');

input1.addEventListener('input', wrapper);
