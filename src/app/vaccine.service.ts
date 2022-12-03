import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user-details/User';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

 
  constructor( private http : HttpClient) { }
  getAllUsers(){
    return this.http.get<User[]>('api/user');
    
  }
}
