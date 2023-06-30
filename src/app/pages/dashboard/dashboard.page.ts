import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Course {
  title: string
  url: string
  icon: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage{

  courses: string[]

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  constructor() {
    const id = this.route.snapshot.params['id'] as string
    this.courses = id.split("")
  }

  logout(){
    this.router.navigate(["/"])
  }

  navigateCourse(courseId: string){
    this.router.navigate(["course", courseId], { relativeTo: this.route })
  }

}
