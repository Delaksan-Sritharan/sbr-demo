package com.delaksan.sbrdemo.service;

import com.delaksan.sbrdemo.exception.StudentAlreadtExistsExcception;
import com.delaksan.sbrdemo.model.Student;
import com.delaksan.sbrdemo.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService implements IStudentService{
    private final StudentRepository studentRepository;

    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }
    @Override
    public Student addStudent(Student student) {
        if (studentAlreadyExists(student.getEmail())){
            throw new StudentAlreadtExistsExcception(student.getEmail()+" already exists!");
        }
        return studentRepository.save(student);
    }

    @Override
    public Student updateStudent(Student student, Long id) {
        return null;
    }

    @Override
    public Student getStudentById(Long id) {
        return null;
    }

    @Override
    public void deleteStudent(Long id) {

    }
    private boolean studentAlreadyExists(String email){
        return studentRepository.findByEmail(email).isPresent();
    }
}

