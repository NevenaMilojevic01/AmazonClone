function changeButton() {
  const buttonElement = document.querySelector('.btnSub');

  if(buttonElement.innerText === 'Subscribe') {
    buttonElement.innerText = 'Subscribed';
    buttonElement.classList.add('isSubscribed');
  } else {
    buttonElement.innerText = 'Subscribe';
    buttonElement.classList.remove('isSubscribed');
  }
}

function calculate() {
  const inputElement = document.querySelector('.inputCalculate');
  let result = Number(inputElement.value);

  if(result < 40) {
    result += 10;
  }

  document.querySelector('.showResult').innerHTML = `$${result}`;
}