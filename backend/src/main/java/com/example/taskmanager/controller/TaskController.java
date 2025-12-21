package com.example.taskmanager.controller;

import com.example.taskmanager.dto.TaskResponseDTO;
import com.example.taskmanager.dto.TaskRequestDTO;
import com.example.taskmanager.service.TaskService;
import org.springframework.web.bind.annotation.*;
import java.security.Principal; // Import this
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping
    public List<TaskResponseDTO> getAllTasks(Principal principal) {
        return service.getAllTasks(principal.getName());
    }

    @GetMapping("/{id}")
    public TaskResponseDTO getTaskById(@PathVariable Long id, Principal principal) {
        return service.getTask(id, principal.getName());
    }

    @PostMapping
    public TaskResponseDTO createTask(@RequestBody TaskRequestDTO task, Principal principal) {
        return service.createTask(task, principal.getName());
    }

    @PutMapping("/{id}")
    public TaskResponseDTO updateTask(@PathVariable Long id, @RequestBody TaskRequestDTO updatedTask, Principal principal) {
        return service.updateTask(id, updatedTask, principal.getName());
    }

    @PatchMapping("/{id}")
    public TaskResponseDTO updateCompleted(@PathVariable Long id, @RequestBody Map<String, Boolean> body, Principal principal) {
        boolean completed = body.get("completed");
        return service.updateCompleted(id, completed, principal.getName());
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id, Principal principal) {
        service.deleteTask(id, principal.getName());
    }
}