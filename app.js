// let takeInput = document.getElementById('takeInput');
// let selectUnit = document.getElementById('selectUnit');
// let ans = document.getElementById('ans');
// const calculate = () => {
//         if(selectUnit.value == 'cel') {
//             takeInput.value = (takeInput.value * (9/5)) + 32;
//             if(takeInput.value == 'NaN')  ans.innerHTML = "Please Enter Numeric Value!!😑" 
//             else ans.innerHTML = (takeInput.value) + " fahrenheit"
//             takeInput.value = '';
//         }
//         else {
//             takeInput.value = ((takeInput.value - 32)*5) / 9;
//             if(takeInput.value == 'NaN')  ans.innerHTML = "Please Enter Numeric Value!!😑" 
//             else ans.innerHTML = (takeInput.value) + " Celcius"
//             takeInput.value = '';
//         }
// }

// cal.addEventListener('click', calculate);



const calculateTemp = () => {

    let takeInput = document.getElementById('takeInput').value;
    let selectUnit1 = document.getElementById('selectUnit');
    let selectedOption = selectUnit.options[selectUnit1.selectedIndex].value;
    let ans = document.getElementById('ans');
    
    if(selectedOption == 'cel') ans.innerHTML = `${Math.round(((takeInput * (9/5)) + 32))} fahrenheit`;
    
    else ans.innerHTML = `${Math.round((((takeInput - 32)*5) / 9))} Celcius`;
}
