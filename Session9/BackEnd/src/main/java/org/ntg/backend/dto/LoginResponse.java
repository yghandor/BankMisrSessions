package org.ntg.backend.dto;

public class LoginResponse {
  public LoginResponse(){}

  public LoginResponse(String full_name, String error) {
    this.full_name = full_name;
    this.error = error;
  }

  private String full_name;

  public String getFull_name() {
    return full_name;
  }

  public void setFull_name(String full_name) {
    this.full_name = full_name;
  }

  public String getError() {
    return error;
  }

  public void setError(String error) {
    this.error = error;
  }

  private String error;

}
