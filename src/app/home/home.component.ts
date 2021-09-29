import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  currentLesson = null;
  lessons = [];

  themeColor = 'red';

  clearInput (input: string) {
    this[input] = "";
  } 

  selectLesson (lesson: { title: string }) {
    console.log(lesson)
    this.currentLesson = lesson
  }

  constructor(private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.lessons = this.lessonsService.all();
  }

}
