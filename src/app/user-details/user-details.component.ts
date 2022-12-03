import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VaccineService } from '../vaccine.service';
import { User } from './User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  constructor(private http : HttpClient ,private userService : VaccineService){}
  users : User[];
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((userList) =>{
      this.users = userList;
    });
  }

  

  
}
