import { Component } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent{

  newGoal: string;
  filter: string;
  x;
  tasks: Todo[]= [
    {task: "Eat food", completed: true},
    {task: "Pet dogs", completed: true},
    {task: "sleep", completed: false},
    {task: "Play soccer", completed: false}
  ];

  completeCheck = (el: Todo): boolean => el.completed === false;
  emptyList = (): boolean => {
    if (this.tasks.length !== 0) {
      return false;
    } else return true;
  }
  completeTask = (el) => el.completed = true;
  removeTask = (el) => this.tasks.splice(this.tasks.indexOf(el), 1);
  addTask = () => {
    let add: Todo = { task: this.newGoal, completed: false};
    this.tasks.push(add);
  }
}