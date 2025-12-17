package com.example.taskmanager.auth;

import com.example.taskmanager.security.JwtUtil;
import com.example.taskmanager.user.Role;
import com.example.taskmanager.user.User;
import com.example.taskmanager.user.UserRepository;



import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    public AuthController(UserRepository userRepository,
                          PasswordEncoder passwordEncoder,
                          AuthenticationManager authenticationManager,
                          JwtUtil jwtUtil) {

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {

        if (userRepository.findByUsername(request.username()).isPresent()) {
            return "User already exists";
        }

        /* User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER) // <--- default role
                .build(); */
        User user = new User();
        user.setUsername(request.username());
        user.setPassword(passwordEncoder.encode(request.password()));
        user.setRole(Role.USER);

        userRepository.save(user);

        return "User registered successfully";
    }

    @PostMapping("/login")
public AuthResponse login(@RequestBody AuthRequest request) {
   
    // 1. Manually fetch the user to check the stored hash
    User user = userRepository.findByUsername(request.username())
            .orElseThrow(() -> new RuntimeException("User not found in DB"));

    // 2. Manually check if the password matches the hash
    boolean matches = passwordEncoder.matches(request.password(), user.getPassword());
   

    if (!matches) {

        throw new RuntimeException("Password does not match stored hash");
    }

    // 3. If manual check passes, try the official authentication
    try {
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.username(), request.password())
        );
      
    } catch (Exception e) {
        
        throw e;
    }

    String token = jwtUtil.generateToken(request.username());

    
    return new AuthResponse(token);
   }
}
