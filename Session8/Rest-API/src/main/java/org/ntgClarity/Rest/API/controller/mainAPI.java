package org.ntgClarity.Rest.API.controller;


import org.ntgClarity.Rest.API.dto.LoginRequest;
import org.ntgClarity.Rest.API.dto.LoginResponse;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin()
@RestController()
@RequestMapping("/rest")
public class mainAPI {


  @GetMapping("/hello")
  public String HellowWorld(){
      return  "Welcome Yasser";
  }

  @PostMapping("/login")
  public LoginResponse logMe(@RequestBody() LoginRequest req) throws InterruptedException {
    Thread.sleep(2000);
    if(req.getUserName() != null && req.getUserName().equals("admin")){
        return  new LoginResponse("Yasser EL Ghandour");
    }else{
        return  new LoginResponse("Invalid User Name Or Password",  "001");
    }

  }

}
