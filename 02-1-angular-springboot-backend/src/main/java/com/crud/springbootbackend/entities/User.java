package com.crud.springbootbackend.entities;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document(collection = "Users")
public class User implements Serializable {
    @Id
    private String id;
    private String userName;
    private String lastName;
    @DBRef  //reference to another document
    private Role role;

}
