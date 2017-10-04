import { Header } from './../models/header';
import { HeaderService } from './../services/header.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

declare var jQuery:any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() fixed = false;
  user;
  userDetail: Header = {
    name: '',
    title: ''
  };
  menus = [
    {
      title: 'Home',
      icon: 'pe-7s-home'
    },
    {
      title: 'Services',
      icon: 'pe-7s-config'
    },
    {
      title: 'Portfolio',
      icon: 'pe-7s-glasses'
    },
    {
      title: 'Testimonial',
      icon: 'pe-7s-comment'
    },
    {
      title: 'Contact',
      icon: 'pe-7s-help1'
    }
  ];
  constructor(private af:AuthService, private head:HeaderService) {
    this.af.$user.subscribe(
      data => {
        this.user = data; 
      }
    )
    this.head.getAll().subscribe(
      data => {
        this.userDetail = data;
      }
    )
  }

  login(form){
    this.af.login(form.email, form.password);
    jQuery("#login").modal('hide');
  }

  logout(){
    this.af.logout();
  }

  slideTo(el){
    el = el.toLowerCase();
    if(el == 'home'){
      el = 'header';
    }
    $('html, body').animate({
        scrollTop: $("#" + el).offset().top
    }, 2000);
  }

  ngOnInit() {
  }

}
