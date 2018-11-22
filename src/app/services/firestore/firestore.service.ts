import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor() { }

  fs = firebase.firestore();


  addCol(col, obj) {
    return new Promise((resolve) => {
      return this.fs.collection(col).add(obj).then((result) => {
        result.update({ id: result.id }).then(() => {
          return resolve()
        })
      })
    })
  }

  setDoc(doc, obj) {
    return new Promise((resolve) => {
      return this.fs.doc(doc).set(obj).then(() => {
        return resolve()
      })
    })
  }

  updateDoc(doc, obj) {
    return new Promise((resolve) => {
      return this.fs.doc(doc).update(obj).then(() => {
        return resolve()
      })
    })
  }

  deleteDoc(doc, obj) {
    return new Promise((resolve) => {
      return this.fs.doc(doc).delete().then(() => {
        return resolve()
      })
    })
  }

  getDoc(doc) {
    return new Promise((resolve) => {
      return this.fs.doc(doc).get().then((result) => {
        return resolve(result.data())
      })
    })
  }

  getCol(col) {
    return new Promise((resolve) => {
      return this.fs.collection(col).get().then((snapshot) => {
        let objs = [];
        snapshot.forEach((obj) => {
          objs.push(obj.data())
        })
        return resolve(objs)
      })
    })
  }
  subscribeCol(col) {
    return new Observable((subscriber) => {
     this.fs.collection(col).onSnapshot((snapshot) => {
        let objs = [];
        snapshot.forEach((obj) => {
          objs.push(obj.data())
        })
        subscriber.next(objs)
      })
    })
  }
  subscribeDoc(doc) {
    return new Observable((subscriber) => {
     this.fs.doc(doc).onSnapshot((snapshot) => {
        subscriber.next(snapshot.data())
      })
    })
  }
  
}
