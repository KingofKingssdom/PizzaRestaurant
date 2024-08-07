package com.laptrinhweb.DoAnCaNhan.Service;

import com.laptrinhweb.DoAnCaNhan.Entity.Image;
import com.laptrinhweb.DoAnCaNhan.Repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageService {
    private ImageRepository imageRepository;
    @Autowired
    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }
    // Phương thức tạo và lưu ảnh xuống database
    public Image createImage(MultipartFile image){
        Image image1 = new Image();
        image1.setName(image.getOriginalFilename());
        try {
            image1.setImage(image.getBytes());
        }
        catch (Exception e){

        }
        return imageRepository.save(image1);
    }

    // Phương thức lấy ảnh theo id
    public Image findImageById(int id){
        return imageRepository.findById(id).orElseThrow();
    }
}
