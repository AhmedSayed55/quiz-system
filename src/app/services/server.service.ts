import { Injectable } from "@angular/core";
import { addDoc, Firestore, collection, doc, updateDoc, setDoc, getDoc, deleteDoc } from "@angular/fire/firestore";
import addQuiz from "../models/addQuiz";
import quizzes from "../models/quizzes";
import studentAns from "../models/studentAns";
import { AddquizComponent } from "../addquiz/addquiz.component";
import User from "../models/user";
import { studentName } from "../models/studentName";

@Injectable()
export class ServerService {
quizName2?:string;
quizName3?:string;
studentn?:string;
sans?:string;
    constructor(private db: Firestore) {}

    addNewDocument(user: User) {
        const dbInstance = collection(this.db, "user/1/use0r");
        return addDoc(dbInstance, { ...user });
    }

/*     addNewDocument1(addQuiz: addQuiz) {
      const dbInstance = collection(this.db, "quizzes/"+this.quizName2+"/questions");
      return addDoc(dbInstance, { ...addQuiz });
  } */
/*   addNewDocument2(studentAns: studentAns) {
    const dbInstance = collection(this.db, "studentAns");
    return addDoc(dbInstance, { ...studentAns });
} */
/* addNewDocumentTrue(studentAns: studentAns) {
  const dbInstance = collection(this.db, "quizzes/"+this.quizName3+"/students/"+this.studentn+"/answers");
  return addDoc(dbInstance, { ...studentAns });
}
addNewDocumentFalse(studentAns: studentAns) {
  const dbInstance = collection(this.db, "quizzes/"+this.quizName3+"/students/"+this.studentn+"/answers");
  return addDoc(dbInstance, { ...studentAns });
} */



  

    addNewDocumentWithSpecificID(user: User, id: string) {
        const dbInstance = collection(this.db, "user");
        return setDoc(doc(dbInstance, id), { ...user });
    }


    addNewDocumentTrue(studentAns: studentAns, id: string) {
      const dbInstance = collection(this.db, "quizzes/"+this.quizName3+"/students/"+this.studentn+"/answers");
      return setDoc(doc(dbInstance, id), { ...studentAns });
  }


  addNewDocumentFalse(studentAns: studentAns, id: string) {
    const dbInstance = collection(this.db, "quizzes/"+this.quizName3+"/students/"+this.studentn+"/answers");
    return setDoc(doc(dbInstance, id), { ...studentAns });
}


    addNewQuestionWithSpecificID(addQuiz: addQuiz, id: string) {
      const dbInstance = collection(this.db, "quizzes/"+this.quizName2+"/questions");
      return setDoc(doc(dbInstance, id), { ...addQuiz });
  }

    addNewQuizWithSpecificID(quizzes: quizzes, id: string) {
      const dbInstance = collection(this.db, "quizzes");
      return setDoc(doc(dbInstance, id), { ...quizzes });
  }

  addNewStudentWithSpecificID(studentName: studentName, id: string) {
    const dbInstance = collection(this.db,  "quizzes/"+this.quizName3+"/students");
    return setDoc(doc(dbInstance, id), { ...studentName });
}

/* addNewGradeWithSpecificID(grade: grade, id: string) {
  const dbInstance = collection(this.db,  "quizzes/"+this.quizName3+"/students/"+this.studentn+"/grade");
  return setDoc(doc(dbInstance, id), { ...grade });
} */
      updateDocument(id: string, grade: number) {
        const dataUpdate = doc(this.db, "quizzes/"+this.quizName3+"/students", id);
        return updateDoc(dataUpdate, {
            grade : grade
        });
      }

       updatestudentDocument(id: string, count: number) {
        const dataUpdate = doc(this.db, "quizzes", id);
        return updateDoc(dataUpdate, {
            count : count
        });
      }

      updateavailbleDocument(id: string, available: string) {
        const dataUpdate = doc(this.db, "quizzes", id);
        return updateDoc(dataUpdate, {
          available : available
        });
      }

    getDocument(id: string) {
        const dbInstance = collection(this.db, "quizzes");
        return getDoc(doc(dbInstance, id));
    }

    getstudentgradeDocument() {
      const dbInstance = collection(this.db, "quizzes/"+this.quizName3+'/students');
      return getDoc(doc(dbInstance, this.studentn));
  }


    // var el = document.getElementById('*spaM4');

    getAll() {
        return collection(this.db, "quizzes");
    }
    getAll2() {
      return collection(this.db, "quizzes/"+this.quizName3+"/questions");
  }

  getAll5() {
    return collection(this.db, "quizzes/"+this.quizName3+"/questions");
}


  getAll3() {
    return collection(this.db, "quizzes/"+this.quizName3+"/students/"+this.studentn+"/answers");
}

    getAll4() {
      return collection(this.db, "quizzes/"+this.quizName3+"/students");
  }

   
    deleteDocument(id: string) {
      const dataDelete = doc(this.db, "quizzes", id);
      return deleteDoc(dataDelete);
  }

    /*SearchForDocInArray(id: string) {
        return this.listOfDocs.find((doc) => {
            return doc.id == id;
        });
    }*/


    updatestudentcountDocument(id: string, counter: number) {
      const dataUpdate = doc(this.db, "quizzes", id);
      return updateDoc(dataUpdate, {
          counter: counter
      });
  }


}
