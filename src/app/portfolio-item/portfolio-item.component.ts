import { Component, OnInit, Input} from '@angular/core';
import { portfolioItem } from '../portfolio-item';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit {
  @Input() item: portfolioItem;

  detail = false;
  skill = false;
  main = true;
  constructor() { }

  ngOnInit() {
  }

  toggleView(view):void{
    if(view == 'skill'){
      this.skill = !this.skill;
      if(!this.skill){
        this.detail = true;
      }
    }
    else if (view == 'detail'){
      this.detail = !this.detail;
      this.main = !this.main;
      if(this.skill){
        this.main = false;
      }
    }
  }
}
