const pay = document.getElementById("pay");
const amount =document.getElementById("amountInput");
const numberPay = document.getElementById("payment-No");
const warning = document.getElementById("warning");
const wholeContainer = document.querySelector(".showStatus");
 
if(pay) {
    pay.onclick = () => {
        if(amount.value === "" || amount.value <= 0) {
            warning.style.display = "block";
            warning.textContent = "cannot be empty";
            return;
        } 
 
            let textShow = document.createElement("b");
            textShow.innerHTML = "processing you payment....please wait";
            wholeContainer.appendChild(textShow);
            setTimeout(() => {
                const paymentSuccess = Math.random() > 0.5;

                if(paymentSuccess) {
                    textShow.textContent = "Payment Succcessful";
                    textShow.style.color = "green";
                } else {
                    textShow.textContent = "Payment Failed!";
                    textShow.style.color = "red";
                }
            }, 3000)

    }
}
 
 const cancel = document.getElementById("cancel");  
cancel.addEventListener("click", function() {
     window.location.href = "online.html#dash-cntenot";  
});

// window.addEventListener("beforeunload", function (e) {
//     e.preventDefault();
//     e.returnValue = "Are you sure you want to leave this page?";
// });


// document.addEventListener("DOMContentLoaded", () => {
//     const rentDisplay = document.getElementById("rent-arreas");
  
//     // Check if rentBalance exists, else set default to 5000
//     let currentBalance = localStorage.getItem("rentBalance");
  
//     if (!currentBalance) {
//       currentBalance = 5000;
//       localStorage.setItem("rentBalance", currentBalance);
//     }
  
//     rentDisplay.textContent = `Due rent arrears = ksh.${currentBalance}`;
//   });
//   let amountPaid = Number(amount.value); // make sure you convert string to number
// let currentBalance = Number(localStorage.getItem("rentBalance"));

// let newBalance = currentBalance - amountPaid;
// localStorage.setItem("rentBalance", newBalance);
