package com.example.taskmanager;

import com.example.taskmanager.user.User;
import com.example.taskmanager.user.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class TaskmanagerApplication {

    public static void main(String[] args) {
        SpringApplication.run(TaskmanagerApplication.class, args);
    }
    
    /**
     * Modern method to ensure a test user exists in the database upon startup.
     * This is crucial for fixing the 403 Forbidden error during login.
     */
    @Bean
    public CommandLineRunner initUser(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            // Check if the user already exists to prevent duplicates
            if (userRepository.findByUsername("user").isEmpty()) {
                User testUser = new User();
                testUser.setUsername("user");
                
                // Secure Hashing using the modern BCryptPasswordEncoder Bean
                testUser.setPassword(passwordEncoder.encode("password")); 
                
                userRepository.save(testUser);
                
            }
        };
    }
}