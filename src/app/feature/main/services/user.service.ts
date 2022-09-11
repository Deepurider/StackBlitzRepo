import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  public Url: string = 'https://api.publicapis.org/entries';
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(this.Url);
  }

}