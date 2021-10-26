//калькулятор 1
function total() {
  let price;
  let value;
  price = document.getElementById("price").value;
  value = document.getElementById("value").value;
  const regular = /^[1-9][0-9]*$/;
  if (!regular.test(price) || !regular.test(value)) {
    alert("Вводите только положительные целые числа");
    return true;
  }
  let totalResult = document.getElementById("result");
  totalResult.innerHTML = parseInt(price) * parseInt(value);
  return false;
}
window.addEventListener('DOMContentLoaded', function (total) {
  console.log("DOM fully loaded and parsed");
  let b = document.getElementById("result-btn");
  b.addEventListener("click", total);
});
//калькулятор 2
function updatePrice() {
  let price = 0;
  let prices = getPrices();
  let priceIndex = parseInt(select.value) - 1;
  if (priceIndex >= 0) {
    price = prices.prodTypes[priceIndex];
  }
  let quantity = Number(document.getElementById('select_input').value);
  let check_div_Div = document.querySelectorAll('#check_div input');
  check_div_Div.forEach(function (checkbox) {
    if (checkbox.checked) {
      let propPrice = prices.prodProperties[checkbox.name];
      if (propPrice !== undefined) { price += propPrice; }
    }
  });
  let radio_options = document.getElementsByName('radio_options');
  let k = 0;
  radio_options.forEach(function (radio) {
    if (radio.checked) {
      let optionPrice = prices.radio_options[radio.value];
      if (optionPrice !== undefined) {
        price += optionPrice;

      }
    }
  });


  let cou = document.getElementById('select_input');
  cou.addEventListener('input', function () { updatePrice(); });
  let s = document.getElementsByName('type');
  s[0].addEventListener('change', function (event) {
    let select = event.target;
    let radio_div = document.getElementById('radio_div');
    let check_div = document.getElementById('check_div');
    if (select.value === '1') {
      radio_div.style.display = 'none';
      check_div.style.display = 'none';
      radio_id();
      check_div_hide();
      document.getElementById('price2').innerHTML =
        'Цена: ' + prices.prodTypes[0] * quantity + ' рублей';
    }
    else if (select.value === '2') {
      check_div_hide();
      radio_div.style.display = 'block';
      check_div.style.display = 'none';
      document.getElementById('price2').innerHTML =
        'Цена: ' + prices.prodTypes[1] * quantity + ' рублей.';
    }
    else if (select.value === '3') {
      radio_div.style.display = 'none';
      check_div.style.display = 'block';
      radio_id();
      document.getElementById('price2').innerHTML =
        'Цена: ' + prices.prodTypes[2] * quantity + ' рублей.';
    } else {
    }
  });
  let price_pr = document.getElementById('price2');
  price_pr.innerHTML = 'Цена: ' + price * quantity + ' рублей.';
}
function getPrices() {
  return {
    prodTypes: [100, 1000, 5000],
    radio_options: {
      UnderTheHood: 100,
      Salon: 500,
      Outdoor: 1000,
    },
    prodProperties: {
      Polishing: 50,
      Orange: 500,
      Chips: 1500,
    },
  };
}
let elm = document.getElementById('radio_id');
elm.style.display = 'none';
function radio_id() {
  elm.checked = !elm.checked;
}
function check_div_hide() {
  document.getElementById('Polishing').checked = false;
  document.getElementById('Painting').checked = false;
  document.getElementById('Chips').checked = false;
}



window.addEventListener('DOMContentLoaded', function () {



  let radioDiv = document.getElementById('radio_div');
  radioDiv.style.display = 'none';

  let check_div = document.getElementById('check_div');
  check_div.style.display = 'none';

  let s = document.getElementsByName('type');
  let select = s[0];

  select.addEventListener('change', function () {
    updatePrice();
  });
  let radio_options = document.getElementsByName('radio_options');
  radio_options.forEach(function (radio) {
    radio.addEventListener('change', function () { updatePrice(); });
  });
  let sniper_option = document.querySelectorAll('#check_div input');
  sniper_option.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () { updatePrice(); });
  });
  updatePrice();
});