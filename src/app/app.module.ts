import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ServerService } from './services/server.service';
import { FormsModule } from '@angular/forms';
import { StudentPageComponent } from './student-page/student-page.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { ProfessorPageComponent } from './professor-page/professor-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { Routes, RouterModule } from '@angular/router';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { RegisterComponent } from './register/register.component';
import { FollowStudentComponent } from './follow-student/follow-student.component';
import { ActiveStudentsComponent } from './active-students/active-students.component';


const appRoutes: Routes = [
  { path: "", component: FirstPageComponent },
  { path: "student-page", component: StudentPageComponent },
  { path: "professor-page", component: ProfessorPageComponent},
  { path: "add-quiz", component: AddquizComponent},
  { path: "quiz", component: QuestionsPageComponent},
  { path: "student-login", component: StudentLoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "professor-login", component: ProfessorLoginComponent},
  { path: "follow", component: FollowStudentComponent},
  { path: "active-students", component: ActiveStudentsComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    QuestionsPageComponent,
    ProfessorPageComponent,
    FirstPageComponent,
    AddquizComponent,
    QuestionsPageComponent,
    StudentLoginComponent,
    ProfessorLoginComponent,
    RegisterComponent,
    FollowStudentComponent,
    ActiveStudentsComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [ServerService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
