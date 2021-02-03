import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iuser} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  fetchUsers(): Observable<Iuser[]>{
    return this.httpClient.get<Iuser[]>('https://jsonplaceholder.typicode.com/users');
}
}
