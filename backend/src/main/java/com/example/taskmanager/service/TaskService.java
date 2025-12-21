package com.example.taskmanager.service;

import com.example.taskmanager.entity.Task;
import com.example.taskmanager.user.User;
import com.example.taskmanager.user.UserRepository;
import com.example.taskmanager.repository.TaskRepository;
import com.example.taskmanager.exception.TaskNotFoundException;
import com.example.taskmanager.dto.TaskRequestDTO;
import com.example.taskmanager.dto.TaskResponseDTO;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class TaskService {
    private final TaskRepository repository;
    private final UserRepository userRepository;

    public TaskService(TaskRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }

    public List<TaskResponseDTO> getAllTasks(String username) {
        return repository.findByUserUsername(username)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public TaskResponseDTO getTask(Long id, String username) {
        Task t = repository.findById(id)
                .filter(task -> task.getUser().getUsername().equals(username))
                .orElseThrow(() -> new TaskNotFoundException(id));
        return toResponse(t);
    }

    public TaskResponseDTO createTask(TaskRequestDTO dto, String username) {
        validateRequest(dto);
        User owner = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        Task task = fromRequest(dto);
        task.setUser(owner); // Assign the join
        return toResponse(repository.save(task));
    }

    public TaskResponseDTO updateTask(Long id, TaskRequestDTO dto, String username) {
        validateRequest(dto);
        Task existing = repository.findById(id)
                .filter(task -> task.getUser().getUsername().equals(username))
                .orElseThrow(() -> new TaskNotFoundException(id));

        existing.setTitle(dto.title());
        existing.setCompleted(dto.completed());
        return toResponse(repository.save(existing));
    }

    public void deleteTask(Long id, String username) {
        Task existing = repository.findById(id)
                .filter(task -> task.getUser().getUsername().equals(username))
                .orElseThrow(() -> new TaskNotFoundException(id));
        repository.delete(existing);
    }

    public TaskResponseDTO updateCompleted(Long id, boolean completed, String username) {
        Task taskf = repository.findById(id)
                .filter(task -> task.getUser().getUsername().equals(username))
                .orElseThrow(() -> new TaskNotFoundException(id));

        taskf.setCompleted(completed);
        return toResponse(repository.save(taskf));
    }

    // Mapping and Validation logic (Keep as is, but ensuring User is linked)
    private TaskResponseDTO toResponse(Task task) {
        return new TaskResponseDTO(task.getId(), task.getTitle(), task.isCompleted());
    }

    private Task fromRequest(TaskRequestDTO dto) {
        Task task = new Task();
        task.setTitle(dto.title());
        task.setCompleted(dto.completed());
        return task;
    }

    private void validateRequest(TaskRequestDTO dto) {
        if (dto.title() == null || dto.title().isBlank()) throw new IllegalArgumentException("Title must not be empty");
    }
}