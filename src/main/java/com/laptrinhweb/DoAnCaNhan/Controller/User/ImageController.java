package com.laptrinhweb.DoAnCaNhan.Controller.User;

import com.laptrinhweb.DoAnCaNhan.Entity.Image;
import com.laptrinhweb.DoAnCaNhan.Service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/image")
public class ImageController {
    private ImageService imageService;
    @Autowired
    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }
    // Tạo các trường thông tin để lưu ảnh xuống database
    @PostMapping("/save")
    public ResponseEntity<String> saveImage(@RequestParam("image") MultipartFile image){
        imageService.createImage(image);
        return ResponseEntity.ok("Lưu ảnh thành công");
    }
    // Lấy ảnh theo id
    @GetMapping("/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable int id) {
        Image image = imageService.findImageById(id);
        if (image != null) {
            HttpHeaders httpHeaders = new HttpHeaders();
            httpHeaders.setContentType(MediaType.IMAGE_JPEG);
            return new ResponseEntity<>(image.getImage(),httpHeaders, HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
