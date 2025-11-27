package com.example.taskmanager.dto;

public record TaskRequestDTO(
        String title,
        boolean completed
) { }