package org.ntg.backend.controller;

import org.ntg.backend.dto.LoginRequest;
import org.ntg.backend.dto.LoginResponse;
import org.ntg.backend.entities.Users;
import org.ntg.backend.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/rest")
public class LoginAPI {


  @Autowired
  private UserRepo _UserRepo;

  @GetMapping("/hello")
  public String Hellow() {
    return "Welcome Bank Misr Summary Training Team ";
  }


  @PostMapping("/login")
  public LoginResponse login(@RequestBody LoginRequest req) {
    try {


      Users row = this._UserRepo.findByUserNameAndPassword(req.getUser_name(), req.getPassword());

      if (row == null  ) {
        return new LoginResponse(null, "Invalid User Name Or Password");

      } else {

        return new LoginResponse(row.getFull_name(), null);


      }


    } catch (Exception ex) {
      return new LoginResponse(null, ex.getMessage());
    }

  }


}
