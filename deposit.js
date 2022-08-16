// step 1 : add addEventListener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step 2; get the deposit amount from the deposit input field..
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value; // input nila value
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step 3 : get the current deposit total..
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText; // input na nila innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step 4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step 6: calculate total balance
    const calculateTotalBalance = previousBalanceTotal + newDepositAmount;
    // set balance total
    balanceTotalElement.innerText = calculateTotalBalance;
    // step 7: clear the deposit field..
    depositField.value = '';
});