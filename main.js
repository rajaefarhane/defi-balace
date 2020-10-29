function balanceScale() {
var balance;
balance = document.getElementById("balanceIcon");
balance.innerHTML = "&#xf24e;";

setTimeout(function () {
balance.innerHTML = "&#xf515;";
},1000);
setTimeout(function () {
balance.innerHTML =  "&#xf24e;";
},2000);
setTimeout(function () {
balance.innerHTML = "&#xf516;";
}, 3000);
}

balanceScale();

setInterval(balanceScale, 4000);
function chargebattery() {
  var a;
  a = document.getElementById("div1");
  a.innerHTML = "&#xf244;";
  setTimeout(function () {
      a.innerHTML = "&#xf243;";
    }, 1000);
  setTimeout(function () {
      a.innerHTML = "&#xf242;";
    }, 2000);
  setTimeout(function () {
      a.innerHTML = "&#xf241;";
    }, 3000);
  setTimeout(function () {
      a.innerHTML = "&#xf240;";
    }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);
