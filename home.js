document.getElementById("add-money-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const bankSelect = document.getElementById("bank").value;
  const accountNumber = document.getElementById("accNumber").value.trim();
  const amountToAdd = parseInt(document.getElementById("addAmount").value);
  const pinNumber = document.getElementById("addPin").value.trim();
  const balanceElement = parseInt(document.getElementById("balance").innerText);

  const newBalance = balanceElement + amountToAdd;
  document.getElementById("balance").innerText = newBalance;
});
