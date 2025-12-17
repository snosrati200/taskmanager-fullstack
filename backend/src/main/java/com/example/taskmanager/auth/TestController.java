package com.example.taskmanager.auth;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test")
public class TestController {

    // Dieser Endpunkt ist NICHT durch Security geschützt
    @GetMapping("/hello")
    public String getHello() {
        return "Hello, World! Security ist NICHT das Problem.";
    }
}
