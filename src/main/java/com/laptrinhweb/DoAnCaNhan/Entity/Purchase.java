package com.laptrinhweb.DoAnCaNhan.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "purchase")
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "number")
    private int number;
    @Column(name = "cakeBase")
    private String cakeBase;
    @Column(name = "cakeSize")
    private String cakeSize;
    @Column(name = "prices")
    private double prices;
    @Column(name = "total")
    private double total;

    public Purchase() {
    }

    public Purchase(int id, String name, int number, String cakeBase, String cakeSize, double prices, double total) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.cakeBase = cakeBase;
        this.cakeSize = cakeSize;
        this.prices = prices;
        this.total = total;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getCakeBase() {
        return cakeBase;
    }

    public void setCakeBase(String cakeBase) {
        this.cakeBase = cakeBase;
    }

    public String getCakeSize() {
        return cakeSize;
    }

    public void setCakeSize(String cakeSize) {
        this.cakeSize = cakeSize;
    }

    public double getPrices() {
        return prices;
    }

    public void setPrices(double prices) {
        this.prices = prices;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
}
