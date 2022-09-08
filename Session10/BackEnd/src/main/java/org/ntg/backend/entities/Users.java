package org.ntg.backend.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "adm_users")
public class Users {
  @Id
  private Long id;

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  @Column(name = "userid")
  private String userName ;



  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getFull_name() {
    return full_name;
  }

  public void setFull_name(String full_name) {
    this.full_name = full_name;
  }

  private String password;
  private String full_name;

  public void setId(Long id) {
    this.id = id;
  }


  public Long getId() {
    return id;
  }
}
