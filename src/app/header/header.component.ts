import { HeaderService } from './../services/header.service';
import { Header } from './../models/header';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, animation, useAnimation } from '@angular/animations';
import * as $ from 'jquery';

declare var jQuery:any; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user;
  content: Header = {
    name: '',
    title: ''
  };

  constructor(private af:AuthService, private headerService:HeaderService) {
    this.af.$user.subscribe(
      data => {
        this.user = data;
      }
    )
  }

  save(form){
    this.headerService.update(form);
    jQuery("#headerModal").modal('hide');
  }

  ngOnInit() {
    this.headerService.getAll().subscribe(
      data => {
        this.content = data;
      }
    )
  }

  goto(){
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 2000);
  }

}
