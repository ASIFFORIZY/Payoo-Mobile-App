document.getElementById("loginButton").addEventListener("click", function(event){
    event.preventDefault();
    // Get the input values
    const mobileNumber = document.querySelector('input[placeholder="Enter your number"]').value;
    const pin = document.querySelector('input[placeholder="Enter 4 Digit Pin"]').value;

    //  login logic here

    if (mobileNumber === "1234567890" && pin === "1234") {
       window.location.href = "home.html";
    } else {
        alert("Invalid mobile number or pin.");
    }

});