$(document).ready(function (){
    // Mở modal all1
    $("#order-all1").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 1;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#image1").html(
                    `${product.image}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });

    // Mở modal all2
    $("#order-all2").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 2;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal all3
    $("#order-all3").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 3;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal all4
    $("#order-all4").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 18;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal all5
    $("#order-all5").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 19;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal all6
    $("#order-all6").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 20;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });

    // Mở modal pizza1
    $("#order-pizza1").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 1;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza2
    $("#order-pizza2").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 2;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza3
    $("#order-pizza3").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 3;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza4
    $("#order-pizza4").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 4;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/iamge/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza5
    $("#order-pizza5").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 5;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $(".priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza6
    $("#order-pizza6").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 6;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza7
    $("#order-pizza7").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 7;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza8
    $("#order-pizza8").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 8;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza9
    $("#order-pizza9").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 9;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza10
    $("#order-pizza10").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 10;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza11
    $("#order-pizza11").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 11;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza12
    $("#order-pizza12").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 12;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza13
    $("#order-pizza13").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 13;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza14
    $("#order-pizza14").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 14;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza15
    $("#order-pizza15").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 15;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza16
    $("#order-pizza16").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 16;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pizza17
    $("#order-pizza17").click(function (){
        $(".modal-contain").fadeIn();
        // Đổ nội dung vào modal
        const productId = 17;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal").html(
                    `${product.title}`
                )
                $("#priceModal").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pasta1
    $("#order-pasta1").click(function(){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 18;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pasta2
    $("#order-pasta2").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 19;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pasta3
    $("#order-pasta3").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 20;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pasta4
    $("#order-pasta4").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 21;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pasta5
    $("#order-pasta5").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 22;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pasta6
    $("#order-pasta6").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 23;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal pasta7
    $("#order-pasta7").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 24;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });


    // Mở modal starter1
    $("#order-starter1").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 25;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal start2
    $("#order-starter2").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 26;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter3
    $("#order-starter3").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 27;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter4
    $("#order-starter4").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 28;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter5
    $("#order-starter5").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 29;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter6
    $("#order-starter6").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 30;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter7
    $("#order-starter7").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 31;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal start8
    $("#order-starter8").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 32;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter9
    $("#order-starter9").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 33;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter10
    $("#order-starter10").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 34;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter11
    $("#order-starter11").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 35;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter12
    $("#order-starter12").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 36;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter13
    $("#order-starter13").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 37;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter14
    $("#order-starter14").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 38;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter15
    $("#order-starter15").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 39;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter16
    $("#order-starter16").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 40;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal stater17
    $("#order-starter17").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 41;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter18
    $("#order-starter18").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 42;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter19
    $("#order-starter19").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 43;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal starter20
    $("#order-starter20").click(function (){
        $(".contain-modal2").fadeIn();
        // Đổ nội dung vào modal
        const productId = 44;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image2').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal2").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal2").html(
                    `${product.title}`
                )
                $("#priceModal2").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink1
    $("#order-drink1").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 45;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink2
    $("#order-drink2").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 46;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink3
    $("#order-drink3").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 47;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink4
    $("#order-drink4").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 48;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )

            }
        })
    });
    // Mở modal drink5
    $("#order-drink5").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 49;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink6
    $("#order-drink6").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 50;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink7
    $("#order-drink7").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 51;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink8
    $("#order-drink8").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 52;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink9
    $("#order-drink9").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 53;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink10
    $("#order-drink10").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 54;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink11
    $("#order-drink11").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 55;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink12
    $("#order-drink12").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 56;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink13
    $("#order-drink13").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 57;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink14
    $("#order-drink14").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 58;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Mở modal drink5
    $("#order-drink15").click(function (){
        $(".contain-modal3").fadeIn();
        // Đổ nội dung vào modal
        const productId = 59;
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/image/" + productId,
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data){
                const url = URL.createObjectURL(data);
                $('#dynamic-image3').attr('src',url).show();
            }
        });
        $.ajax({
            type: "GET",
            url : "http://localhost:8080/products/" + productId,
            success: function (product){
                $("#headingModal3").html(
                    `<h4>${product.heading}</h4>`
                )
                $("#titleModal3").html(
                    `${product.title}`
                )
                $("#priceModal3").html(
                    `${product.prices}`
                )
            }
        })
    });
    // Đóng modal
    $("#btn-close").click(function (){
        $(".modal-contain").fadeOut();
    });
    //Đóng modal 2
    $("#btn-close-modal2").click(function (){
        $(".contain-modal2").fadeOut();
    });
    // Đóng modal3
    $("#btn-close-modal3").click(function (){
        $(".contain-modal3").fadeOut();
    });

})