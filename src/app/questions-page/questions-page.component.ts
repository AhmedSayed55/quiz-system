import { Component } from '@angular/core';
import { collectionSnapshots, DocumentReference, DocumentSnapshot,  } from '@angular/fire/firestore';
import studentAns from '../models/studentAns';
import { ServerService } from '../services/server.service';
import { map } from 'rxjs/operators';
import quizzes from '../models/quizzes';
import { studentName } from '../models/studentName';
import addQuiz from '../models/addQuiz';


@Component({
  selector: 'app-questions-page',
  templateUrl: './questions-page.component.html',
  styleUrls: ['./questions-page.component.css']
})


export class QuestionsPageComponent {
  all_questions: any[] = [];
  x:boolean=false;
  studentAns: studentAns;
  ref?: string;
  ans?:string;
  answ?: string;
  quizzes:quizzes;
  quizname?:string;
  studentName:studentName;
  userName?:string;
  sname?:string;
  counter:number=1;
  counter2:number=1;
  ansId?:string;
  addQuiz:addQuiz;
  grade?:number=0;
  gradeId?:string;
  answer?:string;
  submitname?:string=this.serverService.quizName3;
  checkquiz:string='';

  constructor(private serverService: ServerService) {
    this.studentAns = new studentAns();
    this.quizzes=new quizzes();
    this.studentName=new studentName();
    this.addQuiz=new addQuiz();

  }

  

  addNewStudentWithSpecificID() {
    this.studentName.userName=this.userName;
    this.studentName.grade=this.grade;
    this.sname=this.userName;
    if (this.sname != null) {
      this.serverService.addNewStudentWithSpecificID(this.studentName, this.sname!).then(() => {
        alert("added");
      });
    } else {
      alert("document Id is required")
    }
  }

/*   addNewGradeWithSpecificID() {
    this.serverService.studentn=this.userName;
    this.grade.studentGrade=this.studentGrade;
    this.gradeId="grade";
    if (this.gradeId != null) {
      this.serverService.addNewGradeWithSpecificID(this.grade, this.gradeId!).then(() => {
        alert("added");
      });
    } else {
      alert("document Id is required")
    }
  } */


  addNewDocumentTrue() {
    this.serverService.studentn=this.userName;
    this.studentAns.ans = "true";
    this.ansId="answer "+this.counter;
    if (this.ansId != null) {
      this.serverService.addNewDocumentTrue(this.studentAns, this.ansId!).then(() => {
      });
    } else {
      alert("document Id is required")
    }
    this.counter++;
  }

  addNewDocumentFalse() {
    this.serverService.studentn=this.userName;
    this.studentAns.ans = "false";
    this.ansId="answer "+this.counter;
    if (this.ansId != null) {
      this.serverService.addNewDocumentFalse(this.studentAns, this.ansId!).then(() => {
      });
    } else {
      alert("document Id is required")
    }
    this.counter++;


  }


/*   getAnswers() {
    if (this.addQuiz.answer) {
      this.addQuiz.answer.filter(this.answer => {
        if (studentAns.ans === addQuiz.answer) {
          this.addQuiz.correctAnsCount++;
        }
      })
    }
  } */



/*   compareAnswers(all_answers:[ans:studentAns],all_questions:[answer:addQuiz]){

    if(all_answers===all_questions){
      console.log("true");
    }
    else{
      console.log("false");
    }
   } */

/*   addNewDocumentTrue() {
    this.studentAns.ans = "true";

    this.serverService.addNewDocumentTrue(this.studentAns).then((answ: DocumentReference) => {
      console.log("Document Id: " + answ.id);
      this.answ = answ.id
    });
    this.serverService.studentn=this.userName;

  } */

  disableButton(){
   this.x=true;
  }

/*   addNewDocumentFalse() {
    this.studentAns.ans = "false";

    this.serverService.addNewDocumentFalse(this.studentAns).then((answ: DocumentReference) => {
      console.log("Document Id: " + answ.id);
      this.answ = answ.id
    });
    this.serverService.studentn=this.userName;
  } */


  // this.serverService.studentn=this.userName;



    updategradetrue(answer:string) {
    /*this.user.name = this.ref;
    this.user.age = this.counter;*/
    console.log('student answer '+answer=='true');
    console.log('real answer '+answer);
    console.log('student name '+this.userName);
      if(answer=='true'){
        console.log(answer=='true');
    this.ref=this.userName;
    this.studentName.grade=this.counter2;
    if (this.ref != null) {

      this.serverService.updateDocument(this.ref, this.counter2).then(() => {
        alert("updated");
      });
      this.counter2++;
    } 
  }
  }

  updatestudentcountDocument(quiz:string) {
     this.ref=quiz;
     console.log('quiz name '+this.ref);
     this.serverService.getDocument(this.ref).then((data: DocumentSnapshot) => {
     this.counter = data?.data()?.['count'];

     console.log('value of database '+this.counter);
     console.log('counter from database '+ this.counter);
     this.quizzes.count = this.counter;   
     console.log('class value of counter '+this.quizzes.count);
     
      this.counter--;
      if(this.counter<2){
        this.checkquiz='true'
      }
      if (this.ref != null) {
        this.serverService.updatestudentDocument(this.ref, this.counter).then(() => {
        });
        this.serverService.updateavailbleDocument(this.ref, this.checkquiz).then(() => {
        });
        console.log('counter after increase '+ this.counter);
      } 
     
   });
 

} 



  


  updategradefalse(answer:string) {
    /*this.user.name = this.ref;
    this.user.age = this.counter;*/
    console.log('student answer '+answer=='false');
    console.log('real answer '+answer);
    console.log('student name '+this.userName);

    if(answer=='false'){
      console.log(answer=='false');

    this.ref=this.userName;
    console.log('student name '+this.ref);
    this.studentName.grade=this.counter2;
    if (this.ref != null) {

      this.serverService.updateDocument(this.ref, this.counter2).then(() => {
        alert("updated");
      });
      this.counter2++;
    } 
  }
  }


  /*  updateDocument() {
    
      if (this.ref != null) {
        this.serverService.getDocument(this.ref).then((data: DocumentSnapshot) => {
          this.counter = data?.data()?.['counter'];
          this.ref = data.id;
        });
      } else {
        alert("document Id is required")
      }
    
    this.user.name = this.name;
    this.user.age = this.counter;
    if (this.ref != null) {

      this.serverService.updateDocument(this.ref, this.counter).then(() => {
        alert("updated");
      });
      this.counter++;
    } else {
      alert("document Id is required")
    }
  } */



   ngOnInit() {

    collectionSnapshots(this.serverService.getAll2()).pipe(
      map((allDocs) => {
        return allDocs.map((doc) => {
          return ({ id: doc.id, ...doc.data() })
        })
      }))
      .subscribe(data => {
        this.all_questions = data;
      });

    } }
