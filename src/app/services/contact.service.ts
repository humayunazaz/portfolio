import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

  constructor(private db:AngularFireDatabase) { }

  get(){
    return this.db.object('/aboutMe');
  }

  update(value){
    return this.db.object('/aboutMe').update(value);
  }

  create(value){
    return this.db.list('/messages').push(value);
  }
}
