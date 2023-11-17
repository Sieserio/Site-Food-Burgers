// document.getElementsByClassName('main-title')[0].style.color = 'red'

document.getElementById('main action button').onclick = function () {
    document.getElementById('products').scrollIntoView({behavior:"smooth"});
}

let links = document.querySelectorAll('.menu-item > a ');
for (let i = 0; i<links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior:"smooth"});
    }
}

let buttons = document.getElementsByClassName('product-button');
for (let i = 0; i<buttons.length; i++) {
    buttons[i].onclick = function () {
        document.getElementById('order').scrollIntoView({behavior: "smooth"});
    }
}

let burger = document.getElementById('burger');
let name = document.getElementById('name');
let phone = document.getElementById('phone');
document.getElementById('order-action').onclick = function () {
    let HasError = false;
    [burger,name,phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = 'red';
            HasError = true
        } else {
            item.parentElement.style.background = '';
        }
    } );

    if (!HasError) {
        [burger,name,phone].forEach(item => {
            item.value = ''
        });
        alert("Спасибо за заказ! Мы скоро свяжемся с Вами");
    }
}

let prices = document.getElementsByClassName('product-item-price');

document.getElementById('change-currency').onclick = function (e) {
    let currentCurrency = e.target.innerText;
    let newCurrency = '$';
    let coifficient = 1;

    if (currentCurrency==='$') {
        newCurrency = '₽';
        coifficient = 80;
    } else if (currentCurrency==='₽') {
        newCurrency = 'BYN';
        coifficient = 3;
    } else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coifficient = 0.9;
    } else if (currentCurrency === '€') {
        newCurrency = '¥';
        coifficient = 6.9;
    }
    e.target.innerText = newCurrency;

    for (let i = 0 ; i< prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute('data-baze-price') * coifficient).toFixed(1) + '' + newCurrency;
    }
}