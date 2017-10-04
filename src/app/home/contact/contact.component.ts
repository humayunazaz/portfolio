import { singleContact } from './../../models/contact';
import { AuthService } from './../../services/auth.service';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, animation, useAnimation } from '@angular/animations';
import { bounceLeft, bounceRight } from './../animation/animation';

declare var jQuery:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
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
  ],
  host: {
    '(window:scroll)' : 'onScroll($event)'
  }
})
export class ContactComponent implements OnInit {
  detail: singleContact = {
    addr: '',
    email: '',
    phone: '',
    web: '',
    desc: ''
  };
  user;
  display = false;
  heightTop;
  constructor(private contactService:ContactService, private auth:AuthService) { }

  ngOnInit() {
    this.auth.$user.subscribe(
      data => {
        this.user = data;
      }
    )

    this.contactService.get().subscribe(
      data => {
        this.detail = data;
      }
    )

    this.heightTop = jQuery("#contact").offset().top;
  }

  saveEdit(value){
    this.contactService.update(value);
    jQuery('#contactModal').modal('hide');
  }

  saveMessage(fo){
    this.contactService.create(fo.value);
    fo.form.reset();
  }

  onScroll(event){
    if(window.pageYOffset >= this.heightTop){
      this.display = true;
    }
  }

}
