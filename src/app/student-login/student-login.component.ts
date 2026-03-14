import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuth } from '../models/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent {
  @ViewChild("f") loginForm?: NgForm;

  constructor(private authService: AuthService,
    private router: Router) { }

  onSubmit() {
    let user = new UserAuth(this.loginForm?.value.username, this.loginForm?.value.password)

    this.authService.login(user).then((userData: UserCredential) => {
      console.log(userData.user.uid);
      this.router.navigate(['/','student-page']);
    });
  }
}
