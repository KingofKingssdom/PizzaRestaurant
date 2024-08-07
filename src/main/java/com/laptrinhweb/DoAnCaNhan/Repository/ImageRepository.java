package com.laptrinhweb.DoAnCaNhan.Repository;

import com.laptrinhweb.DoAnCaNhan.Entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image,Integer> {
}
