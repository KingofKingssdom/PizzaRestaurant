$(function(){
    'use strict'
    $(".box").slice(0, 3).show();
    $(".btn-box").on("click", function(){
        $(".box:hidden").slice(0,3).sliceDown("slow");
    });
});

$(document).ready(function(){
    // Load menu
    $("#btn-all").click(function(){
        $(".all-container").fadeIn();
        $(".pizza-container").fadeOut();
        $(".pasta-container").fadeOut();
        $(".starter-container").fadeOut();
        $(".drink-container").fadeOut();

    })
    $("#btn-pizza").click(function(){
        $(".all-container").fadeOut();
        $(".pizza-container").fadeIn();
        $(".pasta-container").fadeOut();
        $(".starter-container").fadeOut();
        $(".drink-container").fadeOut();

    })
    $("#btn-pasta").click(function(){
        $(".all-container").fadeOut();
        $(".pizza-container").fadeOut();
        $(".pasta-container").fadeIn();
        $(".starter-container").fadeOut();
        $(".drink-container").fadeOut();
    })
    $("#btn-starter").click(function(){
        $(".all-container").fadeOut();
        $(".pizza-container").fadeOut();
        $(".pasta-container").fadeOut();
        $(".starter-container").fadeIn();
        $(".drink-container").fadeOut();
    })
    $("#btn-drink").click(function(){
        $(".all-container").fadeOut();
        $(".pizza-container").fadeOut();
        $(".pasta-container").fadeOut();
        $(".starter-container").fadeOut();
        $(".drink-container").fadeIn();
    })

})

// Menu
const btnAllElement = document.querySelector('#btn-all');
const btnPizzaElement = document.querySelector('#btn-pizza');
const btnPastaElement = document.querySelector('#btn-pasta');
const btnStarterElement = document.querySelector('#btn-starter');
const btnDrinkElement = document.querySelector('#btn-drink');

// Tạo chuyển đổi nút trên menu

// Nút Tất cả
// Hàm chuyển đổi khi click vào nút tất cả
function clickAll(){
    btnAllElement.classList.add('click-show');
}
// Hàm xóa các màu ở nút khác khi click vào nút tất cả
function clickHiddenAll(){
    btnPastaElement.classList.remove('click-show');
    btnStarterElement.classList.remove('click-show');
    btnPizzaElement.classList.remove('click-show');
    btnDrinkElement.classList.remove('click-show');
}
btnAllElement.addEventListener('click',clickAll);
btnAllElement.addEventListener('click',clickHiddenAll);


//Nút Pizza
// Thêm màu vào khi click vào pizza
function clickPizza(){
    btnPizzaElement.classList.add('click-show');
}
// Xóa các màu khác khi click vào pizza
function clickHiddenPizza(){
    btnAllElement.classList.remove('click-show');
    btnPastaElement.classList.remove('click-show');
    btnStarterElement.classList.remove('click-show');
    btnDrinkElement.classList.remove('click-show');
}
btnPizzaElement.addEventListener('click',clickPizza);
btnPizzaElement.addEventListener('click',clickHiddenPizza);

//Nút Pasta
//Hàm khi nhấn vào nút pasta sẽ hiện màu
function clickPasta(){
    btnPastaElement.classList.add('click-show');
}
//Hàm khi nhấn vào nút pasta các nút khác sẽ ẩn không màu
function clickHiddenPasta(){
    btnAllElement.classList.remove('click-show');
    btnPizzaElement.classList.remove('click-show');
    btnStarterElement.classList.remove('click-show');
    btnDrinkElement.classList.remove('click-show');
}
btnPastaElement.addEventListener('click',clickPasta);
btnPastaElement.addEventListener('click',clickHiddenPasta);

//Nút Starter
//Hàm khi nhấn vào nút khai vị sẽ hiện màu
function clickStarter(){
    btnStarterElement.classList.add('click-show');
}
//Hàm khi nhấn vào nút khai vị các nút khác sẽ ẩn không màu
function clickHiddenStarter(){
    btnAllElement.classList.remove('click-show');
    btnPizzaElement.classList.remove('click-show');
    btnPastaElement.classList.remove('click-show');
    btnDrinkElement.classList.remove('click-show');
}
btnStarterElement.addEventListener('click',clickStarter);
btnStarterElement.addEventListener('click',clickHiddenStarter);

//Nút Drink
//Hàm khi nhấn vào nút drink sẽ hiện màu
function clickDrink(){
    btnDrinkElement.classList.add('click-show');
}
//Hàm khi nhấn vào nút drink các nút khác sẽ ẩn không màu
function clickHiddenDrink(){
    btnAllElement.classList.remove('click-show');
    btnPizzaElement.classList.remove('click-show');
    btnStarterElement.classList.remove('click-show');
    btnPastaElement.classList.remove('click-show');
}
btnDrinkElement.addEventListener('click',clickDrink);
btnDrinkElement.addEventListener('click',clickHiddenDrink);

