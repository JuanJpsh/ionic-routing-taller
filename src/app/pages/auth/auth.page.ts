import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage{

  idUser = ""
  private router = inject(Router);

  navigate(){
    if (this.idUser == "")
      this.idUser = "empty"
    this.router.navigate(["dashboard", this.idUser])
    this.idUser = ""
  }

}
