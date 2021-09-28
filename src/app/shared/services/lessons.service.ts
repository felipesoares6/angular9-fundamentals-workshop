import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  lessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() { }

  all() {
    return this.lessons;
  }

  create(lesson) {
    this.lessons = [
      ...this.lessons,
      lesson
    ]
  }

  update(lessonTitle) {
    console.log('updated', lessonTitle)
  }

  delete(lessonTitle) {
    const filteredLessons = this.lessons.filter(c => c.title !== lessonTitle);

    this.lessons = filteredLessons;
  }
}
