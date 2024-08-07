package com.laptrinhweb.DoAnCaNhan.Repository;

import com.laptrinhweb.DoAnCaNhan.Entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {
}
