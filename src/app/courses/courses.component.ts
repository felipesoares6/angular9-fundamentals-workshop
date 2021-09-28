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
    this.resetSelectedCourse();
    this.loadCourses();
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

  cancel() {
    this.resetSelectedCourse();
  }

  deleteCourse(courseId: number) {
    this.coursesService.delete(courseId);
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService.update(course);
    } else {
      this.coursesService.create(course)
        .subscribe(() =>  this.loadCourses())
        
        
    }

    this.courses = this.coursesService.all();
  }
}
