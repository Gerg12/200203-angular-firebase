import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  constructor(private firestore: AngularFirestore) { }

  form = new FormGroup({
    lessonTitle: new FormControl("")
  });

  //Firestore CRUD actions example
  createLesson(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("lessons")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateLesson(data) {
    return this.firestore
      .collection("lessons")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getLessons() {
    return this.firestore.collection("lessons").snapshotChanges();
  }

  deleteLesson(data) {
    return this.firestore
      .collection("lessons")
      .doc(data.payload.doc.id)
      .delete();
  }


}
