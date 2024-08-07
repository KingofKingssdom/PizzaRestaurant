package com.laptrinhweb.DoAnCaNhan.Controller.Admin;

import com.laptrinhweb.DoAnCaNhan.Entity.Product;
import com.laptrinhweb.DoAnCaNhan.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class ProductManagementController {
    private ProductService productService;
    @Autowired
    public ProductManagementController(ProductService productService) {
        this.productService = productService;
    }
    // Lấy tất cả sản phẩm
    @GetMapping("/getAllProduct")
    public List<Product> getAllProduct(){
        return productService.findAllProduct();
    }
    // Lấy tất cả sản phẩm và hiên thị lên view
    @GetMapping("/getViewProduct")
    public String getAllProduct(Model model){
        model.addAttribute("products",getAllProduct());
        return "Admin/product_management";
    }
}
