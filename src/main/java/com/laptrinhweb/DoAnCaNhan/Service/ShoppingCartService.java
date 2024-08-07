package com.laptrinhweb.DoAnCaNhan.Service;

import com.laptrinhweb.DoAnCaNhan.Entity.Order;
import com.laptrinhweb.DoAnCaNhan.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoppingCartService {
    private OrderRepository orderRepository;
    @Autowired
    public ShoppingCartService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }
    // Phương thức lấy toàn bộ đơn hàng
    public List<Order> findAll(){
        return orderRepository.findAll();
    }
    // Phương thức lấy đơn hàng theo id
    public Order findById(int id){
        return orderRepository.findById(id).orElseThrow();
    }
    // Phương thức xóa đơn hàng
    public void deleteOrder(Order order){
       orderRepository.delete(order);
    }
}
