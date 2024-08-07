package com.laptrinhweb.DoAnCaNhan.Service;

import com.laptrinhweb.DoAnCaNhan.Entity.Purchase;
import com.laptrinhweb.DoAnCaNhan.Repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PurchaseService {
    private PurchaseRepository purchaseRepository;
    @Autowired
    public PurchaseService(PurchaseRepository purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }
    // tạo và lưu món hàng
    public Purchase createPurchase(Purchase purchase){
        return purchaseRepository.save(purchase);
    }
    // Lấy món hàng theo id
    public Purchase findPurchaseById(int id){
        return purchaseRepository.findById(id).orElseThrow();

    }
    // Xóa các món hàng
    public void deletePurchase(Purchase purchase){
        purchaseRepository.delete(purchase);
    }
    // Lấy tất  cả món hàng
    public List<Purchase> findAll(){
        return purchaseRepository.findAll();
    }

}
