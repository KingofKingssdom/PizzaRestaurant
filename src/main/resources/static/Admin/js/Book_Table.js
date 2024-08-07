$(document).ready(function() {
    // Làm modal logout hiện ra
    $("#link-dropdown").click(function (){
        $(".dropdownMenu").toggle();
    });
    $('.btn-danger').click(function() {
        const $this = $(this);
        const id = $this.attr('id').split('-')[2];
        $('#' + 'btn-danger-' + id).show();
        $('#' + 'btn-success-' + id).hide();
    });

    $('.btn-success').click(function() {
       const $this = $(this);
        const id = $this.attr('id').split('-')[2];
        $('#' + 'btn-success-' + id).show();
        $('#' + 'btn-danger-' + id).hide();
    });

});

document.addEventListener("DOMContentLoaded", function() {
    const prices = document.querySelectorAll('.price');

    prices.forEach(price => {
        const value = parseFloat(price.textContent); // Lấy giá trị
        price.textContent = value.toLocaleString('vi-VN') + ' VNĐ'; // Định dạng với dấu phẩy
    });

});