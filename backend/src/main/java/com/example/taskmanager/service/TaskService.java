package com.example.taskmanager.service;

import com.example.taskmanager.entity.Task;
import com.example.taskmanager.repository.TaskRepository;
import org.springframework.stereotype.Service;
import  com.example.taskmanager.exception.TaskNotFoundException;
import com.example.taskmanager.dto.TaskRequestDTO;
import com.example.taskmanager.dto.TaskResponseDTO;

import java.util.List;

@Service
public class TaskService {
    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    public List<TaskResponseDTO> getAllTasks() {
        return repository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }


    public TaskResponseDTO getTask(Long id) {
        Task t = repository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));

        return toResponse(t);
    }

    public TaskResponseDTO createTask(TaskRequestDTO dto) {
        validateRequest(dto);
        Task task = fromRequest(dto);
        return toResponse(repository.save(task));
    }


    public TaskResponseDTO updateTask(Long id, TaskRequestDTO dto) {
        validateRequest(dto);

        Task existing = repository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));

        existing.setTitle(dto.title());
        existing.setCompleted(dto.completed());

        return toResponse(repository.save(existing));
    }


    public void deleteTask(Long id) {
        repository.deleteById(id);
    }


    private TaskResponseDTO toResponse(Task task) {
        return new TaskResponseDTO(
                task.getId(),
                task.getTitle(),
                task.isCompleted()
        );
    }

    private Task fromRequest(TaskRequestDTO dto) {
        Task task = new Task();
        task.setTitle(dto.title());
        task.setCompleted(dto.completed());
        return task;
    }

    private void validateRequest(TaskRequestDTO dto) {
        if (dto.title() == null || dto.title().isBlank()) {
            throw new IllegalArgumentException("Title must not be empty");
        }
        if (dto.title().length() < 3) {
            throw new IllegalArgumentException("Title must be at least 3 characters long");
        }
        if (dto.title().length() > 100) {
            throw new IllegalArgumentException("Title too long");
        }
    }

    public TaskResponseDTO updateCompleted(Long id, boolean completed) {
        Task task = repository.findById(id)
                .orElseThrow(() -> new TaskNotFoundException(id));

        task.setCompleted(completed);
        return toResponse(repository.save(task));
    }
}
