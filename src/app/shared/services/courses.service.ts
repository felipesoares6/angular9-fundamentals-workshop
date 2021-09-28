import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private model = 'courses';

  private courses = [];

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get(this.getUrl());
  }

  find(courseId: number) {
    return this.courses.find(c => c.id === courseId);
  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    const newCourses = this.courses;
    let courseUpdated = newCourses.find(course => course.id == course.id);

    courseUpdated = course;

    this.courses = [course];
  }

  delete(courseId) {
    const filteredCourses = this.courses.filter(course => course.id !== courseId);
    this.courses = filteredCourses;
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }
}
