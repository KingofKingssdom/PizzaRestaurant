package com.laptrinhweb.DoAnCaNhan.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "heading")
    private String heading;
    @Column(name = "title")
    private String title;
    @Column(name = "prices")
    private double prices;
    @OneToOne
    @JoinColumn(name = "product_image_id")
    private Image image;
    public Product() {
    }

    public Product(int id, String heading, String title) {
        this.id = id;
        this.heading = heading;
        this.title = title;
    }
    public Product(int id, String heading, String title, Image image) {
        this.id = id;
        this.heading = heading;
        this.title = title;
        this.image = image;
    }

    public Product(int id, String heading, String title, double prices, Image image) {
        this.id = id;
        this.heading = heading;
        this.title = title;
        this.prices = prices;
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        this.image = image;
    }

    public double getPrices() {
        return prices;
    }

    public void setPrices(double prices) {
        this.prices = prices;
    }
}
