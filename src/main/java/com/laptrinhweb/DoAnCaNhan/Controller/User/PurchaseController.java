package com.laptrinhweb.DoAnCaNhan.Controller.User;

import com.laptrinhweb.DoAnCaNhan.Entity.Purchase;
import com.laptrinhweb.DoAnCaNhan.Service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/buy")
public class PurchaseController {
    private PurchaseService purchaseService;
    @Autowired
    public PurchaseController(PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }
    // Tạo và lưu các trường về mua hàng xuống database
    @PostMapping("/save")
    public Purchase savePurchase(@RequestBody Purchase purchase){
        return purchaseService.createPurchase(purchase);
    }

}
