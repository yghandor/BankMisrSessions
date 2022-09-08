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
}
