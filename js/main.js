const basePrice=1000;
const inputs=document.querySelectorAll('input');
const totalPriceElement=document.querySelector('#total-price');
//радиокнопки
const radioOptions = document.querySelectorAll('input[name="type"]');
console.log(radioOptions);

function calc() {
  let totalPrice=basePrice;
 // 
  // for(const radio of radioType){
  //   if(radio.checked==true){
  //     console.log(sdsd);
  //     //totalPrice=basePrice*parseInt(radio.value);
  //   }
  // }
  // if(radio.checked){
  //   console.log(hello);
    //totalPrice=totalPrice*radio.value;
  //}
  const formatter = new Intl.NumberFormat('ru');
  totalPriceElement.innerText=totalPrice;
}
for(const input of inputs){
  input.addEventListener('input',function(){
    calc();
  })
}