import { Component } from '@angular/core';
import { TwitterAuthProvider } from '@angular/fire/auth';
import { collectionSnapshots, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs';
import questions from '../models/addQuiz';
import addQuiz from '../models/addQuiz';
import quizzes from '../models/quizzes';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css'],

})


export class AddquizComponent {
  all_addQuestion: any[] = [];
  questions: questions;
  addQuiz:addQuiz;
  quizzes:quizzes;
  question?:string;
  answer?:string;
  que?: string;
  public quizName?:string;
  courseName?:string;
  qid?:string;
  show:boolean=false;
  counter:number=1;

  constructor(private serverService: ServerService) {
    this.questions = new questions();
    this.addQuiz=new addQuiz();
    this.quizzes=new quizzes();

  }

/*   addNewDocument1() {
    this.addQuiz.question = this.question;
    this.addQuiz.answer = this.answer;

    this.serverService.addNewDocument1(this.addQuiz).then((que: DocumentReference) => {
      this.que = que.id
    });
  } */


 

  addNewQuestionWithSpecificID() {
    this.addQuiz.question = this.question;
    this.addQuiz.answer = this.answer;
    this.qid="question "+this.counter;
    if (this.qid != null) {
      this.serverService.addNewQuestionWithSpecificID(this.addQuiz, this.qid!).then(() => {
        alert("added");
      });
    } else {
      alert("document Id is required")
    }
    this.counter++;
  }

  addNewQuizWithSpecificID() {
    this.quizzes.quizName = this.quizName;
    this.quizzes.courseName = this.courseName;
    this.quizzes.count=0;
    this.qid=this.quizName;
    this.quizzes.available="true";
    if (this.qid != null) {
      this.serverService.addNewQuizWithSpecificID(this.quizzes, this.qid!).then(() => {
        alert("added");
      });
    } else {
      alert("document Id is required")
    }
      this.serverService.quizName2=this.quizName;
  }

  showHide(){
    this.show=true;
  }

  ngOnInit() {

    collectionSnapshots(this.serverService.getAll5()).pipe(
      map((allDocs) => {
        return allDocs.map((doc) => {
          return ({ id: doc.id, ...doc.data() })
        })
      }))
      .subscribe(data => {
        this.all_addQuestion = data;
      });
    }




}



