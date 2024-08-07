package com.laptrinhweb.DoAnCaNhan.Service;

import com.laptrinhweb.DoAnCaNhan.Entity.Order;
import com.laptrinhweb.DoAnCaNhan.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {
    private OrderRepository orderRepository;
    @Autowired
    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }
    // Phương thức tạo và lưu đặt hàng xuống database
    public Order createOrder(Order order){
        return orderRepository.save(order);
    }
    // Phương thức lấy ra toàn bộ đặt hàng
    public List<Order> findAllOrder (){
        return orderRepository.findAll();
    }
}
