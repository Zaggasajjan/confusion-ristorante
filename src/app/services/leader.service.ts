import { Injectable } from '@angular/core';
import { leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';


@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }

  getLeaders(): Promise<leader[]> {
    return Promise.resolve(LEADERS);
 }
 
 getFeaturedLeader(): Promise<leader> {
  return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
}

}
