package org.ntgClarity.Rest.API.dto;

public class LoginResponse {
  public LoginResponse(){}


  public LoginResponse(String full_name) {
    this.full_name = full_name;
  }

  private String full_name ;

  public LoginResponse(String error, String errorCode) {
    this.error = error;
    this.errorCode = errorCode;
  }

  private String error;

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

  public String getErrorCode() {
    return errorCode;
  }

  public void setErrorCode(String errorCode) {
    this.errorCode = errorCode;
  }

  private String errorCode;




}
