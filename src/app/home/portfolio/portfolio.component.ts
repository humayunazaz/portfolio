import { AuthService } from './../../services/auth.service';
import { PortfolioService } from './../../services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, animation, useAnimation } from '@angular/animations';
import { bounceLeft, bounceRight } from './../animation/animation';

declare var jQuery:any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
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
export class PortfolioComponent implements OnInit {
  portfolios = [];
  show = 6;
  edit = false;
  single = {};
  create = false;
  user;
  heightTop;
  displayed = false;
  constructor(private port:PortfolioService, private auth:AuthService) { }

  ngOnInit() {
    this.port.getAll().subscribe(
      data => {
        this.portfolios = data;
      }
    )
    this.auth.$user.subscribe(
      data => {
        this.user = data;
      }
    )

    this.heightTop = jQuery("#portfolio").offset().top - 150;
  }

  display(value){
    this.edit = false;
    this.single = value;
    this.create = false;
  }

  edited(value){
    this.edit = true;
    this.single = value;
    this.create = false;
  }

  saveEdit(value, id){
    this.port.update(value, id);
    jQuery('#portfolioModal').modal('hide');
  }

  createWork(value){
    this.port.create(value);
    jQuery('#portfolioModal').modal('hide');
  }

  onScroll(event){
    if(window.pageYOffset >= this.heightTop){
      this.displayed = true;
    }
  }

}
