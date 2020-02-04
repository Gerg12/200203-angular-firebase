import { Component, OnInit } from '@angular/core';
import { LessonsService } from "../shared/lessons.service";

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss']
})
export class LessonListComponent implements OnInit {

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.getLessons();
  }

  lessons;

  getLessons = () =>
    this.lessonsService
      .getLessons()
      .subscribe(res => (this.lessons = res));

  deleteLesson = data => this.lessonsService.deleteLesson(data);

  markCompleted = data => this.lessonsService.updateLesson(data);

}
