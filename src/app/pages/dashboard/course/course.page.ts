import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage {

  courseName = ""

  private route = inject(ActivatedRoute);

  constructor() {
    this.courseName = this.route.snapshot.params['course'] as string
  }

}
