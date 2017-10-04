import { AuthService } from './../../services/auth.service';
import { TestimonialService } from './../../services/testimonial.service';
import { Component, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  testimonials = [];
  create = false;
  edit = false;
  single = {};
  user;
  constructor(private test:TestimonialService, private auth:AuthService) { }

  ngOnInit() {
    this.test.getAll().subscribe(
      data => {
        this.testimonials = data;
      }
    )
    this.auth.$user.subscribe(
      data => {
        this.user = data;
      }
    )
  }

  created(){
    this.create = true;
    this.edit = false;
  }

  edited(value){
    this.create = false;
    this.edit = true;
    this.single = value;
  }

  createTest(value){
    this.test.create(value);
    jQuery('#testimonialModal').modal('hide');
  }

  saveEdit(value, id){
    this.test.update(value, id);
    jQuery('#testimonialModal').modal('hide');
  }
}
