import { Component, Input, OnInit } from '@angular/core';
import { Goal } from 'src/app/goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input() 
  goal = new Goal; // Same as goal!: Goal

  constructor() { }

  ngOnInit(): void {
  }

}
