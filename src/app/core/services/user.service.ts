import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  public Url: string = 'http://swet.site.api:92/api/Users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.Url);
  }
}
