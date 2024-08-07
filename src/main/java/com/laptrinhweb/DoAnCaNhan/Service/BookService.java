package com.laptrinhweb.DoAnCaNhan.Service;

import com.laptrinhweb.DoAnCaNhan.Entity.Book;
import com.laptrinhweb.DoAnCaNhan.Repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {
    private BookRepository bookRepository;
    @Autowired
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    // Phương thức post xuống database
    public Book createBook(Book book){
        return bookRepository.save(book);
    }
    // Phương thức lấy ra tất cả
    public List<Book> findAllBook (){
        return bookRepository.findAll();
    }
    // Phương thức lấy ra theo id
    public Book findBookById(int id){
        return bookRepository.findById(id).orElseThrow();
    }
    // Phương thức Xóa tất cả
    public void deleteBook(Book book){
        bookRepository.delete(book);
    }
}
