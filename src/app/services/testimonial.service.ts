import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class TestimonialService {

  constructor(private db:AngularFireDatabase) { }

  getAll(){
    return this.db.list('/testimonial');
  }

  update(value, id){
    return this.db.object('/testimonial/' + id).update(value);
  }

  create(value){
    return this.db.list('/testimonial').push(value);
  }


}
