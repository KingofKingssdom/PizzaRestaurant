package com.laptrinhweb.DoAnCaNhan.Service;

import com.laptrinhweb.DoAnCaNhan.Entity.Product;
import com.laptrinhweb.DoAnCaNhan.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.util.List;

@Service
public class ProductService {
    private ProductRepository productRepository;
    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    // Lấy sản phẩm theo id
    public Product findProductById(int id){
        return productRepository.findById(id).orElseThrow();
    }
    // Lấy toàn bộ sản phẩm
    public List<Product> findAllProduct(){
        return productRepository.findAll();
    }
}
