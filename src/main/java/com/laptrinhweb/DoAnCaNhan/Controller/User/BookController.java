package com.laptrinhweb.DoAnCaNhan.Controller.User;

import com.laptrinhweb.DoAnCaNhan.Entity.Book;
import com.laptrinhweb.DoAnCaNhan.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/booking")
public class BookController {
    private BookService bookService;
    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    // Đi đến trang đặt bàn
    @GetMapping("/table")
    public String bookTable(Model model){
        Book book = new Book();
        model.addAttribute("book",book);
        return "User/bookTable-page";
    }

    // Tạo các trường thông tin đặt bàn
    @PostMapping("/add")
    public String bookTable(@ModelAttribute Book book){
        Book bookCreate = bookService.createBook(book);
        return "User/success";
    }
    // Lấy tất cả trường thông tin đặt bàn
    @GetMapping("/getAllBook")
    public List<Book> getAll(){
        return bookService.findAllBook();
    }

    // Phần này của phần admin
    // Lấy hết trường thông tin về đặt bàn dưới database và hiển thị lên giao diện
    @GetMapping("/orderManagement")
    public String homeOrderManagement(Model model){
        model.addAttribute("booking",getAll());
        return "/Admin/order_management";
    }
    // Lấy các trường thông tin theo id, sau đó thực hiện xóa
    @GetMapping("/booking/{id}")
    public String deleteBook (@PathVariable int id, Model model){
        Book book = bookService.findBookById(id);
        bookService.deleteBook(book);
        model.addAttribute("booking",getAll());
        return "/Admin/order_management";
    }
}
