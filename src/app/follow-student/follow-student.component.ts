import { Component } from '@angular/core';
import { collectionSnapshots, DocumentSnapshot } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import addQuiz from '../models/addQuiz';
import quizQuestions from '../models/quizQuestions';
import quizzes from '../models/quizzes';
import studentAns from '../models/studentAns';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-follow-student',
  templateUrl: './follow-student.component.html',
  styleUrls: ['./follow-student.component.css']
})
export class FollowStudentComponent {
  all_answers: any[] = [];
  studentAns:studentAns;
  quizzes:quizzes;
  addQuiz:addQuiz;
  answer?:string;
  ans?:string;
  ref?:string;
  gradeview?:number;

  constructor(private serverService: ServerService) {
    this.studentAns=new studentAns();
    this.quizzes=new quizzes();
    this.addQuiz=new addQuiz;
    this.studentAns.ans=this.ans;
    this.addQuiz.answer=this.answer;

  }

   compareAnswers(all_answers:[ans:studentAns],all_questions:[answer:addQuiz]){

    if(all_answers===all_questions){
      console.log("true");
    }
    else{
      console.log("false");
    }
   }

   getgradeofstudentDocument() {
    this.serverService.getstudentgradeDocument().then((data: DocumentSnapshot) => {
      this.gradeview = data?.data()?.['grade'];
      
    });
  console.log(this.gradeview)
  return (this.gradeview);
  }



  ngOnInit() {

    collectionSnapshots(this.serverService.getAll3()).pipe(
      map((allDocs) => {
        return allDocs.map((doc) => {
          return ({ id: doc.id, ...doc.data() })
        })
      }))
      .subscribe(data => {
        this.all_answers = data;
        console.log(data);
      });

      


    }
}
