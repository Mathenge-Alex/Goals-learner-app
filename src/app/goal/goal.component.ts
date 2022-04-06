import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    {id:1, name: "Watch a movie", desc: "On netflix"},
    {id: 2, name: "See my Friend", desc: "With some drink"},
    {id: 3, name: "Sleep tight", desc: "Till 9pm"},
    {id: 4, name: "Compose a joke", desc: "Post on tiktok"},
    {id: 5, name: "Eat a fruit on the swing", desc: "a melon or an apple"}
  ]

  constructor() { }
 
  ngOnInit(): void {
  }

}
