import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  backgroundUrl = 'https://images.unsplash.com/photo-1518600654093-2a24cddafa38?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=96238af4ac6e58d17d362d5b8b846eb4&auto=format&fit=crop&w=2017&q=80'
}
