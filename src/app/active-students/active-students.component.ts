import { Component } from '@angular/core';
import { collectionSnapshots } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import quizzes from '../models/quizzes';
import { studentName } from '../models/studentName';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-active-students',
  templateUrl: './active-students.component.html',
  styleUrls: ['./active-students.component.css']
})
export class ActiveStudentsComponent {
  studentName:studentName;
  userName?:string;
  quizzes:quizzes;
  quizName?:string;
  constructor(private serverService: ServerService) {
  this.studentName=new studentName;
  this.quizzes=new quizzes;

    }
    all_students: any[] = [];



    sendUserName(sname:any){
      this.serverService.studentn=sname;
      console.log(sname);
    }

  ngOnInit() {

    collectionSnapshots(this.serverService.getAll4()).pipe(
      map((allDocs) => {
        return allDocs.map((doc) => {
          return ({ id: doc.id, ...doc.data() })
        })
      }))
      .subscribe(data => {
        this.all_students = data;
      });
    }
}
