$(document).ready(function(){
    let currentQuantity = 1;
    let newQuantity = 1;
    $('.decrease-quantity').click(function() {
        if (currentQuantity > 1) {
            currentQuantity--;
            newQuantity = currentQuantity;
            $('.amount').text(newQuantity);
        }
    });
    $('.increase-quantity').click(function() {
        currentQuantity++;
        newQuantity = currentQuantity;
        $('.amount').text(newQuantity);
    });
    // Lick vào giỏ hàng dành cho pizza
    $('.buy').click(function() {
        // Lấy giá trị từ radio button đã chọn (đế bánh)
        const cakeBase = $('input[name="cakeBase"]:checked').val();
        // Lấy giá trị từ radio button đã chọn (kích thước bánh)
        const cakeSize = $('input[name="cakeSize"]:checked').val();
        // Lấy nội dung từ thẻ headingModal
        const name = $('#headingModal').text();
        // Lấy số lượng từ thẻ amout
        const quantity = newQuantity;
        // Lấy giá tiền từ thẻ priceModal
        const prices = $('#priceModal').text();
        // Tính tổng tiền
        const total = prices * quantity;
        // Điều kiện của đế bánh phải nhập vào lựa chọn
        if (cakeBase === undefined) {
            alert("Vui lòng chọn đế bánh và cỡ bánh");
            return;
        }
        if(cakeSize === undefined){
            alert('Vui lòng lựa chọn cỡ bánh');
            return;
        }
        // Tạo đối tượng dữ liệu để gửi
        // Dùng cho pizza
        const dataToSend = {
            cakeBase: cakeBase, // Lưu lựa chọn đế bánh vào đối tuọnng Order
            cakeSize: cakeSize, // Lưu lựa chọn cỡ ban vào đối tượng Order
            name: name, // Lưa tiêu đề vào đối tượng Order
            number: quantity, // Lưu số lượng mới vào đối tượng Order
            prices: prices, // Lưu giá vào đối tượng Order
            total: total // Lưu giá tiền vào đối tượng Order
        };
        //
        // Gửi dữ liệu bằng AJAX
        $.ajax({
            url: 'http://localhost:8080/buy/save', // URL của server
            type: 'POST',
            data: JSON.stringify(dataToSend),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(response) {
                // Xử lý phản hồi từ server
                console.log('Success:', response);
                $(".container-purchase").fadeIn();
                $("#btn-close-purchaseSuccess").click(function (){
                    $(".container-purchase").fadeOut();
                })
                $(".modal-contain").fadeOut();
            },

        });
    });
    // Lick thêm vào giỏ hàng với modal 2
    $('.buy2').click(function() {
  //      // Lấy nội dung từ thẻ headingModal
        const name = $('#headingModal2').text();
   //     // Lấy số lượng từ thẻ amout
        const quantity = newQuantity;
   //     // Lấy giá tiền từ thẻ priceModal
       const prices = $('#priceModal2').text();
   //     // Tính tổng tiền
        const total = prices * quantity;
    //    // Tạo đối tượng dữ liệu để gửi
      // Dùng cho các menu còn lại
       const dataToSend2 = {
           name: name, // Lưa tiêu đề vào đối tượng Order
            number: quantity, // Lưu số lượng mới vào đối tượng Order
            prices: prices, // Lưu giá vào đối tượng Order
            total: total // Lưu giá tiền vào đối tượng Order
        };
        // Gửi dữ liệu bằng AJAX
        $.ajax({
            url: 'http://localhost:8080/buy/save', // URL của server
            type: 'POST',
           data: JSON.stringify(dataToSend2),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(response) {
                // Xử lý phản hồi từ server
                console.log('Success:', response);
               $(".container-purchase").fadeIn();
               $("#btn-close-purchaseSuccess").click(function (){
                    $(".container-purchase").fadeOut();
               })
                $(".contain-modal2").fadeOut();
            },

       });
    });
    // Lick thêm vào giỏ hàng với modal 2
    $('.buy3').click(function() {
    //    // Lấy nội dung từ thẻ headingModal
        const name = $('#headingModal3').text();
        // Lấy số lượng từ thẻ amout
       const quantity = newQuantity;
        // Lấy giá tiền từ thẻ priceModal
       const prices = $('#priceModal3').text();
        // Tính tổng tiền
        const total = prices * quantity;
        // Tạo đối tượng dữ liệu để gửi
        // Dùng cho các menu còn lại
        const dataToSend3 = {
    name: name, // Lưa tiêu đề vào đối tượng Order
           number: quantity, // Lưu số lượng mới vào đối tượng Order
            prices: prices, // Lưu giá vào đối tượng Order
            total: total // Lưu giá tiền vào đối tượng Order
        };
        // Gửi dữ liệu bằng AJAX
        $.ajax({
           url: 'http://localhost:8080/buy/save', // URL của server
            type: 'POST',
            data: JSON.stringify(dataToSend3),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(response) {
                // Xử lý phản hồi từ server
                console.log('Success:', response);
                $(".container-purchase").fadeIn();
                $("#btn-close-purchaseSuccess").click(function (){
                    $(".container-purchase").fadeOut();
               })
               $(".contain-modal3").fadeOut();
           },

        });
    });
});