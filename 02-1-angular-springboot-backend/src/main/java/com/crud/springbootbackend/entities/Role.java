package com.crud.springbootbackend.entities;
import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document(collection = "Roles")
public class Role implements Serializable{
    @Id
    private String id;
    private String roleName;

}