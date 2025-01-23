package com.example.demo;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "\"user\"")  // Utilisation des guillemets pour échapper le mot réservé
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;

    // Getters and Setters
}