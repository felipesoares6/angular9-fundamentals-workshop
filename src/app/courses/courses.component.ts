import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript the really hard parts',
      description: 'Lets get our hands dirty with some js',
      percentComplete: 97,
      favorite: false
    }
  ];

  selectCourse (course: any) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId: number) {
    const filteredCourses = this.courses.filter(course => course.id !== courseId);
    this.courses = filteredCourses;
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    }

    this.selectedCourse = emptyCourse;
  }

  cancel() {
    this.resetSelectedCourse();
  }

  saveCourse() {
    this.courses = [
      ...this.courses,
    ]

    console.log('save course')
  }

  constructor() { }

  ngOnInit(): void {
    this.resetSelectedCourse();
  }

}
