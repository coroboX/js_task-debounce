# Task Debounce

[Demo Link](https://corobox.github.io/js_task-debounce/src/)

**TODO:**

Implement [debounce](https://lodash.com/docs/4.17.15#debounce) decorator

- It takes a function and a delay as arguments and returns a wrapper function
- The original function should be called only after a given delay in wrapper calls
- Test your implementation with the [debounced input](https://codepen.io/mateacademy/pen/pYYOQo?editors=1111)
  - Nothing appears while you are typing
  - If you stop for at least a second there should be only last value printed into console
  - (*) pass a correct **this** into the original function if you can (uncomment it in the code)

```
function onChange(event) {
  console.log(event.target.value)
}

function debounce(f, delay) {
  // ...
}

let wrapper = debounce(onChange, 1000);

input.addEventListener('input', wrapper);
```