import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {

  constructor(private db:AngularFireDatabase) { }
  
  getAll(){
    return this.db.list('/works');
  }

  update(value, id){
    return this.db.object('/works/' + id).update(value);
  }

  create(value){
    return this.db.list('/works').push(value);
  }

  delete(id){
    return this.db.object("/works/" + id).remove();
  }

}
