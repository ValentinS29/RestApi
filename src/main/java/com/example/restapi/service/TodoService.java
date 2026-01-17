package com.example.restapi.service;

import com.example.restapi.model.Todo;
import com.example.restapi.repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    private final TodoRepository repository;

    public TodoService(TodoRepository repository) {
        this.repository = repository;
    }

    public List<Todo> findAll() {
        return repository.findAll();
    }

    public Optional<Todo> findById(Long id) {
        return repository.findById(id);
    }

    public Todo create(Todo todo) {
        todo.setId(null);
        return repository.save(todo);
    }

    public Optional<Todo> update(Long id, Todo updated) {
        return repository.findById(id).map(existing -> {
            existing.setTitle(updated.getTitle());
            existing.setCompleted(updated.isCompleted());
            return repository.save(existing);
        });
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
