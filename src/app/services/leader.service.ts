import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { leader } from '../shared/leader';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http:HttpClient) { }

  getLeaders(): Observable<leader[]> {
    return this.http.get<leader[]>(baseURL + 'leadership')
 }
 
 getFeaturedLeader(): Observable<leader> {
  return this.http.get<leader[]>(baseURL + 'leadership?featured=true').pipe(map(leadership=> leadership[0]))
}

}
