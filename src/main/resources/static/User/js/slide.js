let list = document.querySelector(' .slider .list');
let items = document.querySelectorAll(' .slider .list .item');
let dots = document.querySelectorAll('.slider .dots li ');
let prev = document.getElementById('prev');
let next = document.getElementById('next');


let active = 0;
let lengthItems = items.length - 1;

next.onclick = function (){
    if(active + 1 > lengthItems){
        active = 0;
    }
    else{
        active = active + 1;
    }
    
    reloadSlider();
};

prev.onclick = function(){
    if(active - 1 < 0){
        active = lengthItems;
    }
    else {
        active = active -1; 
    }
    reloadSlider();
}
// làm slide tự chuyển đổi sau thời gian
let refeshslide = setInterval(() => {next.click()},5000);

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px'; // dịch một đoạn
    // Tìm class li đang chứa active
    let lastActiveDots = document.querySelector('.containt .slider .dots li.active');
    // Xóa active khỏi vị trí đó
    lastActiveDots.classList.remove('active');

    dots[active].classList.add('active');
    clearInterval(refeshslide);
     refeshslide = setInterval(() => {next.click()},5000);
}

dots.forEach((li,key)=>{
    li.addEventListener('click',function(){  // Khi lắng nghe sự kiện click chuột, sẽ thực hiện một hàm
            active = key; // gán vị trí active của item = vị trí của thẻ li vừa đc click chuột
            reloadSlider();   
    })
})
