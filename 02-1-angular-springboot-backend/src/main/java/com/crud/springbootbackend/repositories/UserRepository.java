package com.crud.springbootbackend.repositories;


import com.crud.springbootbackend.entities.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
    public interface UserRepository extends MongoRepository<User,String> {
}

