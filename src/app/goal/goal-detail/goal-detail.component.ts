import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Goal } from 'src/app/goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input() 
  goal!: Goal;  // goal = new Goal;

  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
