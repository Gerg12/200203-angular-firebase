import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LessonsService } from "../shared/lessons.service";

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
  }

  categories = [
    "Americano",
    "Flat White",
    "Cappuccino",
    "Latte",
    "Espresso",
    "Machiato",
    "Mocha",
    "Hot Chocolate",
    "Tea"
  ];

  lesson = [];

  addCoffee = coffee => this.lesson.push(coffee);

  removeCoffee = coffee => {
    let index = this.lesson.indexOf(coffee);
    if (index > -1) this.lesson.splice(index, 1);
  };

  onSubmit() {
    this.lessonsService.form.value.lesson = this.lesson;
    let data = this.lessonsService.form.value;

    this.lessonsService.createLesson(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }

}
