package com.laptrinhweb.DoAnCaNhan.Controller.Admin;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ControllerCommon {
    @GetMapping("/admin")
    public String homeCommon(){
        return "/Admin/index";
    }


}
