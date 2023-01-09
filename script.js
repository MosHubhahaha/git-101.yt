const temperatureConverter = {
    toCelsiusFahrenheit(fahrenheit) {
      const originalValue = fahrenheit;
      const convertedValue = (fahrenheit - 32) * 5/9;
      return { originalValue, convertedValue };
    },
    toCelsiusKelvin(kelvin) {
      const originalValue = kelvin;
      const convertedValue = kelvin - 273;
      return { originalValue, convertedValue };
    },
    toCelsiusNewton(newton) {
      const originalValue = newton;
      const convertedValue = newton * 100/33;
      return { originalValue, convertedValue };
    },
    ToRankkine(rankkine){
        let originalValue=rankkine;
        let convertedValue=(rankkine-491.67)*5/9;
        return {originalValue,convertedValue};
    }
};
      
  

const fahrenheitInput = document.getElementById('fahrenheitInput');
const fahrenheitResult = document.getElementById('fahrenheitResult');

fahrenheitInput.addEventListener('input', () => {
  const fahrenheit = fahrenheitInput.value;
  const result = temperatureConverter.toCelsiusFahrenheit(fahrenheit);
  fahrenheitResult.innerHTML = `${result.originalValue}&deg;F = ${result.convertedValue.toFixed(2)}&deg;C`;
});

const kelvinInput = document.getElementById('kelvinInput');
const kelvinResult = document.getElementById('kelvinResult');

kelvinInput.addEventListener('input', () => {
  const kelvin = kelvinInput.value;
  const result = temperatureConverter.toCelsiusKelvin(kelvin);
  kelvinResult.innerHTML = `${result.originalValue}&deg;K = ${result.convertedValue.toFixed(2)}&deg;C`;
});

const newtonInput=document.getElementById('newtonInput');
const newtonResult=document.getElementById('newtonResult');

/*newtonInput.addEventListener('input',()=>{
    const newton=newtonInput.value;
    const result=temperatureConverter.toCelsiusNewton(newton);
    newtonResult.innerHTML=`${result.originalValue}&deg;N = ${result.convertedValue}&deg;C`;
});*/
newtonInput.addEventListener('input', () => {
    const newton = newtonInput.value;
    const result = temperatureConverter.toCelsiusNewton(newton);
    newtonResult.innerHTML = `${result.originalValue}&deg;N = ${result.convertedValue.toFixed(2)}&deg;C`;
});


const rankkineInput = document.getElementById('rankkineInput');
const rankkineResult = document.getElementById('rankkineResult');

rankkineInput.addEventListener('input', () => {
    const rankkine = rankkineInput.value;
    const result = temperatureConverter.ToRankkine(rankkine);
    rankkineResult.innerHTML = `${result.originalValue}&deg;R = ${result.convertedValue.toFixed(2)}&deg;C`;
  });


  const fahranheitReset=document.getElementById('fahrenheitReset');

  fahranheitReset.addEventListener('click',()=>{
    fahrenheitInput.value='';
    fahrenheitResult.innerHTML='';
  });

  const kelvinReset=document.getElementById('kelvinReset');

    kelvinReset.addEventListener('click',()=>{
    kelvinInput.value='';
    kelvinResult.innerHTML='';
  });

  const newtonReset=document.getElementById('newtonReset');

  newtonReset.addEventListener('click',()=>{
    newtonInput.value='';
    newtonResult.innerHTML='';
  });

  const rankkinereset=document.getElementById('rankkinereset');

  rankkinereset.addEventListener('click',()=>{
   rankkineInput.value='';
   rankkineResult.innerHTML='';
  });


