package com.laptrinhweb.DoAnCaNhan.Entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "bookTable")
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "phone")
    private String phone;
    @Column(name = "email")
    private String email;
    @Column(name = "number")
    private String number;
    @Column(name = "day")
    private LocalDate day;
    @Column(name = "time")
    private String time;


    public Book() {
    }

    public Book(int id, String name, String phone, String email, String number,LocalDate day,String time) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.number = number;
        this.day = day;
        this.time = time;
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

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDay() {
        return day;
    }

    public void setDay(LocalDate day) {
        this.day = day;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
