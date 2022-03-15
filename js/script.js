const textApp = document.querySelector('.textAdviceAPI');
const textIdAdvice = document.querySelector('.textIdAPI');
const btnGenerateApp = document.querySelector('.getAdviceAPI');

function generateApp() {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((dataSlip) => {
      textIdAdvice.innerText = `#${dataSlip.slip.id}`;
      textApp.innerText = `"${dataSlip.slip.advice}"`;
    });
}

generateApp();
btnGenerateApp.addEventListener('click', generateApp);
