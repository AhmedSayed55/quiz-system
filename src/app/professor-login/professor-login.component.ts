import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { professorAuth } from '../models/professorAuth'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-professor-login',
  templateUrl: './professor-login.component.html',
  styleUrls: ['./professor-login.component.css']
})
export class ProfessorLoginComponent {
  @ViewChild("f") loginForm?: NgForm;

  constructor(private authService: AuthService,
    private router: Router) { }

  onSubmit() {
    let user = new professorAuth(this.loginForm?.value.username, this.loginForm?.value.password)

    this.authService.login(user).then((userData: UserCredential) => {
      console.log(userData.user.uid);
      this.router.navigate(['/','professor-page']);
    });
  }
}
