package com.crud.springbootbackend.repositories;

import com.crud.springbootbackend.entities.Role;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends MongoRepository<Role,String>{}
