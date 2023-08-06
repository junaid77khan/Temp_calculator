let takeInput = document.getElementById('takeInput');
let selectUnit = document.getElementById('selectUnit');
let ans = document.getElementById('ans');
const calculate = () => {
        if(selectUnit.value == 'cel') {
            takeInput.value = (takeInput.value * (9/5)) + 32;
            if(takeInput.value == 'NaN')  ans.innerHTML = "Please Enter Numeric Value!!😑" 
            else ans.innerHTML = (takeInput.value) + " fahrenheit"
            takeInput.value = '';
        }
        else {
            takeInput.value = ((takeInput.value - 32)*5) / 9;
            if(takeInput.value == 'NaN')  ans.innerHTML = "Please Enter Numeric Value!!😑" 
            else ans.innerHTML = (takeInput.value) + " Celcius"
            takeInput.value = '';
        }
}

cal.addEventListener('click', calculate);



