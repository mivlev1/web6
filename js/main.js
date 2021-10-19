const basePrice=1000;
const inputs=document.querySelectorAll('input');
const totalPriceElement=document.querySelector('#total-price');
//количество
const countOf=document.querySelector('input[name="count"]')
//список
const typeList=document.querySelector('select');
//радиокнопки
const radioOptions = document.querySelectorAll('input[name="option"]');
//чекбоксы
const checkFirst=document.querySelector('input[name="first-check"]');
const checkSecond = document.querySelector('input[name="second-check"]');

function calc() {
  let totalPrice=basePrice;
  totalPrice=totalPrice*parseInt(countOf.value);
  for (let list of typeList) {
    if (list.selected) {
      totalPrice = totalPrice * parseFloat(typeList.value);
    }
  }
  for(const radio of radioOptions){
    if(radio.checked){
      totalPrice = totalPrice*parseFloat(radio.value);
    }
  }
  if(checkFirst.checked){
    totalPrice=totalPrice*parseFloat(checkFirst.value);
  }
  if (checkSecond.checked) {
    totalPrice = totalPrice * parseFloat(checkSecond.value);
  }
  
  const formatter = new Intl.NumberFormat('ru');
  totalPriceElement.innerText=totalPrice;

}
for(const input of inputs){
  input.addEventListener('input',function(){
    calc();
  })
}