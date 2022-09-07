package org.ntg.backend.repos;

import org.ntg.backend.entities.Users;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends CrudRepository<Users, Long> {


  Users findByUserNameAndPassword(String userName, String Password);

}
