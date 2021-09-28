import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  currentLesson = null;

  themeColor = 'red';
  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  clearInput (input: string) {
    this[input] = "";
  } 

  selectLesson (lesson: { title: string }) {
    console.log(lesson)
    this.currentLesson = lesson
  }

  constructor() { }

  ngOnInit(): void {
  }

}
