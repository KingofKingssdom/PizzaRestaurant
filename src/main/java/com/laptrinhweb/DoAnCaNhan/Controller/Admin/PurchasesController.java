package com.laptrinhweb.DoAnCaNhan.Controller.Admin;

import com.laptrinhweb.DoAnCaNhan.Entity.Purchase;
import com.laptrinhweb.DoAnCaNhan.Service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Controller
public class PurchasesController {
    private PurchaseService purchaseService;
    @Autowired
    public PurchasesController(PurchaseService purchaseService) {
        this.purchaseService = purchaseService;
    }
    @GetMapping("/getAllPurchase")
    public List<Purchase> getllAll(){
        return purchaseService.findAll();
    }
    //Lấy ra trang order_management
    @GetMapping("/Purchase")
    public String homePurchase(Model model){
        model.addAttribute("purchase",getllAll());
        return "Admin/orders_management";
    }
    //Tìm kiếm theo id sau đó xóa
    @GetMapping("/purchase/{id}")
    public String deletePurchase(@PathVariable int id, Model model){
        Purchase purchase = purchaseService.findPurchaseById(id);
        purchaseService.deletePurchase(purchase);
        model.addAttribute("purchase",getllAll());
        return "Admin/orders_management";
    }

}
