import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:scroll)' : 'onScroll($event)'
  }
})
export class AppComponent {
  title = 'app';
  fixed = false;
  onScroll(event){
    
    if(window.pageYOffset >= 655){
      this.fixed = true;
    } else{
      this.fixed = false;
    }
  }
}
