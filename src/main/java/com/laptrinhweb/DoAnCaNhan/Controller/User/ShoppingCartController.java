package com.laptrinhweb.DoAnCaNhan.Controller.User;

import com.laptrinhweb.DoAnCaNhan.Entity.Order;
import com.laptrinhweb.DoAnCaNhan.Service.ShoppingCartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;


import java.util.List;

@Controller
@RequestMapping("/shopping-cart")
public class ShoppingCartController {
    private ShoppingCartService shoppingCartService;
    @Autowired
    public ShoppingCartController(ShoppingCartService shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    //Lấy toàn bộ thông tin đặt hàng
    @GetMapping("/getAll")
    public List<Order> getAllOrder(){
        return shoppingCartService.findAll();
    }
    // Đi đến trang shopping_cart
    @GetMapping("/cart")
    public String shoppingCart(Model model){
        model.addAttribute("orders",getAllOrder());
        return "/User/shoppingCart-page";
    }

    // Lấy toàn bộ trường thông tin order theo id sau đó xóa order, trở lại về trang shopping_cart
    @GetMapping("/{id}")
    public String deleteOrder (@PathVariable("id") int id,Model model){
        Order order = shoppingCartService.findById(id);
         shoppingCartService.deleteOrder(order);
         model.addAttribute("orders",getAllOrder());
         return "User/shoppingCart-page";
    }
}
