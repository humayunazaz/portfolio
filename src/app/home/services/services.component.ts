import { singleService } from './../../models/service';
import { bounceLeft, bounceRight } from './../animation/animation';
import { AuthService } from './../../services/auth.service';
import { ServiceService } from './../../services/service.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, animation, useAnimation } from '@angular/animations';

declare var jQuery:any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  host: {
    '(window:scroll)' : 'onScroll($event)'
  },
  animations: [
    trigger('bounceLeft', [
      transition(':enter', [
        style({opacity: 0}),
        useAnimation(bounceLeft)
      ])
    ]),
    trigger('bounceRight', [
      transition(':enter', [
        style({opacity: 0}),
        useAnimation(bounceRight)
      ])
    ])
  ]
})
export class ServicesComponent implements OnInit {
  services = [];
  edit: singleService = {
    title: '',
    content: '',
    icon: '',
    $key: 0
  };
  user;
  display = false;
  heightTop = 550;
  constructor(private sv:ServiceService, private auth:AuthService) { }

  ngOnInit() {
    this.sv.getAll().subscribe(
      data => {
        this.services = data;
      }
    )

    this.auth.$user.subscribe(
      data => {
        this.user = data;
      }
    )
  }

  save(value, id){
    this.sv.update(value, id);
    jQuery('#serviceModal').modal('hide');
    this.edit = {
      title: '',
      content: '',
      icon: '',
      $key: 0
    };
  }

  onScroll(event){
    if(window.pageYOffset >= this.heightTop){
      this.display = true;
    }
  }

}
