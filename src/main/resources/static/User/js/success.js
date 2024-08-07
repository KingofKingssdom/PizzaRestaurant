// Chức năng sau khi click vào đặt bàn sẽ chuyển sang trang thông báo  thành công
$(document).ready(function (){
    $(".btn_box").click(function (){
        $(".contain").fadeIn()
    });
    $(".btn-close").click(function (){
        $(".contain").fadeOut()
    })
})
// Chức năng thay đổi dấu phẩy trong của các số double để hiển thị tiền VNĐ
document.addEventListener("DOMContentLoaded", function() {
    const prices = document.querySelectorAll('.price');

    prices.forEach(price => {
        const value = parseFloat(price.textContent); // Lấy giá trị
        price.textContent = value.toLocaleString('vi-VN') + ' VNĐ'; // Định dạng với dấu phẩy
    });
});