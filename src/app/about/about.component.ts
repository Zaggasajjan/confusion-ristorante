import { Component, OnInit } from '@angular/core';
import { leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: leader[];

  constructor(private leaderService: LeaderService) { }

  ngOnInit(): void {

    this.leaders = this.leaderService.getLeaders();
  }

}
