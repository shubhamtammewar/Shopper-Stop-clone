function getid(id) { return document.getElementById(id); }
let prices = JSON.parse(localStorage.getItem("prices"));
console.log('prices:', prices)

var total=prices[0].total;
var discount=prices[0].discount;
var subtotal=prices[0].subtotal;
getid("totalpayble").innerHTML= `<b>Payable Amount: ${total}</b>`;
getid("totalamount").innerHTML=`${total}`;
getid("offer").innerHTML=`${discount}`

getid("sub").innerHTML=`${subtotal}`


function Pay(e){
    e.preventDefault();
    setTimeout(() => {
       alert("Payment successful!"); 
    }, 500);
    setTimeout(() => {
        alert("Your items will be deleivered in 2 days!"); 
     }, 1000);
     setTimeout(() => {
        window.location.href="index.html"
     }, 2000);
}