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

  toggleDetail():void{
    this.detail = !this.detail;
    this.main = !this.main;
  }
  toggleSkill():void{
    this.detail = !this.detail;
    this.skill = !this.skill;
  }
}
