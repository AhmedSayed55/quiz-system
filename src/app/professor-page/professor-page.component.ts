import { Component, OnInit } from '@angular/core';

import { collectionSnapshots, DocumentReference } from '@angular/fire/firestore';
import user from '../models/user';
import { ServerService } from '../services/server.service';
import quizzes from '../models/quizzes' ;
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-professor-page',
  templateUrl: './professor-page.component.html',
  styleUrls: ['./professor-page.component.css']
})
export class ProfessorPageComponent implements OnInit {



  ref?: string;
  all_users: any[] = [];
  constructor(private serverService: ServerService) {
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

    sendQuizName(name:any){
      this.serverService.quizName3=name;
      console.log(name);
    }

    delete() {
      if (this.ref != null) {
        this.serverService.deleteDocument(this.ref).then(() => {
        });
      } else {
        alert("quiz Id is required")
      }
    }
    
}
