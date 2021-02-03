import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iuser} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private httpClient: HttpClient) {
  }

  fetchUserWithId(id): Observable<Iuser> {
    return this.httpClient.get<Iuser>('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
