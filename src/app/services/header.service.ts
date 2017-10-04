import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

  constructor(private db:AngularFireDatabase) {}

  getAll(){
    return this.db.object('/header');
  }

  update(content){
    return this.db.object('/header').update(content);
  }

}
