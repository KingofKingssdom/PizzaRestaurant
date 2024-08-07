package com.laptrinhweb.DoAnCaNhan.Repository;

import com.laptrinhweb.DoAnCaNhan.Entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends JpaRepository<Book,Integer> {
}
