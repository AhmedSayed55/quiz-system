import { Component } from '@angular/core';
import { collectionSnapshots, DocumentReference, DocumentSnapshot } from '@angular/fire/firestore';
import user from '../models/user';
import { ServerService } from '../services/server.service';
import { map } from 'rxjs/operators';
import quizzes from '../models/quizzes';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent {
  id: number = 0;
  userName: string = "";
  score: number =0;
  courseName: string="";
  quizName?:string ;
  user: user;
  btn?:string;
  studentGrade:number=0;
  ref?: string;
  all_users: any[] = [];
  sname?:string;
  counter:number=0;
  quizzes:quizzes;
  test?:number;
  enabled:boolean=false;
  checkquiz:string="";

  constructor(private serverService: ServerService) {
    this.quizzes= new quizzes();
    this.user = new user();
   }



  addNewDocument() {
    this.user.id = this.id;
    this.user.userName = this.userName;
    this.user.score=this.score;
    this.user.courseName=this.courseName;
    this.user.quizName=this.quizName;
    this.serverService.addNewDocument(this.user).then((ref: DocumentReference) => {
      this.ref = ref.id
    });
  }

   sendQuizName(name:any){
    this.serverService.quizName3=name;

  }


/*   addNewGradeWithSpecificID() {
    this.grade.studentGrade=this.studentGrade;
    if (this.sname != null) {
      this.serverService.addNewGradeWithSpecificID(this.grade, this.sname!).then(() => {
        alert("added");
      });
    } else {
      alert("document Id is required")
    }
  } */
          disbalebutton(){
            if(this.counter>=2){
              this.enabled=!this.enabled;
            }
            
            console.log(this.enabled)
          }


          updatestudentcountDocument(quiz:string) {
            this.ref=quiz;
            console.log('quiz name '+this.ref);
            this.serverService.getDocument(this.ref).then((data: DocumentSnapshot) => {
            this.counter = data?.data()?.['count'];
            if(this.counter>=1){
                this.checkquiz='false';
            }      
            this.quizzes.count = this.counter;   
            this.counter++;            
           if (this.ref != null) {
             this.serverService.updatestudentDocument(this.ref, this.counter).then(() => {
             });
             this.serverService.updateavailbleDocument(this.ref, this.checkquiz).then(() => {
            });
           } 

        });
  } 


  updatequizavailbleDocument(quiz:string) {
    this.ref=quiz;
    this.serverService.getDocument(this.ref).then((data: DocumentSnapshot) => {
    this.checkquiz = data?.data()?.['available'];   
    this.quizzes.available = this.checkquiz;   
   if (this.ref != null) {
     this.serverService.updatestudentDocument(this.ref, this.counter).then(() => {
     });
     console.log('counter after increase '+ this.counter);
   } 
  
});
} 




   ngOnInit() {

    collectionSnapshots(this.serverService.getAll()).pipe(
      map((allDocs) => {
        return allDocs.map((doc) => {
          return ({ id: doc.id, ...doc.data() })
        })
      }))
      .subscribe(data => {
        this.all_users = data;
      });
    }
}
