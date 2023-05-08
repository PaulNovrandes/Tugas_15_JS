var ab = 8;
var bc = 6;
var ac;

function hitungSisiMiring(){
  ac = Math.sqrt(Math.pow(ab,2) + Math.pow(bc,2));
  console.log("Panjang sisi AC pada segitiga siku-siku tersebut adalah = ", ac,"cm");

}

console.log("Nilai AB : ", ab);
console.log("Nilai BC : ", bc);
hitungSisiMiring();
