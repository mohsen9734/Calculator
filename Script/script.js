let $ = document;
let inputNumber = 0;
let numbers = $.querySelectorAll(".numbers");
let input = $.querySelector(".result");
let operator = $.querySelectorAll(".operator");

let equal = $.querySelector(".equal");

if (input.value === "") {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function () {
      input.value += numbers[i].innerHTML;
    });
  }
}

const operations = [
  { func: "(a, b) => a / b" },
  { func: "(a, b) => a * b" },
  { func: "(a, b) => a - b" },
  { func: "(a, b) => a + b" },
];

for (let i = 0; i < operations.length; i++) {
  operator[i].addEventListener("click", function () {
    inputNumber = parseInt(input.value);
    input.value = "";

    const func = eval(operations[i].func);
    equal.onclick = () => {
      inputNumber = func(inputNumber, parseInt(input.value));
      input.value = inputNumber;
    };
  });
}
