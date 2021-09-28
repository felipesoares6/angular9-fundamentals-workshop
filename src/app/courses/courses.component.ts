import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  courses = null;

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.refreshCourses();
  }

  loadCourses() {
    this.coursesService.all()
      .subscribe(courses => this.courses = courses);
  }

  selectCourse (course: any) {
    this.selectedCourse = course;
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

  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  cancel() {
    this.resetSelectedCourse();
  }

  deleteCourse(courseId: number) {
    this.coursesService.delete(courseId)
      .subscribe(() =>  this.refreshCourses());
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService.update(course)
        .subscribe(() =>  this.refreshCourses());
    } else {
      this.coursesService.create(course)
        .subscribe(() =>  this.refreshCourses())
    }
  }
}
