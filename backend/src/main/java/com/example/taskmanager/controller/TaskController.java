package com.example.taskmanager.controller;

import com.example.taskmanager.dto.TaskResponseDTO;
import com.example.taskmanager.dto.TaskRequestDTO;
import com.example.taskmanager.service.TaskService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }

    @GetMapping
    public List<TaskResponseDTO> getAllTasks() {
        return service.getAllTasks();
    }

    @GetMapping("/{id}")
    public TaskResponseDTO getTaskById(@PathVariable Long id) {
        return service.getTask(id);
    }

    @PostMapping
    public TaskResponseDTO createTask(@RequestBody TaskRequestDTO  task) {
        return service.createTask(task);
    }

    @PutMapping("/{id}")
    public TaskResponseDTO updateTask(@PathVariable Long id, @RequestBody TaskRequestDTO updatedTask) {
        return service.updateTask(id, updatedTask);
    }

    @PatchMapping("/{id}")
    public TaskResponseDTO updateCompleted(
            @PathVariable Long id,
            @RequestBody Map<String, Boolean> body
    ) {
        boolean completed = body.get("completed");
        return service.updateCompleted(id, completed);
    }


    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) {
        service.deleteTask(id);
    }
}