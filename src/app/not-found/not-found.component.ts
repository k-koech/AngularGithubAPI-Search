import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template:`<div class="container">
  <div class="alert alert-danger">Page not found!!!</div>
</div>`,
  styles: [`
  .container{
      display:flex;
      align-items:center;
      justify-content: center;
      height:80vh;
  }

  `]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
