package com.laptrinhweb.DoAnCaNhan.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/page")
public class CommonController {
    // Đi đến trang chủ
    @GetMapping("/home")
    public String trangchu(){
        return "User/home-page";
    }
    // Đi đến trang giới thiệu
    @GetMapping("/about")
        public String gioiThieu(){
        return "User/about-page";
    }
    // Đi đến trang thực đơn
    @GetMapping("/menu")
    public String thucdon(){
        return "User/menu-page";
    }


}
