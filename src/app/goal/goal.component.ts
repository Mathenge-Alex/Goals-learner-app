import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

    
  goals: Goal[] = [
    new Goal (1, "Watch a movie", "On netflix"),
    new Goal (2, "See my Friend", "With some drink"),
    new Goal (3, "Sleep tight", "Till 9pm"),
    new Goal (4, "Compose a joke", "Post on tiktok"),
    new Goal (5, "Eat a fruit on the swing", "a melon or an apple")
  ]

  toggleDetails(index: number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  } 

  completeGoal(isComplete: any, index:number){
    if (isComplete){
      this.goals.splice(index,1);
    }
  }

  constructor() { }


  ngOnInit(): void {
  }

}
