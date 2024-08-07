package com.laptrinhweb.DoAnCaNhan.Controller.User;

import com.laptrinhweb.DoAnCaNhan.Entity.Product;
import com.laptrinhweb.DoAnCaNhan.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/products")
public class ProductController {
    private ProductService productService;
    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
    // Lấy sản phẩm theo id
    @GetMapping("/{id}")
    public ResponseEntity<Product> getById(@PathVariable int id){
        Product product = productService.findProductById(id);
        if(product == null){
            return ResponseEntity.notFound().build();
        }
        else {
            return ResponseEntity.ok(product);
        }
    }
}
