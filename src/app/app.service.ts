import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = '../assets/data/github-data.json';

  constructor(private http: HttpClient) { }


  // getData(): Observable<T> {
  //   return this.http.get(this.url);
  // }
}
