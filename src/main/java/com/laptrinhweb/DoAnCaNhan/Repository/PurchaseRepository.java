package com.laptrinhweb.DoAnCaNhan.Repository;

import com.laptrinhweb.DoAnCaNhan.Entity.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PurchaseRepository extends JpaRepository<Purchase,Integer> {
}
