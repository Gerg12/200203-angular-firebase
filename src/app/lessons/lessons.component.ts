import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LessonsService } from "../shared/lessons.service";
import { Lesson }    from '../interfaces/lesson';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  constructor(public lessonsService: LessonsService) {}

  ngOnInit() {
  }

  public lessonView = new Lesson( 'Lesson Title', 'general', 'easy');

  get diagnostic() { return JSON.stringify(this.lessonView); }

  categories = [
    "general",
    "html-css"
  ];
  difficulties = [
    "easy",
    "medium",
    "hard"
  ];

  singleLesson = [];

  addLesson = lesson => this.singleLesson.push(lesson);

  removeLesson = lesson => {
    let index = this.singleLesson.indexOf(lesson);
    if (index > -1) this.singleLesson.splice(index, 1);
  };

  onSubmit() {
    this.lessonsService.form.value.lesson = this.singleLesson;
    let data = this.lessonsService.form.value;

    console.log(data);

    this.lessonsService.createLesson(data).then(res => {
      /*do something here....maybe clear the form or give a success message*/
    });
  }

}
