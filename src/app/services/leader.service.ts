import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Observable<leader[]> {
    return of(LEADERS);
 }
 
 getFeaturedLeader(): Observable<leader> {
  return of(LEADERS.filter((leader) => leader.featured)[0]);
}

}
