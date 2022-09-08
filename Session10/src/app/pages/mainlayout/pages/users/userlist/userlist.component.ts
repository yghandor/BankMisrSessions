import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  UserData ?: any[];
  ShowAddDialog = false;

  cols = [
    {field: 'id', header: 'Emp #'},
    {field: 'full_name', header: 'Name'},
    {field: 'userName', header: 'User ID'}
  ];

  constructor(private _http: HttpClient, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.LoadUserData();
  }

  private LoadUserData() {
    let URL = 'http://127.0.0.1:8080/rest/userList';
    this._http.get(URL).subscribe((resp: any) => {

      this.UserData = resp;


    }, error => {

      this.messageService.add({severity: 'error', summary: 'Error', detail: error.message});


    });


  }

  HandleRefresh() {
    this.UserData = undefined;
    this.LoadUserData();
  }

  NewUserObject: any = {};

  AddNewUser() {
    this.Modle = 'add';
    this.NewUserObject = {};
    this.ShowAddDialog = true;
  }

  spingSaveButton = false;

  HandleSave($event: any) {
    this.spingSaveButton = true;
    let url = 'http://127.0.0.1:8080/rest/saveUser';

    if (this.Modle != 'edit') {
      this.NewUserObject.id = -1;
    }

    this._http.post(url, this.NewUserObject).subscribe((resp: any) => {


      if (this.Modle != 'edit') {
        this.UserData?.push(resp);
      }

      this.messageService.add({severity: 'success', summary: 'Save', detail: "User Saved Successfully"});
      this.spingSaveButton = false;
      this.ShowAddDialog = false;

    }, error => {

      this.messageService.add({severity: 'error', summary: 'Error', detail: error.message});
      this.spingSaveButton = false;
    });


  }

  blockedDocument = false;

  DeleteRow(UserData: any) {
    let url = 'http://127.0.0.1:8080/rest/DeleteUser';

    this.blockedDocument = true;

    this._http.post(url, UserData).subscribe((resp: any) => {
      this.UserData = resp;
      this.blockedDocument = false;
    }, error => {
      this.blockedDocument = false;
      this.messageService.add({severity: 'error', summary: 'Error', detail: error.message});
    });


  }

  Modle: string = '';

  EditRow(UserData: any) {
    this.Modle = 'edit';
    this.NewUserObject = UserData;
    this.ShowAddDialog = true;
  }
}
