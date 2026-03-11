function calculateMaturityAmount(){
    // geting the inputs of the elements 

    const principle = parseFloat(document.getElementById('principle').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    // performing calculations with the variables
    
    const maturityAmount = principle + (principle * interestRate * tenure)/100;

    // displaying the results of the calculations  
    
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}



// attaching event listerner to the button (calculation btn)

document.getElementById('calculatorBtn').addEventListener('click',calculateMaturityAmount);