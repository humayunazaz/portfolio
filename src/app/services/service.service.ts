import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {

  constructor(private db:AngularFireDatabase) { }

  getAll(){
    return this.db.list('/services');
  }

  update(value, id){
    return this.db.object('/services/' + id).update(value);
  }
}
